const Joi = require('joi');
const { validationResult } = require('express-validator');

// Validation schemas
const schemas = {
  // User validation
  user: {
    register: Joi.object({
      email: Joi.string().email().required(),
      password: Joi.string().min(8).pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/).required()
        .messages({
          'string.pattern.base': 'Password must contain at least one uppercase letter, one lowercase letter, and one number'
        }),
      name: Joi.string().min(2).max(50).required(),
      role: Joi.string().valid('user', 'admin', 'moderator').default('user')
    }),
    
    login: Joi.object({
      email: Joi.string().email().required(),
      password: Joi.string().required()
    }),
    
    update: Joi.object({
      name: Joi.string().min(2).max(50),
      email: Joi.string().email(),
      role: Joi.string().valid('user', 'admin', 'moderator'),
      status: Joi.string().valid('active', 'inactive', 'suspended')
    })
  },

  // Page validation
  page: {
    create: Joi.object({
      slug: Joi.string().pattern(/^[a-z0-9-]+$/).min(3).max(50).required(),
      title: Joi.string().min(3).max(100).required(),
      sections: Joi.array().items(Joi.object({
        type: Joi.string().required(),
        content: Joi.object().required()
      }))
    }),
    
    update: Joi.object({
      title: Joi.string().min(3).max(100),
      sections: Joi.array().items(Joi.object({
        type: Joi.string().required(),
        content: Joi.object().required()
      }))
    })
  },

  // Blog validation
  blog: {
    create: Joi.object({
      title: Joi.string().min(5).max(200).required(),
      content: Joi.string().min(10).required(),
      excerpt: Joi.string().max(300),
      author: Joi.string().required(),
      tags: Joi.array().items(Joi.string()),
      category: Joi.string(),
      status: Joi.string().valid('draft', 'published', 'archived').default('draft'),
      featured: Joi.boolean().default(false)
    }),
    
    update: Joi.object({
      title: Joi.string().min(5).max(200),
      content: Joi.string().min(10),
      excerpt: Joi.string().max(300),
      author: Joi.string(),
      tags: Joi.array().items(Joi.string()),
      category: Joi.string(),
      status: Joi.string().valid('draft', 'published', 'archived'),
      featured: Joi.boolean()
    })
  },

  // Resource validation
  resource: {
    create: Joi.object({
      title: Joi.string().min(3).max(200).required(),
      description: Joi.string().min(10).required(),
      type: Joi.string().valid('document', 'video', 'image', 'link').required(),
      url: Joi.string().uri().required(),
      category: Joi.string(),
      tags: Joi.array().items(Joi.string()),
      status: Joi.string().valid('active', 'inactive').default('active')
    }),
    
    update: Joi.object({
      title: Joi.string().min(3).max(200),
      description: Joi.string().min(10),
      type: Joi.string().valid('document', 'video', 'image', 'link'),
      url: Joi.string().uri(),
      category: Joi.string(),
      tags: Joi.array().items(Joi.string()),
      status: Joi.string().valid('active', 'inactive')
    })
  },

  // Contact validation
  contact: Joi.object({
    name: Joi.string().min(2).max(100).required(),
    email: Joi.string().email().required(),
    message: Joi.string().min(10).max(2000).required(),
    subject: Joi.string().max(200),
    phone: Joi.string().pattern(/^[\+]?[1-9][\d]{0,15}$/).optional()
  }),

  // Analytics validation
  analytics: {
    track: Joi.object({
      type: Joi.string().valid('pageview', 'event', 'error').required(),
      url: Joi.string().uri().required(),
      sessionId: Joi.string().required(),
      userAgent: Joi.string(),
      referrer: Joi.string().uri().allow(''),
      name: Joi.string().when('type', {
        is: 'event',
        then: Joi.required()
      }),
      properties: Joi.object()
    }),
    
    batch: Joi.object({
      events: Joi.array().items(Joi.object({
        type: Joi.string().valid('pageview', 'event', 'error').required(),
        url: Joi.string().uri().required(),
        sessionId: Joi.string().required(),
        userAgent: Joi.string(),
        referrer: Joi.string().uri().allow(''),
        name: Joi.string().when('type', {
          is: 'event',
          then: Joi.required()
        }),
        properties: Joi.object()
      })).min(1).max(100).required(),
      sessionId: Joi.string().required()
    })
  },

  // Content validation
  content: {
    create: Joi.object({
      title: Joi.string().min(3).max(200).required(),
      content: Joi.string().min(10).required(),
      type: Joi.string().valid('text', 'html', 'markdown').required(),
      category: Joi.string(),
      tags: Joi.array().items(Joi.string()),
      status: Joi.string().valid('draft', 'published', 'archived').default('draft')
    }),
    
    update: Joi.object({
      title: Joi.string().min(3).max(200),
      content: Joi.string().min(10),
      type: Joi.string().valid('text', 'html', 'markdown'),
      category: Joi.string(),
      tags: Joi.array().items(Joi.string()),
      status: Joi.string().valid('draft', 'published', 'archived')
    })
  },

  // Search validation
  search: Joi.object({
    query: Joi.string().min(2).max(100).required(),
    type: Joi.string().valid('all', 'pages', 'blogs', 'resources', 'content').default('all'),
    limit: Joi.number().integer().min(1).max(100).default(20),
    offset: Joi.number().integer().min(0).default(0)
  }),

  // Pagination validation
  pagination: Joi.object({
    page: Joi.number().integer().min(1).default(1),
    limit: Joi.number().integer().min(1).max(100).default(20),
    sort: Joi.string().valid('asc', 'desc').default('desc'),
    sortBy: Joi.string().default('createdAt')
  })
};

