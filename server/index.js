const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');
require('dotenv').config();
const multer = require('multer');
const fs = require('fs');
const path = require('path');

// Firebase configuration
const admin = require('firebase-admin');

// Initialize Firebase Admin SDK
let db = null;
let useFirebase = false;

try {
  // Try to load service account from file (for development)
  const serviceAccount = require('./serviceAccountKey.json');
  
  // Initialize Firebase Admin
  if (!admin.apps.length) {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount)
    });
  }
  
  db = admin.firestore();
  useFirebase = true;
  console.log('Connected to Firebase Firestore');
} catch (error) {
  console.log('Firebase not configured. Running in development mode with in-memory storage.');
  console.log('To use Firebase, follow the setup guide in FIREBASE_SETUP.md');
  
  // In-memory storage for development
  const inMemoryDB = {
    pages: new Map(),
    blogs: new Map(),
    resources: new Map(),
    contacts: []
  };
  
  // Mock Firebase-like interface
  db = {
    collection: (name) => ({
      doc: (id) => ({
        get: async () => {
          const data = inMemoryDB[name].get(id);
          return {
            exists: !!data,
            id: id,
            data: () => data
          };
        },
        set: async (data) => {
          inMemoryDB[name].set(id, data);
          return { id };
        },
        update: async (data) => {
          const existing = inMemoryDB[name].get(id) || {};
          inMemoryDB[name].set(id, { ...existing, ...data });
          return { id };
        },
        delete: async () => {
          inMemoryDB[name].delete(id);
          return { id };
        }
      }),
      add: async (data) => {
        const id = Date.now().toString();
        inMemoryDB[name].set(id, data);
        return {
          id,
          get: async () => ({
            id,
            data: () => inMemoryDB[name].get(id)
          })
        };
      },
      get: async () => {
        const docs = [];
        inMemoryDB[name].forEach((data, id) => {
          docs.push({ id, data: () => data });
        });
        return {
          forEach: (callback) => docs.forEach(callback)
        };
      },
      orderBy: (field, direction) => ({
        get: async () => {
          const docs = [];
          inMemoryDB[name].forEach((data, id) => {
            docs.push({ id, data: () => data });
          });
          // Simple sorting
          docs.sort((a, b) => {
            const aVal = a.data()[field];
            const bVal = b.data()[field];
            if (direction === 'desc') {
              return bVal > aVal ? 1 : -1;
            }
            return aVal > bVal ? 1 : -1;
          });
          return {
            forEach: (callback) => docs.forEach(callback)
          };
        }
      })
    })
  };
  
  // Mock FieldValue
  admin.firestore = {
    FieldValue: {
      serverTimestamp: () => new Date()
    }
  };
}

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: '*', // For development; restrict in production
    methods: ['GET', 'POST']
  }
});

const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Basic health check
app.get('/', (req, res) => {
  res.send('Chat server is running');
});

let adminSocket = null;
const userSockets = new Map(); // socket.id -> socket

// Socket.IO chat logic
io.on('connection', (socket) => {
  console.log('A user connected:', socket.id);

  // Identify if this is an admin
  socket.on('admin join', () => {
    adminSocket = socket;
    console.log('Admin connected:', socket.id);
    // Send current users to admin
    adminSocket.emit('user list', Array.from(userSockets.keys()));
  });

  // User joins
  socket.on('user join', () => {
    userSockets.set(socket.id, socket);
    // Notify admin of new user
    if (adminSocket) {
      adminSocket.emit('user joined', socket.id);
    }
  });

  // User sends message
  socket.on('chat message', (msg) => {
    if (msg.sender === 'user') {
      // Forward to admin
      if (adminSocket) {
        adminSocket.emit('chat message', { ...msg, userId: socket.id });
      }
    } else if (msg.sender === 'admin' && msg.userId) {
      // Admin reply to specific user
      const userSocket = userSockets.get(msg.userId);
      if (userSocket) {
        userSocket.emit('chat message', { text: msg.text, sender: 'admin', timestamp: new Date() });
      }
    }
  });

  socket.on('disconnect', () => {
    if (socket === adminSocket) {
      adminSocket = null;
      console.log('Admin disconnected');
    } else {
      userSockets.delete(socket.id);
      if (adminSocket) {
        adminSocket.emit('user left', socket.id);
      }
      console.log('User disconnected:', socket.id);
    }
  });
});

