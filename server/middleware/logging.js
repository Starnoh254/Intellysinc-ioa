const winston = require('winston');
const morgan = require('morgan');
const path = require('path');

// Create logs directory if it doesn't exist
const fs = require('fs');
const logsDir = path.join(__dirname, '../logs');
if (!fs.existsSync(logsDir)) {
  fs.mkdirSync(logsDir, { recursive: true });
}

// Configure Winston logger
const logger = winston.createLogger({
  level: process.env.LOG_LEVEL || 'info',
  format: winston.format.combine(
    winston.format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss'
    }),
    winston.format.errors({ stack: true }),
    winston.format.json()
  ),
  defaultMeta: { service: 'intellisync-api' },
  transports: [
    // Write all logs with level 'error' and below to error.log
    new winston.transports.File({
      filename: path.join(logsDir, 'error.log'),
      level: 'error',
      maxsize: 5242880, // 5MB
      maxFiles: 5
    }),
    // Write all logs with level 'info' and below to combined.log
    new winston.transports.File({
      filename: path.join(logsDir, 'combined.log'),
      maxsize: 5242880, // 5MB
      maxFiles: 5
    }),
    // Write all logs with level 'debug' and below to debug.log
    new winston.transports.File({
      filename: path.join(logsDir, 'debug.log'),
      level: 'debug',
      maxsize: 5242880, // 5MB
      maxFiles: 5
    })
  ]
});

// If we're not in production, log to the console as well
if (process.env.NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console({
    format: winston.format.combine(
      winston.format.colorize(),
      winston.format.simple()
    )
  }));
}

// Custom Morgan format
const morganFormat = (tokens, req, res) => {
  const logData = {
    method: tokens.method(req, res),
    url: tokens.url(req, res),
    status: tokens.status(req, res),
    responseTime: tokens['response-time'](req, res),
    contentLength: tokens.res(req, res, 'content-length'),
    userAgent: tokens['user-agent'](req, res),
    remoteAddr: tokens['remote-addr'](req, res),
    requestId: req.id || 'unknown',
    userId: req.user?.id || 'anonymous',
    userRole: req.user?.role || 'anonymous'
  };
  
  return JSON.stringify(logData);
};

// Morgan middleware
const morganMiddleware = morgan(morganFormat, {
  stream: {
    write: (message) => {
      logger.info('HTTP Request', JSON.parse(message));
    }
  }
});

// Request logging middleware
const logRequest = (req, res, next) => {
  const startTime = Date.now();
  
  // Log request start
  logger.info('Request started', {
    method: req.method,
    url: req.url,
    ip: req.ip,
    userAgent: req.get('User-Agent'),
    requestId: req.id,
    userId: req.user?.id || 'anonymous',
    userRole: req.user?.role || 'anonymous'
  });
  
  // Override res.end to log response
  const originalEnd = res.end;
  res.end = function(chunk, encoding) {
    const duration = Date.now() - startTime;
    
    // Log response
    logger.info('Request completed', {
      method: req.method,
      url: req.url,
      statusCode: res.statusCode,
      duration: `${duration}ms`,
      contentLength: res.get('Content-Length'),
      requestId: req.id,
      userId: req.user?.id || 'anonymous',
      userRole: req.user?.role || 'anonymous'
    });
    
    originalEnd.call(this, chunk, encoding);
  };
  
  next();
};

// Error logging middleware
const logError = (err, req, res, next) => {
  logger.error('Application error', {
    error: {
      message: err.message,
      stack: err.stack,
      name: err.name
    },
    request: {
      method: req.method,
      url: req.url,
      ip: req.ip,
      userAgent: req.get('User-Agent'),
      requestId: req.id,
      userId: req.user?.id || 'anonymous',
      userRole: req.user?.role || 'anonymous'
    },
    timestamp: new Date().toISOString()
  });
  
  next(err);
};

// Performance logging middleware
const logPerformance = (req, res, next) => {
  const startTime = process.hrtime();
  
  res.on('finish', () => {
    const [seconds, nanoseconds] = process.hrtime(startTime);
    const duration = seconds * 1000 + nanoseconds / 1000000; // Convert to milliseconds
    
    if (duration > 1000) { // Log slow requests (>1 second)
      logger.warn('Slow request detected', {
        method: req.method,
        url: req.url,
        duration: `${duration.toFixed(2)}ms`,
        statusCode: res.statusCode,
        requestId: req.id,
        userId: req.user?.id || 'anonymous'
      });
    }
  });
  
  next();
};

// Security event logging
const logSecurityEvent = (event, details) => {
  logger.warn('Security event', {
    event,
    details,
    timestamp: new Date().toISOString()
  });
};

// Database operation logging
const logDatabaseOperation = (operation, collection, documentId, duration) => {
  logger.debug('Database operation', {
    operation,
    collection,
    documentId,
    duration: `${duration}ms`,
    timestamp: new Date().toISOString()
  });
};

// API usage logging
const logApiUsage = (endpoint, method, userId, userRole, success) => {
  logger.info('API usage', {
    endpoint,
    method,
    userId: userId || 'anonymous',
    userRole: userRole || 'anonymous',
    success,
    timestamp: new Date().toISOString()
  });
};

// Export logger instance for direct use
module.exports = {
  logger,
  morganMiddleware,
  logRequest,
  logError,
  logPerformance,
  logSecurityEvent,
  logDatabaseOperation,
  logApiUsage
}; 