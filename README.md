# IntelliSync OA

## Overview
IntelliSync OA is a full-stack web platform for intelligent business automation, featuring:
- A dynamic, content-managed website (React + Vite frontend)
- A Node.js/Express backend with Firebase Firestore (or in-memory dev mode)
- A full-featured Admin Management System (separate React app) for editing all site content, blogs, resources, media, and live chat
- Real-time live chat system (Socket.IO)

---

## Features

### 🌐 Main Website
- Dynamic pages (Home, About, Contact, Blog, Resources, Pricing, Integrations, etc.)
- All content is managed via the admin panel and loaded from the backend API
- Real-time live chat widget for user support
- Blog and resource sections
- Responsive, modern UI

### 🛠️ Admin Management System (`admin-panel/`)
- **Visual Page Editor:** Edit any page, add/remove/reorder sections, edit hero/features/CTA/testimonials/custom sections
- **Blog Manager:** Create, edit, and delete blog posts
- **Resource Manager:** Manage downloadable resources (PDFs, guides, etc.)
- **Media Manager:** Upload, preview, and delete images/files
- **Live Chat Admin:** Real-time chat with website users, see active users, chat history
- **Authentication:** Simple password-based login (can be extended)
- **Create/Delete Pages:** Add new pages or remove existing ones

### ⚙️ Backend (Node.js/Express + Firebase)
- REST API for all content (pages, blogs, resources, media)
- Socket.IO for real-time chat
- File upload endpoints (Multer)
- In-memory fallback for development if Firebase is not configured

---

## Project Structure

```
intellisync-oa/
  admin-panel/         # React admin dashboard (Create React App)
  public/              # Public assets for main site
  server/              # Node.js/Express backend (API, chat, Firebase)
  src/                 # Main website React (Vite) frontend
  ...
```

---

## Getting Started

### 1. Clone the Repository
```sh
git clone https://github.com/Alphadoane/intellisync-oa.git
cd intellisync-oa
```

### 2. Install Dependencies
- **Main Website:**
  ```sh
  npm install
  ```
- **Admin Panel:**
  ```sh
  cd admin-panel
  npm install
  cd ..
  ```
- **Backend:**
  ```sh
  cd server
  npm install
  cd ..
  ```

### 3. Firebase Setup (Recommended)
- See `server/FIREBASE_SETUP.md` for instructions
- For development, the backend will run in in-memory mode if Firebase is not configured

### 4. Running the Project
- **Start Backend:**
  ```sh
  cd server
  npm run dev
  ```
- **Start Main Website:**
  ```sh
  npm run dev
  # (Visit http://localhost:5173 or the next available port)
  ```
- **Start Admin Panel:**
  ```sh
  cd admin-panel
  npm start
  # (Visit http://localhost:3000 or the next available port)
  ```

---

## Deployment
- Deploy the main website and admin panel separately (e.g., Vercel, Netlify, AWS, etc.)
- Deploy the backend (Express server) to a Node.js host (e.g., Render, Heroku, AWS, etc.)
- Set environment variables for Firebase in production

---

## Live Chat System
- Real-time chat between users and admin (Socket.IO)
- Notification sounds for new messages
- Admin can see all active users and chat history

---

## Page Management
- All website pages are editable from the admin panel
- Add, remove, or reorder sections visually
- Supports hero, features, CTA, testimonials, and custom JSON sections

---

## Blog & Resource Management
- Full CRUD for blog posts and resources
- Upload and manage files (PDFs, images, etc.)

---

## Media Management
- Upload, preview, and delete images/files
- All uploads are available for use in page content

---

## Security & Authentication
- Simple password-based login for admin panel (can be extended)
- Backend endpoints can be secured further for production

---

## Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

---

## License
[MIT](LICENSE)

## 🚀 Live Demo

Visit the live website: [https://Alphadoane.github.io/intellisync-oa](https://Alphadoane.github.io/intellisync-oa)

## 🛠️ Tech Stack

- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and development server
- **React Router** - Client-side routing
- **Framer Motion** - Smooth animations and transitions
- **CSS3** - Modern styling with animations

## 📁 Project Structure

```
intellisync-oa/
├── src/
│   ├── components/     # Reusable React components
│   ├── pages/         # Page components and their CSS
│   ├── styles/        # Global styles
│   ├── App.jsx        # Main app component
│   └── index.jsx      # Entry point
├── public/
│   └── images/        # Static images
├── dist/              # Build output (generated)
└── index.html         # HTML template
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Alphadoane/intellisync-oa.git
cd intellisync-oa
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## 🌐 Deployment

This project is automatically deployed to GitHub Pages using GitHub Actions. Every push to the main branch triggers a new deployment.

### Manual GitHub Pages Setup

If the automatic deployment isn't working, follow these steps:

1. **Go to your GitHub repository**: [https://github.com/Alphadoane/intellisync-oa](https://github.com/Alphadoane/intellisync-oa)

2. **Navigate to Settings**:
   - Click on the "Settings" tab in your repository

3. **Scroll down to "Pages" section**:
   - In the left sidebar, click on "Pages"

4. **Configure GitHub Pages**:
   - **Source**: Select "GitHub Actions"
   - **Branch**: This will be handled by the workflow

5. **Check Actions**:
   - Go to the "Actions" tab to see if the workflow is running
   - Look for any error messages in the workflow logs

### Troubleshooting

If you're getting a 404 error:

1. **Check GitHub Actions**: Go to Actions tab and see if the workflow completed successfully
2. **Check Pages Settings**: Ensure GitHub Pages is enabled in repository settings
3. **Wait for Deployment**: GitHub Pages can take 5-10 minutes to update after a successful deployment
4. **Clear Browser Cache**: Try accessing the site in an incognito window

## 🎨 Features

- **Responsive Design** - Works on all devices
- **Modern UI/UX** - Clean and professional design
- **Smooth Animations** - Powered by Framer Motion
- **Fast Loading** - Optimized with Vite
- **SEO Friendly** - Proper meta tags and structure

## 📄 Pages

- **Home** - Landing page with hero section
- **About** - Company information and mission
- **Solutions** - Business intelligence, data automation, document management
- **Case Studies** - Success stories and testimonials
- **Team** - Meet the team
- **Contact** - Get in touch
- **Support** - Customer support information
- **Blog** - Latest news and insights
- **Resources** - Downloads and resources
- **Pricing** - Service pricing
- **Awards** - Company achievements

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

- Website: [https://Alphadoane.github.io/intellisync-oa](https://Alphadoane.github.io/intellisync-oa)
- GitHub: [https://github.com/Alphadoane/intellisync-oa](https://github.com/Alphadoane/intellisync-oa) #   U p d a t e d   0 7 / 1 9 / 2 0 2 5   0 4 : 5 7 : 2 5  
 