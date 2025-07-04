const rateLimit = require('express-rate-limit');

// General API rate limiter
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
  message: {
    error: 'Too many requests from this IP, please try again later.',
    code: 'RATE_LIMIT_EXCEEDED',
    retryAfter: '15 minutes'
  },
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
  handler: (req, res) => {
    res.status(429).json({
      error: 'Too many requests from this IP, please try again later.',
      code: 'RATE_LIMIT_EXCEEDED',
      retryAfter: '15 minutes'
    });
  }
});

// Strict rate limiter for authentication endpoints
const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // Limit each IP to 5 requests per windowMs
  message: {
    error: 'Too many authentication attempts, please try again later.',
    code: 'AUTH_RATE_LIMIT_EXCEEDED',
    retryAfter: '15 minutes'
  },
  handler: (req, res) => {
    res.status(429).json({
      error: 'Too many authentication attempts, please try again later.',
      code: 'AUTH_RATE_LIMIT_EXCEEDED',
      retryAfter: '15 minutes'
    });
  }
});

// File upload rate limiter
const uploadLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 10, // Limit each IP to 10 uploads per hour
  message: {
    error: 'Too many file uploads, please try again later.',
    code: 'UPLOAD_RATE_LIMIT_EXCEEDED',
    retryAfter: '1 hour'
  },
  handler: (req, res) => {
    res.status(429).json({
      error: 'Too many file uploads, please try again later.',
      code: 'UPLOAD_RATE_LIMIT_EXCEEDED',
      retryAfter: '1 hour'
    });
  }
});

// Contact form rate limiter
const contactLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 3, // Limit each IP to 3 contact submissions per hour
  message: {
    error: 'Too many contact form submissions, please try again later.',
    code: 'CONTACT_RATE_LIMIT_EXCEEDED',
    retryAfter: '1 hour'
  },
  handler: (req, res) => {
    res.status(429).json({
      error: 'Too many contact form submissions, please try again later.',
      code: 'CONTACT_RATE_LIMIT_EXCEEDED',
      retryAfter: '1 hour'
    });
  }
});

// Analytics tracking rate limiter
const analyticsLimiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 100, // Limit each IP to 100 analytics events per minute
  message: {
    error: 'Too many analytics events, please slow down.',
    code: 'ANALYTICS_RATE_LIMIT_EXCEEDED',
    retryAfter: '1 minute'
  },
  handler: (req, res) => {
    res.status(429).json({
      error: 'Too many analytics events, please slow down.',
      code: 'ANALYTICS_RATE_LIMIT_EXCEEDED',
      retryAfter: '1 minute'
    });
  }
});

// Admin endpoints rate limiter
const adminLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 50, // Limit each IP to 50 admin requests per 15 minutes
  message: {
    error: 'Too many admin requests, please try again later.',
    code: 'ADMIN_RATE_LIMIT_EXCEEDED',
    retryAfter: '15 minutes'
  },
  handler: (req, res) => {
    res.status(429).json({
      error: 'Too many admin requests, please try again later.',
      code: 'ADMIN_RATE_LIMIT_EXCEEDED',
      retryAfter: '15 minutes'
    });
  }
});

// Search rate limiter
const searchLimiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 30, // Limit each IP to 30 searches per minute
  message: {
    error: 'Too many search requests, please slow down.',
    code: 'SEARCH_RATE_LIMIT_EXCEEDED',
    retryAfter: '1 minute'
  },
  handler: (req, res) => {
    res.status(429).json({
      error: 'Too many search requests, please slow down.',
      code: 'SEARCH_RATE_LIMIT_EXCEEDED',
      retryAfter: '1 minute'
    });
  }
});

// Dynamic rate limiter based on user role
const dynamicLimiter = (req, res, next) => {
  const user = req.user;
  
  if (user && user.role === 'admin') {
    // Admins get higher limits
    return rateLimit({
      windowMs: 15 * 60 * 1000,
      max: 200
    })(req, res, next);
  } else if (user && user.role === 'moderator') {
    // Moderators get medium limits
    return rateLimit({
      windowMs: 15 * 60 * 1000,
      max: 150
    })(req, res, next);
  } else {
    // Regular users get standard limits
    return apiLimiter(req, res, next);
  }
};

module.exports = {
  apiLimiter,
  authLimiter,
  uploadLimiter,
  contactLimiter,
  analyticsLimiter,
  adminLimiter,
  searchLimiter,
  dynamicLimiter
}; 