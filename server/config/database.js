const admin = require('firebase-admin');
const mongoose = require('mongoose');

// Firebase configuration
let db = null;
let useFirebase = false;

// Initialize Firebase Admin SDK
const initializeFirebase = () => {
  try {
    const serviceAccount = require('../serviceAccountKey.json');
    
    if (!admin.apps.length) {
      admin.initializeApp({
        credential: admin.credential.cert(serviceAccount)
      });
    }
    
    db = admin.firestore();
    useFirebase = true;
    console.log('✅ Connected to Firebase Firestore');
    return true;
  } catch (error) {
    console.log('⚠️ Firebase not configured. Running in development mode with in-memory storage.');
    console.log('📝 To use Firebase, follow the setup guide in FIREBASE_SETUP.md');
    
    // In-memory storage for development
    const inMemoryDB = {
      pages: new Map(),
      blogs: new Map(),
      resources: new Map(),
      contacts: [],
      analytics: [],
      content: new Map(),
      users: new Map(),
      sessions: new Map()
    };
    
    // Clear database on startup for development
    console.log('🧹 Clearing in-memory database for fresh start...');
    
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
        }),
        where: (field, operator, value) => ({
          get: async () => {
            const docs = [];
            inMemoryDB[name].forEach((data, id) => {
              if (operator === '==' && data[field] === value) {
                docs.push({ id, data: () => data });
              }
            });
            return {
              empty: docs.length === 0,
              docs: docs,
              forEach: (callback) => docs.forEach(callback)
            };
          },
          orderBy: (field, direction) => ({
            get: async () => {
              const docs = [];
              inMemoryDB[name].forEach((data, id) => {
                if (data[field] === value) {
                  docs.push({ id, data: () => data });
                }
              });
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
      }),
      batch: () => ({
        set: (docRef, data) => {
          const id = docRef.id || Date.now().toString();
          const collection = docRef.parent.id;
          if (!inMemoryDB[collection]) inMemoryDB[collection] = new Map();
          inMemoryDB[collection].set(id, data);
        },
        commit: async () => ({})
      })
    };
    
    // Mock FieldValue
    admin.firestore = {
      FieldValue: {
        serverTimestamp: () => new Date()
      }
    };
    
    return false;
  }
};

// MongoDB connection (for future use)
const connectMongoDB = async () => {
  try {
    const mongoUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/intellisync';
    await mongoose.connect(mongoUri);
    console.log('✅ Connected to MongoDB');
    return true;
  } catch (error) {
    console.log('⚠️ MongoDB not available:', error.message);
    return false;
  }
};

// Health check
const healthCheck = async () => {
  try {
    if (useFirebase) {
      // Test Firebase connection
      await db.collection('health').doc('test').get();
      return { status: 'healthy', database: 'Firebase' };
    } else {
      return { status: 'healthy', database: 'In-Memory' };
    }
  } catch (error) {
    return { status: 'unhealthy', error: error.message };
  }
};

module.exports = {
  initializeFirebase,
  connectMongoDB,
  healthCheck,
  getDb: () => db,
  isFirebase: () => useFirebase,
  admin
}; 