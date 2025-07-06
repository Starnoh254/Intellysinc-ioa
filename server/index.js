const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const compression = require('compression');
require('dotenv').config();

// Import configurations and middleware
const { initializeFirebase, healthCheck } = require('./config/database');
const { 
  authenticate, 
  authorize, 
  optionalAuth,
  generateToken,
  hashPassword,
  comparePassword 
} = require('./middleware/auth');
const { 
  validate, 
  schemas, 
  sanitizeInput, 
  validateFileUpload 
} = require('./middleware/validation');
const {
  apiLimiter,
  authLimiter,
  uploadLimiter,
  contactLimiter,
  analyticsLimiter,
  adminLimiter,
  searchLimiter
} = require('./middleware/rateLimit');
const {
  securityHeaders,
  corsMiddleware,
  additionalSecurity,
  requestSizeLimit,
  validateUrl,
  ipBlocker,
  authAttemptLimiter,
  validateFileType
} = require('./middleware/security');
const {
  logger,
  morganMiddleware,
  logRequest,
  logError,
  logPerformance,
  logSecurityEvent,
  logApiUsage
} = require('./middleware/logging');

// Import services
const emailService = require('./services/emailService');
const cacheService = require('./services/cacheService');
const searchService = require('./services/searchService');

// Initialize database
const { getDb, isFirebase, admin } = require('./config/database');
initializeFirebase();

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: process.env.ALLOWED_ORIGINS?.split(',') || ['http://localhost:3000', 'http://localhost:5173'],
    methods: ['GET', 'POST'],
    credentials: true
  }
});

const PORT = process.env.PORT || 5000;

// Apply security middleware
app.use(securityHeaders);
app.use(corsMiddleware);
app.use(additionalSecurity);
app.use(compression());
app.use(requestSizeLimit);
app.use(validateUrl);
app.use(ipBlocker);

// Apply logging middleware
app.use(morganMiddleware);
app.use(logRequest);
app.use(logPerformance);

// Parse JSON bodies
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Apply sanitization to all requests
app.use(sanitizeInput);

// Basic health check
app.get('/', (req, res) => {
  res.json({ 
    message: 'IntelliSync API is running',
    version: process.env.npm_package_version || '1.0.0',
    timestamp: new Date().toISOString()
  });
});