// API endpoint to receive contact form submissions
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'All fields are required.' });
    }
    const contact = { name, email, message, createdAt: admin.firestore.FieldValue.serverTimestamp() };
    await db.collection('contacts').add(contact);
    res.status(201).json({ message: 'Contact form submitted successfully.' });
  } catch (error) {
    console.error('Error saving contact:', error);
    res.status(500).json({ error: 'Internal server error.' });
  }
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', database: useFirebase ? 'Firebase' : 'In-Memory' });
});

// Fetch page content
app.get('/api/pages/:slug', async (req, res) => {
  try {
    const pageDoc = await db.collection('pages').doc(req.params.slug).get();
    if (!pageDoc.exists) return res.status(404).json({ error: 'Page not found' });
    res.json({ id: pageDoc.id, ...pageDoc.data() });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// List all pages (for admin panel)
app.get('/api/pages', async (req, res) => {
  try {
    const pagesSnapshot = await db.collection('pages').get();
    const pages = [];
    pagesSnapshot.forEach(doc => {
      const data = doc.data();
      pages.push({
        id: doc.id,
        slug: doc.id,
        title: data.title,
        updatedAt: data.updatedAt
      });
    });
    res.json(pages);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Create a new page
app.post('/api/pages', async (req, res) => {
  try {
    const { slug, title } = req.body;
    if (!slug || !title) return res.status(400).json({ error: 'Slug and title are required.' });
    
    const pageRef = db.collection('pages').doc(slug);
    const pageDoc = await pageRef.get();
    if (pageDoc.exists) return res.status(409).json({ error: 'Page with this slug already exists.' });
    
    const pageData = { 
      slug, 
      title, 
      sections: [],
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
      updatedAt: admin.firestore.FieldValue.serverTimestamp()
    };
    await pageRef.set(pageData);
    res.status(201).json({ id: slug, ...pageData });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Delete a page
app.delete('/api/pages/:slug', async (req, res) => {
  try {
    const pageRef = db.collection('pages').doc(req.params.slug);
    const pageDoc = await pageRef.get();
    if (!pageDoc.exists) return res.status(404).json({ error: 'Page not found' });
    await pageRef.delete();
    res.json({ message: 'Page deleted' });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Update page content (admin only, add auth later)
app.put('/api/pages/:slug', async (req, res) => {
  try {
    const { title, sections } = req.body;
    const pageRef = db.collection('pages').doc(req.params.slug);
    const updateData = { 
      title, 
      sections, 
      updatedAt: admin.firestore.FieldValue.serverTimestamp() 
    };
    await pageRef.set(updateData, { merge: true });
    const pageDoc = await pageRef.get();
    res.json({ id: pageDoc.id, ...pageDoc.data() });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Blog CRUD endpoints
app.get('/api/blogs', async (req, res) => {
  try {
    const blogsSnapshot = await db.collection('blogs').orderBy('createdAt', 'desc').get();
    const blogs = [];
    blogsSnapshot.forEach(doc => {
      blogs.push({ id: doc.id, ...doc.data() });
    });
    res.json(blogs);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

app.get('/api/blogs/:id', async (req, res) => {
  try {
    const blogDoc = await db.collection('blogs').doc(req.params.id).get();
    if (!blogDoc.exists) return res.status(404).json({ error: 'Blog not found' });
    res.json({ id: blogDoc.id, ...blogDoc.data() });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

app.post('/api/blogs', async (req, res) => {
  try {
    const blogData = { 
      ...req.body, 
      createdAt: admin.firestore.FieldValue.serverTimestamp(), 
      updatedAt: admin.firestore.FieldValue.serverTimestamp() 
    };
    const blogRef = await db.collection('blogs').add(blogData);
    const blogDoc = await blogRef.get();
    res.status(201).json({ id: blogDoc.id, ...blogDoc.data() });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

app.put('/api/blogs/:id', async (req, res) => {
  try {
    const blogRef = db.collection('blogs').doc(req.params.id);
    const updateData = { 
      ...req.body, 
      updatedAt: admin.firestore.FieldValue.serverTimestamp() 
    };
    await blogRef.update(updateData);
    const blogDoc = await blogRef.get();
    if (!blogDoc.exists) return res.status(404).json({ error: 'Blog not found' });
    res.json({ id: blogDoc.id, ...blogDoc.data() });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

app.delete('/api/blogs/:id', async (req, res) => {
  try {
    const blogRef = db.collection('blogs').doc(req.params.id);
    const blogDoc = await blogRef.get();
    if (!blogDoc.exists) return res.status(404).json({ error: 'Blog not found' });
    await blogRef.delete();
    res.json({ message: 'Blog deleted' });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Resource CRUD endpoints
app.get('/api/resources', async (req, res) => {
  try {
    const resourcesSnapshot = await db.collection('resources').orderBy('createdAt', 'desc').get();
    const resources = [];
    resourcesSnapshot.forEach(doc => {
      resources.push({ id: doc.id, ...doc.data() });
    });
    res.json(resources);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

app.get('/api/resources/:id', async (req, res) => {
  try {
    const resourceDoc = await db.collection('resources').doc(req.params.id).get();
    if (!resourceDoc.exists) return res.status(404).json({ error: 'Resource not found' });
    res.json({ id: resourceDoc.id, ...resourceDoc.data() });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

app.post('/api/resources', async (req, res) => {
  try {
    const resourceData = { 
      ...req.body, 
      createdAt: admin.firestore.FieldValue.serverTimestamp(), 
      updatedAt: admin.firestore.FieldValue.serverTimestamp() 
    };
    const resourceRef = await db.collection('resources').add(resourceData);
    const resourceDoc = await resourceRef.get();
    res.status(201).json({ id: resourceDoc.id, ...resourceDoc.data() });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

app.put('/api/resources/:id', async (req, res) => {
  try {
    const resourceRef = db.collection('resources').doc(req.params.id);
    const updateData = { 
      ...req.body, 
      updatedAt: admin.firestore.FieldValue.serverTimestamp() 
    };
    await resourceRef.update(updateData);
    const resourceDoc = await resourceRef.get();
    if (!resourceDoc.exists) return res.status(404).json({ error: 'Resource not found' });
    res.json({ id: resourceDoc.id, ...resourceDoc.data() });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

app.delete('/api/resources/:id', async (req, res) => {
  try {
    const resourceRef = db.collection('resources').doc(req.params.id);
    const resourceDoc = await resourceRef.get();
    if (!resourceDoc.exists) return res.status(404).json({ error: 'Resource not found' });
    await resourceRef.delete();
    res.json({ message: 'Resource deleted' });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

const uploadDir = path.join(__dirname, '../public/uploads');
if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir, { recursive: true });

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, uploadDir),
  filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname.replace(/\s+/g, '_'))
});
const upload = multer({ storage });

app.use('/uploads', express.static(uploadDir));

// Upload file
app.post('/api/media/upload', upload.single('file'), (req, res) => {
  if (!req.file) return res.status(400).json({ error: 'No file uploaded' });
  res.json({ filename: req.file.filename, url: `/uploads/${req.file.filename}` });
});

// List files
app.get('/api/media', (req, res) => {
  fs.readdir(uploadDir, (err, files) => {
    if (err) return res.status(500).json({ error: 'Failed to list files' });
    res.json(files.map(filename => ({ filename, url: `/uploads/${filename}` })));
  });
});

// Delete file
app.delete('/api/media/:filename', (req, res) => {
  const filePath = path.join(uploadDir, req.params.filename);
  fs.unlink(filePath, err => {
    if (err) return res.status(404).json({ error: 'File not found' });
    res.json({ message: 'File deleted' });
  });
});

// Initialize default pages if they don't exist
async function initializeDefaultPages() {
  const defaultPages = [
    {
      slug: 'home',
      title: 'Home',
      sections: [
        {
          type: 'hero',
          content: {
            heading: 'Welcome to IntelliSync',
            subheading: 'Intelligent solutions for modern businesses',
            image: '/images/hero-bg.jpg'
          }
        },
        {
          type: 'features',
          content: {
            features: [
              {
                title: 'Data Automation',
                description: 'Streamline your data processes',
                icon: '⚡'
              },
              {
                title: 'Business Intelligence',
                description: 'Make data-driven decisions',
                icon: '📊'
              },
              {
                title: 'Document Management',
                description: 'Organize and secure your documents',
                icon: '📁'
              }
            ]
          }
        },
        {
          type: 'cta',
          content: {
            heading: 'Ready to get started?',
            subheading: 'Contact us today to learn more about our solutions',
            buttonText: 'Get Started',
            buttonLink: '/contact'
          }
        }
      ]
    },
    {
      slug: 'about',
      title: 'About Us',
      sections: [
        {
          type: 'hero',
          content: {
            heading: 'About IntelliSync',
            subheading: 'We help businesses transform their operations with intelligent technology solutions',
            image: '/images/about-bg.jpg'
          }
        }
      ]
    },
    {
      slug: 'contact',
      title: 'Contact Us',
      sections: [
        {
          type: 'hero',
          content: {
            heading: 'Get in Touch',
            subheading: 'Ready to start your digital transformation journey?',
            image: '/images/contact-bg.jpg'
          }
        }
      ]
    },
    {
      slug: 'blog',
      title: 'Blog',
      sections: [
        {
          type: 'hero',
          content: {
            heading: 'Our Blog',
            subheading: 'Insights and updates from our team',
            image: '/images/blog-bg.jpg'
          }
        }
      ]
    },
    {
      slug: 'blog-post',
      title: 'Blog Post',
      sections: [
        {
          type: 'hero',
          content: {
            heading: 'Blog Post',
            subheading: 'Read our latest insights',
            image: '/images/blog-post-bg.jpg'
          }
        }
      ]
    },
    {
      slug: 'resources',
      title: 'Resources',
      sections: [
        {
          type: 'hero',
          content: {
            heading: 'Resources',
            subheading: 'Tools and guides to help you succeed',
            image: '/images/resources-bg.jpg'
          }
        }
      ]
    },
    {
      slug: 'testimonials',
      title: 'Testimonials',
      sections: [
        {
          type: 'hero',
          content: {
            heading: 'What Our Clients Say',
            subheading: 'Success stories from businesses like yours',
            image: '/images/testimonials-bg.jpg'
          }
        }
      ]
    },
    {
      slug: 'pricing',
      title: 'Pricing',
      sections: [
        {
          type: 'hero',
          content: {
            heading: 'Pricing Plans',
            subheading: 'Choose the perfect plan for your business',
            image: '/images/pricing-bg.jpg'
          }
        }
      ]
    },
    {
      slug: 'integrations',
      title: 'Integrations',
      sections: [
        {
          type: 'hero',
          content: {
            heading: 'Integrations',
            subheading: 'Connect with your favorite tools and platforms',
            image: '/images/integrations-bg.jpg'
          }
        }
      ]
    },
    {
      slug: 'data-automation',
      title: 'Data Automation',
      sections: [
        {
          type: 'hero',
          content: {
            heading: 'Data Automation',
            subheading: 'Streamline your data processes with intelligent automation',
            image: '/images/data-automation-bg.jpg'
          }
        }
      ]
    },
    {
      slug: 'awards',
      title: 'Awards',
      sections: [
        {
          type: 'hero',
          content: {
            heading: 'Awards & Recognition',
            subheading: 'Celebrating our achievements and industry recognition',
            image: '/images/awards-bg.jpg'
          }
        }
      ]
    },
    {
      slug: 'business-intelligence',
      title: 'Business Intelligence',
      sections: [
        {
          type: 'hero',
          content: {
            heading: 'Business Intelligence',
            subheading: 'Transform data into actionable insights',
            image: '/images/business-intelligence-bg.jpg'
          }
        }
      ]
    },
    {
      slug: 'case-studies',
      title: 'Case Studies',
      sections: [
        {
          type: 'hero',
          content: {
            heading: 'Case Studies',
            subheading: 'Real results from real businesses',
            image: '/images/case-studies-bg.jpg'
          }
        }
      ]
    },
    {
      slug: 'company-info',
      title: 'Company Info',
      sections: [
        {
          type: 'hero',
          content: {
            heading: 'Company Information',
            subheading: 'Learn more about our company and mission',
            image: '/images/company-info-bg.jpg'
          }
        }
      ]
    },
    {
      slug: 'document-management',
      title: 'Document Management',
      sections: [
        {
          type: 'hero',
          content: {
            heading: 'Document Management',
            subheading: 'Organize, secure, and streamline your documents',
            image: '/images/document-management-bg.jpg'
          }
        }
      ]
    },
    {
      slug: 'support',
      title: 'Support',
      sections: [
        {
          type: 'hero',
          content: {
            heading: 'Support',
            subheading: 'Get help when you need it',
            image: '/images/support-bg.jpg'
          }
        }
      ]
    },
    {
      slug: 'team',
      title: 'Team',
      sections: [
        {
          type: 'hero',
          content: {
            heading: 'Our Team',
            subheading: 'Meet the experts behind IntelliSync',
            image: '/images/team-bg.jpg'
          }
        }
      ]
    },
    {
      slug: 'clients',
      title: 'Clients',
      sections: [
        {
          type: 'hero',
          content: {
            heading: 'Our Clients',
            subheading: 'Trusted by businesses worldwide',
            image: '/images/clients-bg.jpg'
          }
        }
      ]
    },
    {
      slug: 'solutions',
      title: 'Solutions',
      sections: [
        {
          type: 'hero',
          content: {
            heading: 'Our Solutions',
            subheading: 'Comprehensive solutions for your business needs',
            image: '/images/solutions-bg.jpg'
          }
        }
      ]
    }
  ];

  for (const pageData of defaultPages) {
    try {
      const pageRef = db.collection('pages').doc(pageData.slug);
      const pageDoc = await pageRef.get();
      
      if (!pageDoc.exists) {
        const data = {
          ...pageData,
          createdAt: admin.firestore.FieldValue.serverTimestamp(),
          updatedAt: admin.firestore.FieldValue.serverTimestamp()
        };
        await pageRef.set(data);
        console.log(`Created default page: ${pageData.slug}`);
      }
    } catch (error) {
      console.error(`Error creating default page ${pageData.slug}:`, error);
    }
  }
}

// Initialize default pages
initializeDefaultPages();

// Initialize sample blog posts
async function initializeSampleBlogs() {
  const sampleBlogs = [
    {
      title: 'Getting Started with Data Automation',
      content: 'Data automation is the key to streamlining your business processes...',
      excerpt: 'Learn how to implement data automation in your organization.',
      author: 'IntelliSync Team',
      tags: ['data-automation', 'business-processes'],
      featured: true
    },
    {
      title: 'The Future of Business Intelligence',
      content: 'Business intelligence is evolving rapidly with new technologies...',
      excerpt: 'Discover the latest trends in business intelligence.',
      author: 'IntelliSync Team',
      tags: ['business-intelligence', 'analytics'],
      featured: false
    },
    {
      title: 'Document Management Best Practices',
      content: 'Effective document management is crucial for any organization...',
      excerpt: 'Implement these best practices for better document organization.',
      author: 'IntelliSync Team',
      tags: ['document-management', 'organization'],
      featured: false
    }
  ];

  for (const blogData of sampleBlogs) {
    try {
      const data = {
        ...blogData,
        createdAt: admin.firestore.FieldValue.serverTimestamp(),
        updatedAt: admin.firestore.FieldValue.serverTimestamp()
      };
      await db.collection('blogs').add(data);
      console.log(`Created sample blog: ${blogData.title}`);
    } catch (error) {
      console.error(`Error creating sample blog:`, error);
    }
  }
}

// Initialize sample resources
async function initializeSampleResources() {
  const sampleResources = [
    {
      title: 'Data Automation Guide',
      description: 'A comprehensive guide to implementing data automation',
      type: 'PDF',
      url: '/resources/data-automation-guide.pdf',
      category: 'Guides'
    },
    {
      title: 'Business Intelligence Whitepaper',
      description: 'Understanding the impact of BI on business decisions',
      type: 'PDF',
      url: '/resources/bi-whitepaper.pdf',
      category: 'Whitepapers'
    },
    {
      title: 'Document Management Checklist',
      description: 'Essential checklist for document management implementation',
      type: 'PDF',
      url: '/resources/dm-checklist.pdf',
      category: 'Checklists'
    }
  ];

  for (const resourceData of sampleResources) {
    try {
      const data = {
        ...resourceData,
        createdAt: admin.firestore.FieldValue.serverTimestamp(),
        updatedAt: admin.firestore.FieldValue.serverTimestamp()
      };
      await db.collection('resources').add(data);
      console.log(`Created sample resource: ${resourceData.title}`);
    } catch (error) {
      console.error(`Error creating sample resource:`, error);
    }
  }
}

// Initialize sample content
initializeSampleBlogs();
initializeSampleResources();

server.listen(PORT, () => {
  console.log(`Chat server listening on port ${PORT}`);
  console.log(`Database: ${useFirebase ? 'Firebase Firestore' : 'In-Memory (Development Mode)'}`);
}); 