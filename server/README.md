# IntelliSync Backend API

A secure, scalable, and feature-rich backend API for the IntelliSync platform.

## 🚀 Features

### Security
- **JWT Authentication** - Secure token-based authentication
- **Role-Based Access Control** - Admin, moderator, and user roles
- **Input Validation** - Comprehensive request validation and sanitization
- **Rate Limiting** - Protection against API abuse and DDoS attacks
- **Security Headers** - Helmet.js for enhanced security
- **CORS Protection** - Configurable cross-origin resource sharing

### Performance
- **Redis Caching** - High-performance caching layer
- **Compression** - Response compression for faster loading
- **Database Optimization** - Efficient queries with pagination
- **File Upload Security** - Secure file handling with validation

### Monitoring & Logging
- **Winston Logging** - Structured logging with multiple levels
- **Morgan HTTP Logging** - Request/response logging
- **Health Checks** - System health monitoring
- **Performance Tracking** - Slow request detection

### Real-time Features
- **Socket.IO** - Real-time chat and notifications
- **Live Analytics** - Real-time user tracking
- **WebSocket Support** - Bidirectional communication

### Content Management
- **Dynamic Pages** - Flexible page content management
- **Blog System** - Full-featured blog with categories and tags
- **Resource Management** - File and document management
- **Search API** - Full-text search across all content

### Email Integration
- **Contact Form** - Automated email notifications
- **Welcome Emails** - User onboarding
- **Password Reset** - Secure password recovery
- **Custom Notifications** - Flexible email system

## 📋 Prerequisites

- Node.js 16+ 
- Redis (optional, for caching)
- MongoDB (optional, for additional data storage)
- Firebase (optional, for cloud database)

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   cd server
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Configuration**
   ```bash
   cp .env.example .env
   ```
   
   Edit `.env` with your configuration:
   ```env
   # Server Configuration
   PORT=5000
   NODE_ENV=development
   
   # JWT Configuration
   JWT_SECRET=your-super-secret-jwt-key-change-in-production
   JWT_EXPIRES_IN=24h
   
   # Redis (optional)
   REDIS_URL=redis://localhost:6379
   
   # Email (optional)
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your-email@gmail.com
   SMTP_PASS=your-app-password
   ```

4. **Start the server**
   ```bash
   # Development
   npm run dev
   
   # Production
   npm start
   ```

## 🔐 Authentication

### Register a new user
```bash
POST /api/auth/register
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "SecurePassword123",
  "name": "John Doe",
  "role": "user"
}
```

### Login
```bash
POST /api/auth/login
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "SecurePassword123"
}
```

### Using JWT Token
```bash
GET /api/pages
Authorization: Bearer <your-jwt-token>
```

## 📊 API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - User login

### Pages
- `GET /api/pages/:slug` - Get page content
- `GET /api/pages` - List all pages (admin)
- `POST /api/pages` - Create page (admin)
- `PUT /api/pages/:slug` - Update page (admin)
- `DELETE /api/pages/:slug` - Delete page (admin)

### Blogs
- `GET /api/blogs` - List blogs with pagination
- `GET /api/blogs/:id` - Get blog post
- `POST /api/blogs` - Create blog (admin)
- `PUT /api/blogs/:id` - Update blog (admin)
- `DELETE /api/blogs/:id` - Delete blog (admin)

### Resources
- `GET /api/resources` - List resources
- `GET /api/resources/:id` - Get resource
- `POST /api/resources` - Create resource (admin)
- `PUT /api/resources/:id` - Update resource (admin)
- `DELETE /api/resources/:id` - Delete resource (admin)

### Media
- `POST /api/media/upload` - Upload file (admin)
- `GET /api/media` - List files (admin)
- `DELETE /api/media/:filename` - Delete file (admin)

### Analytics
- `POST /api/analytics/track` - Track user event
- `POST /api/analytics/batch` - Track multiple events
- `GET /api/analytics/data` - Get analytics data
- `GET /api/analytics/realtime` - Get real-time data
- `GET /api/analytics/export` - Export analytics

### Search
- `GET /api/search` - Full-text search
- `GET /api/search?type=blogs` - Search specific content type

### Contact
- `POST /api/contact` - Submit contact form

### Health
- `GET /` - Basic health check
- `GET /api/health` - Detailed health status

## 🔧 Configuration

### Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `PORT` | Server port | 5000 |
| `NODE_ENV` | Environment | development |
| `JWT_SECRET` | JWT signing secret | - |
| `JWT_EXPIRES_IN` | Token expiration | 24h |
| `REDIS_URL` | Redis connection URL | - |
| `SMTP_HOST` | SMTP server host | - |
| `SMTP_USER` | SMTP username | - |
| `SMTP_PASS` | SMTP password | - |

### Rate Limiting

| Endpoint | Limit | Window |
|----------|-------|--------|
| General API | 100 requests | 15 minutes |
| Authentication | 5 requests | 15 minutes |
| File Upload | 10 requests | 1 hour |
| Contact Form | 3 requests | 1 hour |
| Analytics | 100 requests | 1 minute |
| Search | 30 requests | 1 minute |

## 🛡️ Security Features

### Authentication & Authorization
- JWT-based authentication
- Role-based access control (admin, moderator, user)
- Password hashing with bcrypt
- Account lockout after failed attempts

### Input Validation
- Request body validation with Joi
- Input sanitization
- File type and size validation
- SQL injection protection

### Rate Limiting
- IP-based rate limiting
- Different limits for different endpoints
- Configurable time windows

### Security Headers
- Content Security Policy (CSP)
- X-Frame-Options
- X-Content-Type-Options
- X-XSS-Protection
- Referrer Policy

## 📈 Performance Features

### Caching
- Redis-based caching (with in-memory fallback)
- Cache middleware for Express routes
- Automatic cache invalidation

### Compression
- Response compression with gzip
- Configurable compression levels

### Database Optimization
- Efficient query patterns
- Pagination support
- Index optimization

## 📝 Logging

### Log Levels
- `error` - Application errors
- `warn` - Security events, slow requests
- `info` - General application events
- `debug` - Detailed debugging information

### Log Files
- `logs/error.log` - Error logs
- `logs/combined.log` - All logs
- `logs/debug.log` - Debug logs

## 🔍 Monitoring

### Health Checks
- Database connectivity
- Redis connectivity (if enabled)
- Email service status
- Memory usage

### Performance Monitoring
- Request duration tracking
- Slow request detection (>1 second)
- Memory usage monitoring

## 🚀 Deployment

### Development
```bash
npm run dev
```

### Production
```bash
npm start
```

### Docker (optional)
```bash
docker build -t intellisync-api .
docker run -p 5000:5000 intellisync-api
```

## 📚 API Documentation

### Swagger UI
Visit `/api-docs` when the server is running to see interactive API documentation.

### Generate Documentation
```bash
npm run docs
```

## 🧪 Testing

```bash
npm test
```

## 📦 Scripts

| Script | Description |
|--------|-------------|
| `npm start` | Start production server |
| `npm run dev` | Start development server with nodemon |
| `npm test` | Run tests |
| `npm run lint` | Run ESLint |
| `npm run format` | Format code with Prettier |
| `npm run docs` | Generate API documentation |

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the ISC License.

## 🆘 Support

For support, email support@intellisync.io or create an issue in the repository. 