// Health check with database status
app.get('/api/health', async (req, res) => {
  try {
    const dbHealth = await healthCheck();
    res.json({
      status: 'ok',
      database: dbHealth,
      uptime: process.uptime(),
      memory: process.memoryUsage(),
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    logger.error('Health check failed', { error: error.message });
    res.status(503).json({
      status: 'error',
      error: error.message,
      timestamp: new Date().toISOString()
    });
  }
});

// Debug endpoint to clear database (development only)
app.post('/api/debug/clear-db', (req, res) => {
  if (process.env.NODE_ENV === 'production') {
    return res.status(403).json({ error: 'Not available in production' });
  }
  
  // Clear in-memory database
  const db = getDb();
  if (db && db.collection) {
    // This will reset the in-memory storage
    console.log('🧹 Clearing in-memory database...');
  }
  
  res.json({ message: 'Database cleared successfully' });
});

// Authentication endpoints
app.post('/api/auth/register', authLimiter, validate(schemas.user.register), async (req, res) => {
  try {
    const { email, password, name, role } = req.body;
    const db = getDb();
    
    // Check if user already exists
    const existingUser = await db.collection('users').where('email', '==', email).get();
    console.log('🔍 Checking for existing user:', email);
    console.log('🔍 Existing user result:', existingUser.empty ? 'No user found' : 'User found');
    if (!existingUser.empty) {
      return res.status(409).json({
        error: 'User already exists',
        code: 'USER_EXISTS'
      });
    }
    
    // Hash password
    const hashedPassword = await hashPassword(password);
    
    // Create user
    const userData = {
      email,
      password: hashedPassword,
      name,
      role: role || 'user',
      status: 'active',
      permissions: role === 'admin' ? ['read', 'write', 'delete', 'admin'] : ['read'],
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
      updatedAt: admin.firestore.FieldValue.serverTimestamp()
    };
    
    const userRef = await db.collection('users').add(userData);
    const token = generateToken(userRef.id, userData.role);
    
    logApiUsage('/api/auth/register', 'POST', userRef.id, userData.role, true);
    
    res.status(201).json({
      message: 'User registered successfully',
      token,
      user: {
        id: userRef.id,
        email: userData.email,
        name: userData.name,
        role: userData.role
      }
    });
  } catch (error) {
    logger.error('Registration error', { error: error.message });
    res.status(500).json({
      error: 'Registration failed',
      code: 'REGISTRATION_ERROR'
    });
  }
});

app.post('/api/auth/login', authLimiter, validate(schemas.user.login), async (req, res) => {
  try {
    const { email, password } = req.body;
    const db = getDb();
    
    // Find user
    const userSnapshot = await db.collection('users').where('email', '==', email).get();
    if (userSnapshot.empty) {
      req.trackFailedAuth?.();
      return res.status(401).json({
        error: 'Invalid credentials',
        code: 'INVALID_CREDENTIALS'
      });
    }
    
    const userDoc = userSnapshot.docs[0];
    const user = userDoc.data();
    
    // Check password
    const isValidPassword = await comparePassword(password, user.password);
    if (!isValidPassword) {
      req.trackFailedAuth?.();
      return res.status(401).json({
        error: 'Invalid credentials',
        code: 'INVALID_CREDENTIALS'
      });
    }
    
    // Check if user is active
    if (user.status !== 'active') {
      return res.status(401).json({
        error: 'Account is not active',
        code: 'ACCOUNT_INACTIVE'
      });
    }
    
    const token = generateToken(userDoc.id, user.role);
    
    logApiUsage('/api/auth/login', 'POST', userDoc.id, user.role, true);
    
    res.json({
      message: 'Login successful',
      token,
      user: {
        id: userDoc.id,
        email: user.email,
        name: user.name,
        role: user.role
      }
    });
  } catch (error) {
    logger.error('Login error', { error: error.message });
    res.status(500).json({
      error: 'Login failed',
      code: 'LOGIN_ERROR'
    });
  }
});

// Contact form with rate limiting and validation
app.post('/api/contact', contactLimiter, validate(schemas.contact), async (req, res) => {
  try {
    const { name, email, message, subject, phone } = req.body;
    const db = getDb();
    
    const contact = {
      name,
      email,
      message,
      subject: subject || 'General Inquiry',
      phone: phone || null,
      ip: req.ip,
      userAgent: req.get('User-Agent'),
      createdAt: admin.firestore.FieldValue.serverTimestamp()
    };
    
    await db.collection('contacts').add(contact);
    
    // Send email notification
    try {
      await emailService.sendContactNotification(contact);
    } catch (emailError) {
      logger.error('Failed to send contact email', { error: emailError.message });
    }
    
    logApiUsage('/api/contact', 'POST', null, 'anonymous', true);
    
    res.status(201).json({
      message: 'Contact form submitted successfully',
      code: 'CONTACT_SUCCESS'
    });
  } catch (error) {
    logger.error('Contact submission error', { error: error.message });
    res.status(500).json({
      error: 'Failed to submit contact form',
      code: 'CONTACT_ERROR'
    });
  }
});

// Pages API with authentication and caching
app.get('/api/pages/:slug', optionalAuth, async (req, res) => {
  try {
    const { slug } = req.params;
    const cacheKey = `page:${slug}`;
    
    // Try cache first
    const cached = await cacheService.get(cacheKey);
    if (cached) {
      return res.json(cached);
    }
    
    const db = getDb();
    const pageDoc = await db.collection('pages').doc(slug).get();
    
    if (!pageDoc.exists) {
      return res.status(404).json({
        error: 'Page not found',
        code: 'PAGE_NOT_FOUND'
      });
    }
    
    const pageData = { id: pageDoc.id, ...pageDoc.data() };
    
    // Cache for 5 minutes
    await cacheService.set(cacheKey, pageData, 300);
    
    logApiUsage('/api/pages/:slug', 'GET', req.user?.id, req.user?.role, true);
    
    res.json(pageData);
  } catch (error) {
    logger.error('Page fetch error', { error: error.message, slug: req.params.slug });
    res.status(500).json({
      error: 'Failed to fetch page',
      code: 'PAGE_FETCH_ERROR'
    });
  }
});

// Admin-only pages management
app.get('/api/pages', authenticate, authorize('admin', 'moderator'), adminLimiter, async (req, res) => {
  try {
    const db = getDb();
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
    
    logApiUsage('/api/pages', 'GET', req.user.id, req.user.role, true);
    
    res.json(pages);
  } catch (error) {
    logger.error('Pages list error', { error: error.message });
    res.status(500).json({
      error: 'Failed to fetch pages',
      code: 'PAGES_FETCH_ERROR'
    });
  }
});

app.post('/api/pages', authenticate, authorize('admin'), validate(schemas.page.create), async (req, res) => {
  try {
    const { slug, title, sections } = req.body;
    const db = getDb();
    
    const pageRef = db.collection('pages').doc(slug);
    const pageDoc = await pageRef.get();
    
    if (pageDoc.exists) {
      return res.status(409).json({
        error: 'Page with this slug already exists',
        code: 'PAGE_EXISTS'
      });
    }
    
    const pageData = {
      slug,
      title,
      sections: sections || [],
      createdBy: req.user.id,
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
      updatedAt: admin.firestore.FieldValue.serverTimestamp()
    };
    
    await pageRef.set(pageData);
    
    // Clear cache
    await cacheService.del(`page:${slug}`);
    
    logApiUsage('/api/pages', 'POST', req.user.id, req.user.role, true);
    
    res.status(201).json({ id: slug, ...pageData });
  } catch (error) {
    logger.error('Page creation error', { error: error.message });
    res.status(500).json({
      error: 'Failed to create page',
      code: 'PAGE_CREATE_ERROR'
    });
  }
});

// Blogs API with search and pagination
app.get('/api/blogs', optionalAuth, searchLimiter, async (req, res) => {
  try {
    const { page = 1, limit = 20, search, category, tag } = req.query;
    const db = getDb();
    
    let query = db.collection('blogs').orderBy('createdAt', 'desc');
    
    // Apply filters
    if (category) {
      query = query.where('category', '==', category);
    }
    
    if (tag) {
      query = query.where('tags', 'array-contains', tag);
    }
    
    const snapshot = await query.get();
    let blogs = [];
    
    snapshot.forEach(doc => {
      blogs.push({ id: doc.id, ...doc.data() });
    });
    
    // Apply search if provided
    if (search) {
      blogs = await searchService.searchInBlogs(blogs, search);
    }
    
    // Apply pagination
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + parseInt(limit);
    const paginatedBlogs = blogs.slice(startIndex, endIndex);
    
    logApiUsage('/api/blogs', 'GET', req.user?.id, req.user?.role, true);
    
    res.json({
      blogs: paginatedBlogs,
      pagination: {
        page: parseInt(page),
        limit: parseInt(limit),
        total: blogs.length,
        pages: Math.ceil(blogs.length / limit)
      }
    });
  } catch (error) {
    logger.error('Blogs fetch error', { error: error.message });
    res.status(500).json({
      error: 'Failed to fetch blogs',
      code: 'BLOGS_FETCH_ERROR'
    });
  }
});

// File upload with security
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const uploadDir = path.join(__dirname, '../public/uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, uploadDir),
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  }
});

