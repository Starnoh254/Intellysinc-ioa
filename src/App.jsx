import React, { lazy, Suspense } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import ProtectedRoute from './components/ProtectedRoute';

// Lazy-loaded pages
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Team = lazy(() => import('./pages/Team'));
const Awards = lazy(() => import('./pages/Awards'));
const Clients = lazy(() => import('./pages/Clients'));
const Testimonials = lazy(() => import('./pages/Testimonials'));
const BusinessIntelligence = lazy(() => import('./pages/BusinessIntelligence'));
const DataAutomation = lazy(() => import('./pages/DataAutomation'));
const DocumentManagement = lazy(() => import('./pages/DocumentManagement'));
const Integrations = lazy(() => import('./pages/Integrations'));
const Solutions = lazy(() => import('./pages/Solutions'));
const CaseStudies = lazy(() => import('./pages/CaseStudies'));
const Pricing = lazy(() => import('./pages/Pricing'));
const Blog = lazy(() => import('./pages/Blog'));
const BlogPost = lazy(() => import('./pages/BlogPost'));
const Resources = lazy(() => import('./pages/Resources'));
const Support = lazy(() => import('./pages/Support'));
const CompanyInfo = lazy(() => import('./pages/CompanyInfo'));
const AdminBlogManager = lazy(() => import('./components/AdminBlogManager'));
const AdminAccess = lazy(() => import('./components/AdminAccess'));

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={<div style={{ padding: "2rem", textAlign: "center" }}>Loading...</div>}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Team" element={<Team />} />
          <Route path="/Awards" element={<Awards />} />
          <Route path="/Clients" element={<Clients />} />
          <Route path="/Testimonials" element={<Testimonials />} />
          <Route path="/BusinessIntelligence" element={<BusinessIntelligence />} />
          <Route path="/DataAutomation" element={<DataAutomation />} />
          <Route path="/DocumentManagement" element={<DocumentManagement />} />
          <Route path="/Integrations" element={<Integrations />} />
          <Route path="/Solutions" element={<Solutions />} />
          <Route path="/CaseStudies" element={<CaseStudies />} />
          <Route path="/Pricing" element={<Pricing />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/Resources" element={<Resources />} />
          <Route path="/Support" element={<Support />} />
          <Route path="/CompanyInfo" element={<CompanyInfo />} />
          
          {/* Admin Routes */}
          <Route path="/admin/login" element={<AdminAccess />} />
          <Route 
            path="/admin/blog" 
            element={
              <ProtectedRoute>
                <AdminBlogManager />
              </ProtectedRoute>
            } 
          />
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <div className="app-container" style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        paddingTop: '80px', // Add padding for fixed navbar
        backgroundColor: 'var(--page-bg)',
        color: 'var(--text-color)',
        transition: 'background-color 0.3s ease, color 0.3s ease'
      }}>
        <Navbar />
        <main style={{ flex: 1 }}>
          <AnimatedRoutes />
        </main>
        <Footer />
        <Chatbot />
      </div>
    </Router>
  );
}

export default App;
