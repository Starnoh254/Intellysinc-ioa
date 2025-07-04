const Redis = require('redis');

// Redis client configuration
let redisClient = null;
let useRedis = false;

// Initialize Redis connection
const initializeRedis = async () => {
  try {
    const redisUrl = process.env.REDIS_URL || 'redis://localhost:6379';
    redisClient = Redis.createClient({
      url: redisUrl,
      retry_strategy: (options) => {
        if (options.error && options.error.code === 'ECONNREFUSED') {
          console.log('⚠️ Redis server refused connection');
          return new Error('Redis server refused connection');
        }
        if (options.total_retry_time > 1000 * 60 * 60) {
          return new Error('Retry time exhausted');
        }
        if (options.attempt > 10) {
          return undefined;
        }
        return Math.min(options.attempt * 100, 3000);
      }
    });

    redisClient.on('error', (err) => {
      console.log('⚠️ Redis Client Error:', err.message);
    });

    redisClient.on('connect', () => {
      console.log('✅ Connected to Redis');
      useRedis = true;
    });

    await redisClient.connect();
    return true;
  } catch (error) {
    console.log('⚠️ Redis not available, using in-memory cache:', error.message);
    useRedis = false;
    return false;
  }
};

// In-memory cache fallback
const inMemoryCache = new Map();

// Set cache value
const set = async (key, value, ttl = 3600) => {
  try {
    if (useRedis && redisClient) {
      await redisClient.setEx(key, ttl, JSON.stringify(value));
    } else {
      inMemoryCache.set(key, {
        value: JSON.stringify(value),
        expiry: Date.now() + (ttl * 1000)
      });
    }
    return true;
  } catch (error) {
    console.error('Cache set error:', error);
    return false;
  }
};

// Get cache value
const get = async (key) => {
  try {
    if (useRedis && redisClient) {
      const value = await redisClient.get(key);
      return value ? JSON.parse(value) : null;
    } else {
      const cached = inMemoryCache.get(key);
      if (!cached) return null;
      
      if (Date.now() > cached.expiry) {
        inMemoryCache.delete(key);
        return null;
      }
      
      return JSON.parse(cached.value);
    }
  } catch (error) {
    console.error('Cache get error:', error);
    return null;
  }
};

// Delete cache value
const del = async (key) => {
  try {
    if (useRedis && redisClient) {
      await redisClient.del(key);
    } else {
      inMemoryCache.delete(key);
    }
    return true;
  } catch (error) {
    console.error('Cache delete error:', error);
    return false;
  }
};

// Delete multiple cache values
const delMultiple = async (keys) => {
  try {
    if (useRedis && redisClient) {
      await redisClient.del(keys);
    } else {
      keys.forEach(key => inMemoryCache.delete(key));
    }
    return true;
  } catch (error) {
    console.error('Cache delete multiple error:', error);
    return false;
  }
};

// Clear all cache
const clear = async () => {
  try {
    if (useRedis && redisClient) {
      await redisClient.flushDb();
    } else {
      inMemoryCache.clear();
    }
    return true;
  } catch (error) {
    console.error('Cache clear error:', error);
    return false;
  }
};

// Get cache statistics
const getStats = async () => {
  try {
    if (useRedis && redisClient) {
      const info = await redisClient.info();
      return {
        type: 'Redis',
        connected: redisClient.isReady,
        info: info
      };
    } else {
      return {
        type: 'In-Memory',
        size: inMemoryCache.size,
        keys: Array.from(inMemoryCache.keys())
      };
    }
  } catch (error) {
    console.error('Cache stats error:', error);
    return { type: 'Unknown', error: error.message };
  }
};

// Cache middleware for Express
const cacheMiddleware = (ttl = 300) => {
  return async (req, res, next) => {
    if (req.method !== 'GET') {
      return next();
    }

    const key = `cache:${req.originalUrl}`;
    const cached = await get(key);
    
    if (cached) {
      return res.json(cached);
    }

    // Store original send method
    const originalSend = res.json;
    
    // Override send method to cache response
    res.json = function(data) {
      set(key, data, ttl);
      originalSend.call(this, data);
    };
    
    next();
  };
};

// Health check
const healthCheck = async () => {
  try {
    if (useRedis && redisClient) {
      await redisClient.ping();
      return { status: 'healthy', type: 'Redis' };
    } else {
      return { status: 'healthy', type: 'In-Memory' };
    }
  } catch (error) {
    return { status: 'unhealthy', error: error.message };
  }
};

module.exports = {
  initializeRedis,
  set,
  get,
  del,
  delMultiple,
  clear,
  getStats,
  cacheMiddleware,
  healthCheck,
  isRedis: () => useRedis
}; 