// Generic validation middleware
const validate = (schema) => {
  return (req, res, next) => {
    const { error, value } = schema.validate(req.body);
    
    if (error) {
      return res.status(400).json({
        error: 'Validation failed',
        details: error.details.map(detail => ({
          field: detail.path.join('.'),
          message: detail.message
        }))
      });
    }
    
    req.body = value;
    next();
  };
};

// Express-validator result handler
const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  
  if (!errors.isEmpty()) {
    return res.status(400).json({
      error: 'Validation failed',
      details: errors.array().map(error => ({
        field: error.path,
        message: error.msg,
        value: error.value
      }))
    });
  }
  
  next();
};

// Sanitize input
const sanitizeInput = (req, res, next) => {
  // Remove HTML tags from string inputs
  const sanitizeString = (str) => {
    if (typeof str !== 'string') return str;
    return str.replace(/<[^>]*>/g, '').trim();
  };

  // Recursively sanitize object
  const sanitizeObject = (obj) => {
    if (typeof obj !== 'object' || obj === null) return obj;
    
    if (Array.isArray(obj)) {
      return obj.map(sanitizeObject);
    }
    
    const sanitized = {};
    for (const [key, value] of Object.entries(obj)) {
      if (typeof value === 'string') {
        sanitized[key] = sanitizeString(value);
      } else if (typeof value === 'object') {
        sanitized[key] = sanitizeObject(value);
      } else {
        sanitized[key] = value;
      }
    }
    return sanitized;
  };

  req.body = sanitizeObject(req.body);
  req.query = sanitizeObject(req.query);
  next();
};

// File upload validation
const validateFileUpload = (allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'application/pdf']) => {
  return (req, res, next) => {
    if (!req.file) {
      return res.status(400).json({
        error: 'No file uploaded',
        code: 'NO_FILE'
      });
    }

    if (!allowedTypes.includes(req.file.mimetype)) {
      return res.status(400).json({
        error: 'Invalid file type',
        code: 'INVALID_FILE_TYPE',
        allowedTypes
      });
    }

    // Check file size (5MB limit)
    const maxSize = 5 * 1024 * 1024; // 5MB
    if (req.file.size > maxSize) {
      return res.status(400).json({
        error: 'File too large',
        code: 'FILE_TOO_LARGE',
        maxSize: '5MB'
      });
    }

    next();
  };
};

module.exports = {
  schemas,
  validate,
  handleValidationErrors,
  sanitizeInput,
  validateFileUpload
}; 