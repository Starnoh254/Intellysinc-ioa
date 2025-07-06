// Blog Service for managing blog data
class BlogService {
  constructor() {
    this.storageKey = 'intellisync_blogs';
    this.initializeDefaultBlogs();
  }

  // Initialize with default blogs if none exist
  initializeDefaultBlogs() {
    const existingBlogs = this.getAllBlogs();
    if (existingBlogs.length === 0) {
      const defaultBlogs = [
        {
          id: 1,
          title: "Intellisync Pay: Smart Collections & Payment Automation",
          excerpt: "Intellisync Pay automates collections with QR codes, traceable payment links, instant bank reconciliation, and intelligent management of outstanding payments through personalized workflows and automatic reminders.",
          content: `
            <h2>Introduction</h2>
            <p>In today's fast-paced business environment, managing payments and collections efficiently is crucial for maintaining healthy cash flow. Intellisync Pay revolutionizes this process with intelligent automation and smart payment solutions.</p>
            
            <h2>QR Code Payment Integration</h2>
            <p>Our QR code system enables instant payments with just a scan. Customers can pay invoices immediately upon receipt, reducing payment delays and improving cash flow management.</p>
            
            <h2>Traceable Payment Links</h2>
            <p>Every payment link is uniquely tracked, providing complete transparency in the payment process. This ensures accountability and makes reconciliation straightforward.</p>
            
            <h2>Instant Bank Reconciliation</h2>
            <p>Automated bank reconciliation eliminates manual data entry errors and provides real-time visibility into your financial position. Our system matches transactions automatically, saving hours of manual work.</p>
            
            <h2>Intelligent Payment Management</h2>
            <p>Smart workflows automatically send reminders for outstanding payments, with personalized messaging based on customer history and payment patterns.</p>
            
            <h2>Benefits for Your Business</h2>
            <ul>
              <li>Reduced payment processing time by 80%</li>
              <li>Improved cash flow visibility</li>
              <li>Automated follow-up communications</li>
              <li>Enhanced customer payment experience</li>
            </ul>
          `,
          category: "Payment Solutions",
          date: "May 22, 2024",
          readTime: "6 min read",
          author: {
            name: "David Rodriguez",
            avatar: "/images/freepik/3470.jpg",
            bio: "Senior Solutions Architect specializing in payment automation and financial technology integration.",
            twitter: "https://twitter.com/davidrodriguez",
            linkedin: "https://linkedin.com/in/davidrodriguez"
          },
          image: "/images/freepik/3470.jpg",
          tags: ["payments", "automation", "collections", "qr-codes"],
          slug: "intellisync-pay-smart-collections",
          published: true,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        },
        {
          id: 2,
          title: "Revolutionizing Garden Centre Logistics with Intellisync AI Agents",
          excerpt: "Intellisync revolutionizes nursery logistics by automating the alignment between paper documents and ERP, improving complex warehouse management through AI agents and intelligent document relationships.",
          content: `
            <h2>Introduction</h2>
            <p>The garden centre and nursery industry faces unique challenges in inventory management, seasonal fluctuations, and complex supply chains. Our AI agents provide intelligent solutions specifically designed for this sector.</p>
            
            <h2>AI-Powered Document Processing</h2>
            <p>Our intelligent agents automatically process invoices, delivery notes, and inventory documents, extracting key data and integrating it seamlessly with your ERP system.</p>
            
            <h2>Warehouse Management Optimization</h2>
            <p>Complex warehouse layouts and seasonal inventory changes are managed efficiently through our AI agents, which learn and adapt to your specific operational patterns.</p>
            
            <h2>Intelligent Document Relationships</h2>
            <p>Our system automatically links related documents, creating a comprehensive view of your supply chain and enabling better decision-making.</p>
            
            <h2>Seasonal Adaptation</h2>
            <p>The AI agents adapt to seasonal changes in inventory and demand, automatically adjusting workflows and processes accordingly.</p>
            
            <h2>Real-World Impact</h2>
            <p>Garden centres using our solution have reported:</p>
            <ul>
              <li>40% reduction in document processing time</li>
              <li>Improved inventory accuracy</li>
              <li>Better supplier relationship management</li>
              <li>Enhanced customer service capabilities</li>
            </ul>
          `,
          category: "Logistics & Transport",
          date: "May 6, 2024",
          readTime: "7 min read",
          author: {
            name: "Lisa Thompson",
            avatar: "/images/freepik/rm378-03c.jpg",
            bio: "Industry Specialist in logistics automation and supply chain optimization.",
            twitter: "https://twitter.com/lisathompson",
            linkedin: "https://linkedin.com/in/lisathompson"
          },
          image: "/images/freepik/rm378-03c.jpg",
          tags: ["logistics", "ai-agents", "warehouse-management", "supply-chain"],
          slug: "garden-centre-logistics-ai-agents",
          published: true,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        },
        {
          id: 3,
          title: "Reimagining Workflows in Healthcare with Intellisync",
          excerpt: "Intellisync enhances healthcare document management by automating data entry, streamlining workflows, and enabling real-time insights—boosting efficiency and compliance across the entire healthcare ecosystem.",
          content: `
            <h2>Introduction</h2>
            <p>Healthcare organizations face unique challenges in document management, from patient records to regulatory compliance. Our intelligent document processing solutions are designed specifically for the healthcare sector.</p>
            
            <h2>Automated Data Entry</h2>
            <p>Reduce manual data entry errors and free up staff time for patient care. Our system automatically extracts and validates information from medical documents, forms, and reports.</p>
            
            <h2>Streamlined Workflows</h2>
            <p>Create intelligent workflows that route documents to the right people at the right time, ensuring timely processing and reducing bottlenecks.</p>
            
            <h2>Real-Time Insights</h2>
            <p>Gain immediate visibility into document processing status, compliance metrics, and operational efficiency through our comprehensive dashboard.</p>
            
            <h2>Compliance & Security</h2>
            <p>Built-in compliance features ensure adherence to healthcare regulations while maintaining the highest security standards for sensitive patient information.</p>
            
            <h2>Healthcare Benefits</h2>
            <ul>
              <li>Improved patient care through reduced administrative burden</li>
              <li>Enhanced compliance and audit readiness</li>
              <li>Better resource allocation and staff efficiency</li>
              <li>Reduced processing time for critical documents</li>
            </ul>
          `,
          category: "Healthcare",
          date: "March 31, 2024",
          readTime: "8 min read",
          author: {
            name: "Dr. Sarah Williams",
            avatar: "/images/freepik/3470.jpg",
            bio: "Healthcare Technology Specialist with expertise in digital transformation and compliance.",
            twitter: "https://twitter.com/drsarahwilliams",
            linkedin: "https://linkedin.com/in/drsarahwilliams"
          },
          image: "/images/freepik/3470.jpg",
          tags: ["healthcare", "compliance", "workflow-automation", "data-entry"],
          slug: "healthcare-workflow-automation",
          published: true,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        },
        {
          id: 4,
          title: "Intellisync 14.0: Advanced Document Automation with New Relationships",
          excerpt: "Intellisync 14.0 revolutionizes document management with new document relationships based on visual nodes and AI, advanced automation for table analysis, and smart PDF editing tools.",
          content: `
            <h2>Introduction</h2>
            <p>We're excited to announce Intellisync 14.0, our most advanced document automation platform yet. This release introduces groundbreaking features that will transform how organizations process and manage their documents.</p>
            
            <h2>Visual Node-Based Relationships</h2>
            <p>Our new visual relationship system allows users to create complex document workflows using an intuitive drag-and-drop interface. Visual nodes represent different document types and processes, making workflow design more accessible than ever.</p>
            
            <h2>Advanced Table Analysis</h2>
            <p>Enhanced AI capabilities now provide superior table extraction and analysis, handling complex layouts and multi-column data with unprecedented accuracy.</p>
            
            <h2>Smart PDF Editing</h2>
            <p>New intelligent PDF editing tools allow users to modify documents while maintaining formatting and structure, with AI assistance for content optimization.</p>
            
            <h2>Enhanced AI Integration</h2>
            <p>Improved machine learning algorithms provide better document classification, data extraction, and relationship mapping across your entire document ecosystem.</p>
            
            <h2>Key Features</h2>
            <ul>
              <li>Visual workflow designer</li>
              <li>Advanced table recognition</li>
              <li>Smart PDF editing capabilities</li>
              <li>Enhanced AI-powered classification</li>
              <li>Improved integration capabilities</li>
            </ul>
          `,
          category: "Product Updates",
          date: "March 19, 2024",
          readTime: "10 min read",
          author: {
            name: "Alex Chen",
            avatar: "/images/freepik/rm378-03c.jpg",
            bio: "Product Manager leading document automation innovation and user experience design.",
            twitter: "https://twitter.com/alexchen",
            linkedin: "https://linkedin.com/in/alexchen"
          },
          image: "/images/freepik/rm378-03c.jpg",
          tags: ["product-update", "document-automation", "ai", "workflow"],
          slug: "intellisync-14-advanced-automation",
          published: true,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        },
        {
          id: 5,
          title: "Why Intellisync is Perfect for Transport and Logistics",
          excerpt: "Intellisync transforms transport and logistics with intelligent document processing, seamless integration with TMS, ERP, and WMS systems, and automated workflows for faster payment processing.",
          content: `
            <h2>Introduction</h2>
            <p>The transport and logistics industry faces unique challenges with document processing, from complex shipping documentation to real-time tracking requirements. Intellisync provides specialized solutions designed for this dynamic sector.</p>
            
            <h2>Intelligent Document Processing</h2>
            <p>Our AI-powered system automatically processes shipping documents, customs forms, and delivery notes, extracting critical information and reducing manual processing time by up to 70%.</p>
            
            <h2>Seamless System Integration</h2>
            <p>Direct integration with Transportation Management Systems (TMS), Enterprise Resource Planning (ERP), and Warehouse Management Systems (WMS) ensures data consistency across all platforms.</p>
            
            <h2>Automated Payment Processing</h2>
            <p>Streamlined workflows automatically process invoices and payments, reducing payment cycles and improving cash flow management.</p>
            
            <h2>Real-Time Tracking</h2>
            <p>Enhanced tracking capabilities provide real-time visibility into document status and processing progress, enabling better decision-making and customer service.</p>
            
            <h2>Industry Benefits</h2>
            <ul>
              <li>Reduced document processing time</li>
              <li>Improved accuracy in shipping documentation</li>
              <li>Enhanced customer service capabilities</li>
              <li>Better compliance and audit trails</li>
              <li>Faster payment processing cycles</li>
            </ul>
          `,
          category: "Logistics & Transport",
          date: "February 13, 2024",
          readTime: "9 min read",
          author: {
            name: "Mark Johnson",
            avatar: "/images/freepik/3470.jpg",
            bio: "Transportation Technology Specialist with 15 years of experience in logistics automation.",
            twitter: "https://twitter.com/markjohnson",
            linkedin: "https://linkedin.com/in/markjohnson"
          },
          image: "/images/freepik/3470.jpg",
          tags: ["transport", "logistics", "tms", "erp", "wms"],
          slug: "transport-logistics-intellisync",
          published: true,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        },
        {
          id: 6,
          title: "Intellisync Hub: Redefining Document Management",
          excerpt: "Intellisync Hub automates document classification, seamlessly handing over to Intellisync's unmatched data extraction engine. Together, they deliver precision and efficiency.",
          content: `
            <h2>Introduction</h2>
            <p>Intellisync Hub represents a breakthrough in document management, combining intelligent classification with powerful data extraction capabilities to create a comprehensive document processing solution.</p>
            
            <h2>Automated Document Classification</h2>
            <p>Our AI-powered classification system automatically categorizes documents based on content, format, and context, ensuring proper routing and processing.</p>
            
            <h2>Seamless Data Extraction</h2>
            <p>Once classified, documents are automatically processed by our advanced data extraction engine, which can handle complex layouts, tables, and multi-format documents.</p>
            
            <h2>Precision and Efficiency</h2>
            <p>The combination of intelligent classification and extraction delivers unprecedented accuracy while maintaining high processing speeds.</p>
            
            <h2>Integration Capabilities</h2>
            <p>Intellisync Hub integrates seamlessly with existing systems, providing a unified interface for all document processing needs.</p>
            
            <h2>Key Advantages</h2>
            <ul>
              <li>Automated document classification</li>
              <li>Advanced data extraction capabilities</li>
              <li>Seamless system integration</li>
              <li>Improved processing accuracy</li>
              <li>Enhanced workflow efficiency</li>
            </ul>
          `,
          category: "Product Updates",
          date: "December 10, 2024",
          readTime: "7 min read",
          author: {
            name: "Emma Davis",
            avatar: "/images/freepik/rm378-03c.jpg",
            bio: "Senior Product Manager specializing in document management and AI integration.",
            twitter: "https://twitter.com/emmadavis",
            linkedin: "https://linkedin.com/in/emmadavis"
          },
          image: "/images/freepik/rm378-03c.jpg",
          tags: ["document-management", "ai", "classification", "data-extraction"],
          slug: "intellisync-hub-document-management",
          published: true,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        },
        {
          id: 7,
          title: "The Evolution of Document Management: An Interview with Giorgio",
          excerpt: "A journey through the evolution of document management: from pioneering systems like Documentum to Intellisync's artificial intelligence, ready to revolutionize business processes and productivity.",
          content: `
            <h2>Introduction</h2>
            <p>We sat down with Giorgio, our Chief Technology Officer, to discuss the evolution of document management and how artificial intelligence is transforming the industry.</p>
            
            <h2>The Early Days</h2>
            <p>"When I started in this field, document management was primarily about storage and retrieval. Systems like Documentum were revolutionary for their time, but they were limited by the technology available."</p>
            
            <h2>The Digital Transformation</h2>
            <p>"The shift to digital documents opened new possibilities, but it also created new challenges. Organizations found themselves dealing with massive volumes of unstructured data."</p>
            
            <h2>AI Revolution</h2>
            <p>"Artificial intelligence has been the game-changer. We're now able to not just store documents, but understand them, extract meaningful data, and automate complex workflows."</p>
            
            <h2>Looking Forward</h2>
            <p>"The future of document management lies in intelligent automation. We're moving beyond simple storage to systems that can think, learn, and adapt to business needs."</p>
            
            <h2>Key Insights</h2>
            <ul>
              <li>Document management has evolved from storage to intelligence</li>
              <li>AI is transforming how organizations process information</li>
              <li>Automation is key to future productivity gains</li>
              <li>Integration capabilities are more important than ever</li>
            </ul>
          `,
          category: "Industry Insights",
          date: "November 20, 2024",
          readTime: "12 min read",
          author: {
            name: "Giorgio Rossi",
            avatar: "/images/freepik/3470.jpg",
            bio: "Chief Technology Officer with 20+ years of experience in document management and AI technology.",
            twitter: "https://twitter.com/giorgiorossi",
            linkedin: "https://linkedin.com/in/giorgiorossi"
          },
          image: "/images/freepik/3470.jpg",
          tags: ["document-management", "ai", "evolution", "interview"],
          slug: "evolution-document-management-giorgio",
          published: true,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        },
        {
          id: 8,
          title: "IDP: A New Standard for Document Management",
          excerpt: "Intellisync revolutionizes document management with Intelligent Document Processing (IDP), combining advanced recognition, automation, and data extraction to enhance efficiency, security, and compliance.",
          content: `
            <h2>Introduction</h2>
            <p>Intelligent Document Processing (IDP) represents the next evolution in document management, combining artificial intelligence with advanced automation to create a new standard for business efficiency.</p>
            
            <h2>Advanced Recognition Capabilities</h2>
            <p>Our IDP system uses cutting-edge AI to recognize and process documents in multiple formats, from structured forms to unstructured text and complex layouts.</p>
            
            <h2>Intelligent Automation</h2>
            <p>Automated workflows reduce manual processing time while improving accuracy and consistency across all document types.</p>
            
            <h2>Enhanced Data Extraction</h2>
            <p>Advanced algorithms extract meaningful data from documents, transforming unstructured information into actionable business intelligence.</p>
            
            <h2>Security and Compliance</h2>
            <p>Built-in security features ensure data protection while maintaining compliance with industry regulations and standards.</p>
            
            <h2>Business Benefits</h2>
            <ul>
              <li>Reduced processing time by up to 80%</li>
              <li>Improved accuracy and error reduction</li>
              <li>Enhanced compliance and audit capabilities</li>
              <li>Better resource allocation and cost savings</li>
            </ul>
          `,
          category: "Technology",
          date: "November 8, 2024",
          readTime: "8 min read",
          author: {
            name: "Dr. Maria Santos",
            avatar: "/images/freepik/rm378-03c.jpg",
            bio: "AI Research Director specializing in document processing and machine learning applications.",
            twitter: "https://twitter.com/drmariasantos",
            linkedin: "https://linkedin.com/in/drmariasantos"
          },
          image: "/images/freepik/rm378-03c.jpg",
          tags: ["idp", "ai", "document-processing", "automation"],
          slug: "idp-new-standard-document-management",
          published: true,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        },
        {
          id: 9,
          title: "Innovation in Energy Supply Services",
          excerpt: "Intellisync revolutionizes document management in the energy sector with Intelligent Document Processing (IDP), automating data extraction and linking related documents to enhance efficiency, compliance, and accuracy in customer offerings.",
          content: `
            <h2>Introduction</h2>
            <p>The energy sector faces unique challenges in document management, from complex regulatory requirements to customer service demands. Our IDP solutions are specifically designed to address these industry-specific needs.</p>
            
            <h2>Regulatory Compliance</h2>
            <p>Automated processing ensures compliance with energy sector regulations, automatically flagging documents that require special attention or additional review.</p>
            
            <h2>Customer Service Enhancement</h2>
            <p>Faster document processing enables improved customer service, with quicker response times and more accurate information delivery.</p>
            
            <h2>Data Accuracy</h2>
            <p>Advanced extraction capabilities ensure high accuracy in data processing, reducing errors and improving operational efficiency.</p>
            
            <h2>Document Linking</h2>
            <p>Intelligent linking of related documents creates comprehensive customer profiles and improves service delivery.</p>
            
            <h2>Energy Sector Benefits</h2>
            <ul>
              <li>Enhanced regulatory compliance</li>
              <li>Improved customer service efficiency</li>
              <li>Reduced processing errors</li>
              <li>Better resource utilization</li>
              <li>Streamlined audit processes</li>
            </ul>
          `,
          category: "Energy & Utilities",
          date: "November 8, 2024",
          readTime: "9 min read",
          author: {
            name: "Robert Kim",
            avatar: "/images/freepik/3470.jpg",
            bio: "Energy Sector Specialist with expertise in regulatory compliance and customer service optimization.",
            twitter: "https://twitter.com/robertkim",
            linkedin: "https://linkedin.com/in/robertkim"
          },
          image: "/images/freepik/3470.jpg",
          tags: ["energy", "utilities", "compliance", "customer-service"],
          slug: "energy-supply-services-innovation",
          published: true,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        },
        {
          id: 10,
          title: "OCR Technology: Enhancing Document Management",
          excerpt: "Intellisync's OCR-powered platform enhances document management by digitizing printed and handwritten text, streamlining workflows, and improving data accessibility and accuracy.",
          content: `
            <h2>Introduction</h2>
            <p>Optical Character Recognition (OCR) technology has evolved significantly, becoming a cornerstone of modern document management. Our advanced OCR capabilities transform how organizations process and utilize their documents.</p>
            
            <h2>Advanced Text Recognition</h2>
            <p>Our OCR system can accurately recognize and digitize both printed and handwritten text, making previously inaccessible information searchable and usable.</p>
            
            <h2>Workflow Streamlining</h2>
            <p>Automated OCR processing reduces manual data entry, streamlines document workflows, and improves overall operational efficiency.</p>
            
            <h2>Data Accessibility</h2>
            <p>Digitized documents become searchable and accessible, enabling better information retrieval and decision-making processes.</p>
            
            <h2>Accuracy Improvements</h2>
            <p>Advanced algorithms and machine learning ensure high accuracy in text recognition, even for complex documents and poor-quality scans.</p>
            
            <h2>Technology Benefits</h2>
            <ul>
              <li>Improved data accessibility</li>
              <li>Enhanced search capabilities</li>
              <li>Reduced manual processing time</li>
              <li>Better accuracy in text recognition</li>
              <li>Streamlined document workflows</li>
            </ul>
          `,
          category: "Technology",
          date: "October 12, 2024",
          readTime: "6 min read",
          author: {
            name: "Dr. James Wilson",
            avatar: "/images/freepik/rm378-03c.jpg",
            bio: "Technology Director specializing in OCR and document digitization solutions.",
            twitter: "https://twitter.com/drjameswilson",
            linkedin: "https://linkedin.com/in/drjameswilson"
          },
          image: "/images/freepik/rm378-03c.jpg",
          tags: ["ocr", "document-digitization", "text-recognition", "workflow"],
          slug: "ocr-technology-document-management",
          published: true,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        }
      ];
      this.saveBlogs(defaultBlogs);
    }
  }