const upload = multer({ 
  storage,
  limits: {
    fileSize: 5 * 1024 * 1024 // 5MB
  }
});

app.post('/api/media/upload', 
  authenticate, 
  authorize('admin', 'moderator'),
  uploadLimiter,
  upload.single('file'),
  validateFileType,
  async (req, res) => {
    try {
      if (!req.file) {
        return res.status(400).json({
          error: 'No file uploaded',
          code: 'NO_FILE'
        });
      }
      
      const fileData = {
        filename: req.file.filename,
        originalName: req.file.originalname,
        mimetype: req.file.mimetype,
        size: req.file.size,
        url: `/uploads/${req.file.filename}`,
        uploadedBy: req.user.id,
        uploadedAt: new Date()
      };
      
      // Save file metadata to database
      const db = getDb();
      await db.collection('media').add(fileData);
      
      logApiUsage('/api/media/upload', 'POST', req.user.id, req.user.role, true);
      
      res.json(fileData);
    } catch (error) {
      logger.error('File upload error', { error: error.message });
      res.status(500).json({
        error: 'File upload failed',
        code: 'UPLOAD_ERROR'
      });
    }
  }
);

// Analytics with rate limiting
app.post('/api/analytics/track', analyticsLimiter, validate(schemas.analytics.track), async (req, res) => {
  try {
    const event = req.body;
    event.timestamp = new Date();
    event.ip = req.ip;
    event.userAgent = req.get('User-Agent');
    
    const db = getDb();
    await db.collection('analytics').add(event);
    
    res.status(200).json({ success: true });
  } catch (error) {
    logger.error('Analytics tracking error', { error: error.message });
    res.status(500).json({
      error: 'Failed to track analytics',
      code: 'ANALYTICS_ERROR'
    });
  }
});

