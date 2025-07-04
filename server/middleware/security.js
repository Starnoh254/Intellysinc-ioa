const helmet = require('helmet');
const cors = require('cors');

// Security headers configuration
const securityHeaders = helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
      fontSrc: ["'self'", "https://fonts.gstatic.com"],
      imgSrc: ["'self'", "data:", "https:"],
      scriptSrc: ["'self'", "'unsafe-inline'", "'unsafe-eval'"],
      connectSrc: ["'self'", "ws:", "wss:"],
      frameSrc: ["'self'"],
      objectSrc: ["'none'"],
      upgradeInsecureRequests: []
    }
  },
  crossOriginEmbedderPolicy: false,
  crossOriginResourcePolicy: { policy: "cross-origin" }
});

// CORS configuration
const corsOptions = {
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    
    const allowedOrigins = [
      'http://localhost:3000',
      'http://localhost:5173',
      'http://localhost:5174',
      'https://intellisync.io',
      'https://www.intellisync.io'
    ];
    
    if (allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
  exposedHeaders: ['X-Total-Count', 'X-Page-Count']
};

// CORS middleware
const corsMiddleware = cors(corsOptions);

// Additional security middleware
const additionalSecurity = (req, res, next) => {
  // Remove sensitive headers
  res.removeHeader('X-Powered-By');
  
  // Add custom security headers
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'DENY');
  res.setHeader('X-XSS-Protection', '1; mode=block');
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  res.setHeader('Permissions-Policy', 'geolocation=(), microphone=(), camera=()');
  
  // Add request ID for tracking
  req.id = req.headers['x-request-id'] || `req_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  res.setHeader('X-Request-ID', req.id);
  
  next();
};

// Request size limiter
const requestSizeLimit = (req, res, next) => {
  const contentLength = parseInt(req.headers['content-length'] || '0');
  const maxSize = 10 * 1024 * 1024; // 10MB
  
  if (contentLength > maxSize) {
    return res.status(413).json({
      error: 'Request entity too large',
      code: 'REQUEST_TOO_LARGE',
      maxSize: '10MB'
    });
  }
  
  next();
};

// URL validation middleware
const validateUrl = (req, res, next) => {
  const url = req.url;
  
  // Check for suspicious patterns
  const suspiciousPatterns = [
    /\.\./, // Directory traversal
    /<script/i, // Script tags
    /javascript:/i, // JavaScript protocol
    /vbscript:/i, // VBScript protocol
    /onload/i, // Event handlers
    /onerror/i,
    /onclick/i
  ];
  
  for (const pattern of suspiciousPatterns) {
    if (pattern.test(url)) {
      return res.status(400).json({
        error: 'Invalid request',
        code: 'SUSPICIOUS_REQUEST'
      });
    }
  }
  
  next();
};

// IP blocking middleware (basic implementation)
const blockedIPs = new Set();
const blockIP = (ip) => blockedIPs.add(ip);
const unblockIP = (ip) => blockedIPs.delete(ip);

const ipBlocker = (req, res, next) => {
  const clientIP = req.ip || req.connection.remoteAddress;
  
  if (blockedIPs.has(clientIP)) {
    return res.status(403).json({
      error: 'Access denied',
      code: 'IP_BLOCKED'
    });
  }
  
  next();
};

// Rate limiting for failed authentication attempts
const failedAuthAttempts = new Map();
const maxFailedAttempts = 5;
const lockoutDuration = 15 * 60 * 1000; // 15 minutes

const authAttemptLimiter = (req, res, next) => {
  const clientIP = req.ip || req.connection.remoteAddress;
  const now = Date.now();
  
  const attempts = failedAuthAttempts.get(clientIP) || { count: 0, firstAttempt: now };
  
  // Reset if lockout period has passed
  if (now - attempts.firstAttempt > lockoutDuration) {
    attempts.count = 0;
    attempts.firstAttempt = now;
  }
  
  // Check if IP is locked out
  if (attempts.count >= maxFailedAttempts) {
    return res.status(429).json({
      error: 'Too many failed authentication attempts',
      code: 'AUTH_LOCKOUT',
      retryAfter: Math.ceil((lockoutDuration - (now - attempts.firstAttempt)) / 1000)
    });
  }
  
  // Store the attempt info
  failedAuthAttempts.set(clientIP, attempts);
  
  // Add method to track failed attempts
  req.trackFailedAuth = () => {
    attempts.count++;
    failedAuthAttempts.set(clientIP, attempts);
  };
  
  next();
};

// File upload security
const validateFileType = (req, res, next) => {
  if (!req.file) return next();
  
  const allowedMimeTypes = [
    'image/jpeg',
    'image/png',
    'image/gif',
    'image/webp',
    'application/pdf',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'application/vnd.ms-excel',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
  ];
  
  if (!allowedMimeTypes.includes(req.file.mimetype)) {
    return res.status(400).json({
      error: 'Invalid file type',
      code: 'INVALID_FILE_TYPE',
      allowedTypes: allowedMimeTypes
    });
  }
  
  next();
};

module.exports = {
  securityHeaders,
  corsMiddleware,
  additionalSecurity,
  requestSizeLimit,
  validateUrl,
  ipBlocker,
  blockIP,
  unblockIP,
  authAttemptLimiter,
  validateFileType
}; 