  // Get all blogs
  getAllBlogs() {
    try {
      const blogs = localStorage.getItem(this.storageKey);
      return blogs ? JSON.parse(blogs) : [];
    } catch (error) {
      console.error('Error loading blogs:', error);
      return [];
    }
  }

  // Get published blogs only
  getPublishedBlogs() {
    return this.getAllBlogs().filter(blog => blog.published);
  }

  // Get blog by ID
  getBlogById(id) {
    const blogs = this.getAllBlogs();
    return blogs.find(blog => blog.id === id);
  }

  // Get blog by slug
  getBlogBySlug(slug) {
    const blogs = this.getAllBlogs();
    return blogs.find(blog => blog.slug === slug);
  }

  // Create new blog
  createBlog(blogData) {
    const blogs = this.getAllBlogs();
    const newBlog = {
      ...blogData,
      id: this.generateId(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      published: blogData.published || false
    };
    
    blogs.push(newBlog);
    this.saveBlogs(blogs);
    return newBlog;
  }

  // Update blog
  updateBlog(id, blogData) {
    const blogs = this.getAllBlogs();
    const index = blogs.findIndex(blog => blog.id === id);
    
    if (index !== -1) {
      blogs[index] = {
        ...blogs[index],
        ...blogData,
        updatedAt: new Date().toISOString()
      };
      this.saveBlogs(blogs);
      return blogs[index];
    }
    return null;
  }

  // Delete blog
  deleteBlog(id) {
    const blogs = this.getAllBlogs();
    const filteredBlogs = blogs.filter(blog => blog.id !== id);
    this.saveBlogs(filteredBlogs);
  }

  // Toggle blog published status
  togglePublished(id) {
    const blog = this.getBlogById(id);
    if (blog) {
      return this.updateBlog(id, { published: !blog.published });
    }
    return null;
  }

  // Get categories
  getCategories() {
    const blogs = this.getPublishedBlogs();
    const categories = [...new Set(blogs.map(blog => blog.category))];
    return categories;
  }

  // Get related blogs
  getRelatedBlogs(currentBlogId, limit = 3) {
    const blogs = this.getPublishedBlogs();
    const currentBlog = this.getBlogById(currentBlogId);
    
    if (!currentBlog) return [];
    
    return blogs
      .filter(blog => blog.id !== currentBlogId && blog.category === currentBlog.category)
      .slice(0, limit);
  }

  // Search blogs
  searchBlogs(query) {
    const blogs = this.getPublishedBlogs();
    const lowercaseQuery = query.toLowerCase();
    
    return blogs.filter(blog => 
      blog.title.toLowerCase().includes(lowercaseQuery) ||
      blog.excerpt.toLowerCase().includes(lowercaseQuery) ||
      blog.content.toLowerCase().includes(lowercaseQuery) ||
      blog.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
    );
  }

  // Generate unique ID
  generateId() {
    const blogs = this.getAllBlogs();
    const maxId = blogs.length > 0 ? Math.max(...blogs.map(blog => blog.id)) : 0;
    return maxId + 1;
  }

  // Generate slug from title
  generateSlug(title) {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9 -]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim('-');
  }

  // Save blogs to localStorage
  saveBlogs(blogs) {
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(blogs));
    } catch (error) {
      console.error('Error saving blogs:', error);
    }
  }

  // Export blogs (for backup)
  exportBlogs() {
    return JSON.stringify(this.getAllBlogs(), null, 2);
  }

  // Import blogs (for restore)
  importBlogs(jsonData) {
    try {
      const blogs = JSON.parse(jsonData);
      this.saveBlogs(blogs);
      return true;
    } catch (error) {
      console.error('Error importing blogs:', error);
      return false;
    }
  }
}

export default new BlogService(); 