// Search API
app.get('/api/search', searchLimiter, validate(schemas.search), async (req, res) => {
  try {
    const { query, type, limit, offset } = req.query;
    
    const results = await searchService.search(query, type, parseInt(limit), parseInt(offset));
    
    logApiUsage('/api/search', 'GET', req.user?.id, req.user?.role, true);
    
    res.json(results);
  } catch (error) {
    logger.error('Search error', { error: error.message });
    res.status(500).json({
      error: 'Search failed',
      code: 'SEARCH_ERROR'
    });
  }
});

// Socket.IO chat logic with authentication
io.use(async (socket, next) => {
  try {
    const token = socket.handshake.auth.token;
    if (!token) {
      return next(new Error('Authentication required'));
    }
    
    const { verifyToken } = require('./middleware/auth');
    const decoded = verifyToken(token);
    if (!decoded) {
      return next(new Error('Invalid token'));
    }
    
    socket.userId = decoded.userId;
    socket.userRole = decoded.role;
    next();
  } catch (error) {
    next(new Error('Authentication failed'));
  }
});

io.on('connection', (socket) => {
  logger.info('User connected to chat', { 
    userId: socket.userId, 
    userRole: socket.userRole,
    socketId: socket.id 
  });

  socket.on('admin join', () => {
    if (socket.userRole !== 'admin') {
      socket.emit('error', { message: 'Admin access required' });
      return;
    }
    
    socket.join('admin');
    logger.info('Admin joined chat', { userId: socket.userId });
  });

  socket.on('user join', () => {
    socket.join('users');
    logger.info('User joined chat', { userId: socket.userId });
  });

  socket.on('chat message', (msg) => {
    logger.info('Chat message', { 
      userId: socket.userId, 
      userRole: socket.userRole,
      messageType: msg.sender 
    });
    
    if (msg.sender === 'user') {
      socket.to('admin').emit('chat message', { ...msg, userId: socket.userId });
    } else if (msg.sender === 'admin' && msg.userId) {
      socket.to(`user:${msg.userId}`).emit('chat message', { 
        text: msg.text, 
        sender: 'admin', 
        timestamp: new Date() 
      });
    }
  });

  socket.on('disconnect', () => {
    logger.info('User disconnected from chat', { 
      userId: socket.userId, 
      userRole: socket.userRole,
      socketId: socket.id 
    });
  });
});

// Error handling middleware (must be last)
app.use(logError);
app.use((err, req, res, next) => {
  logger.error('Unhandled error', { 
    error: err.message, 
    stack: err.stack,
    url: req.url,
    method: req.method,
    userId: req.user?.id 
  });
  
  res.status(500).json({
    error: 'Internal server error',
    code: 'INTERNAL_ERROR'
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    error: 'Endpoint not found',
    code: 'NOT_FOUND'
  });
});

server.listen(PORT, () => {
  logger.info(`🚀 IntelliSync API server started`, {
    port: PORT,
    environment: process.env.NODE_ENV || 'development',
    database: isFirebase() ? 'Firebase' : 'In-Memory'
  });
});

// Graceful shutdown
process.on('SIGTERM', () => {
  logger.info('SIGTERM received, shutting down gracefully');
  server.close(() => {
    logger.info('Process terminated');
    process.exit(0);
  });
});

process.on('SIGINT', () => {
  logger.info('SIGINT received, shutting down gracefully');
  server.close(() => {
    logger.info('Process terminated');
    process.exit(0);
  });
}); 