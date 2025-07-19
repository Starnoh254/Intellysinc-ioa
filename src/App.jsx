import React, { lazy, Suspense, useRef } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import ProtectedRoute from './components/ProtectedRoute';
import LiveChatWidget from './components/LiveChatWidget';
import AdminLiveChat from './components/AdminLiveChat';
import ErrorBoundary from './components/ErrorBoundary';
import { AuthProvider } from './contexts/AuthContext';
import ProductDetail from './pages/ProductDetail';

// Lazy-loaded pages
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Awards = lazy(() => import('./pages/Awards'));
const Testimonials = lazy(() => import('./pages/Testimonials'));
const BusinessIntelligence = lazy(() => import('./pages/BusinessIntelligence'));
const DataAutomation = lazy(() => import('./pages/DataAutomation'));
const DataProcessing = lazy(() => import('./pages/DataProcessing'));
const DocumentManagement = lazy(() => import('./pages/DocumentManagement'));
const Integrations = lazy(() => import('./pages/Integrations'));
const Solutions = lazy(() => import('./pages/Solutions'));
const CaseStudies = lazy(() => import('./pages/CaseStudies'));
const Blog = lazy(() => import('./pages/Blog'));
const BlogDetail = lazy(() => import('./pages/BlogDetail'));
const Support = lazy(() => import('./pages/Support'));
const CompanyInfo = lazy(() => import('./pages/CompanyInfo'));
const Profile = lazy(() => import('./pages/Profile'));
const AdminBlogManager = lazy(() => import('./components/AdminBlogManager'));
const AdminAccess = lazy(() => import('./components/AdminAccess'));
const AllProducts = lazy(() => import('./pages/AllProducts'));

// New Service Pages
const WorkflowAutomation = lazy(() => import('./pages/WorkflowAutomation'));
const QualityManagement = lazy(() => import('./pages/QualityManagement'));
const SalesMarketing = lazy(() => import('./pages/SalesMarketing'));
const MobileSolutions = lazy(() => import('./pages/MobileSolutions'));
const SecurityServices = lazy(() => import('./pages/SecurityServices'));
const KodakScanners = lazy(() => import('./pages/KodakScanners'));

// New Analytics and Content Management Components
const AnalyticsDashboard = lazy(() => import('./components/AnalyticsDashboard'));
const AdvancedContentManager = lazy(() => import('./components/AdvancedContentManager'));
const TestNewFeatures = lazy(() => import('./components/TestNewFeatures'));

const AvisionScanners = lazy(() => import('./pages/AvisionScanners'));
const BrotherScanners = lazy(() => import('./pages/BrotherScanners'));
const CanonScanners = lazy(() => import('./pages/CanonScanners'));
const FujitsuRicohScanners = lazy(() => import('./pages/FujitsuRicohScanners'));
const MicrofilmScanners = lazy(() => import('./pages/MicrofilmScanners'));
const Servers = lazy(() => import('./pages/Servers'));
const ScanningSoftware = lazy(() => import('./pages/ScanningSoftware'));

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={<div style={{ padding: "2rem", textAlign: "center" }}>Loading...</div>}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Awards" element={<Awards />} />
          <Route path="/Testimonials" element={<Testimonials />} />
          <Route path="/BusinessIntelligence" element={<BusinessIntelligence />} />
          <Route path="/DataAutomation" element={
            <ErrorBoundary>
              <DataAutomation />
            </ErrorBoundary>
          } />
          <Route path="/DataProcessing" element={<DataProcessing />} />
          <Route path="/DocumentManagement" element={<DocumentManagement />} />
          <Route path="/Integrations" element={<Integrations />} />
          <Route path="/WorkflowAutomation" element={<WorkflowAutomation />} />
          <Route path="/QualityManagement" element={<QualityManagement />} />
          <Route path="/SalesMarketing" element={<SalesMarketing />} />
          <Route path="/MobileSolutions" element={<MobileSolutions />} />
          <Route path="/SecurityServices" element={<SecurityServices />} />
          <Route path="/Solutions" element={<Solutions />} />
          <Route path="/CaseStudies" element={<CaseStudies />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogDetail />} />
          <Route path="/Support" element={<Support />} />
          <Route path="/CompanyInfo" element={<CompanyInfo />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/kodak-scanners" element={<KodakScanners />} />
          <Route path="/avision-scanners" element={<AvisionScanners />} />
          <Route path="/brother-scanners" element={<BrotherScanners />} />
          <Route path="/canon-scanners" element={<CanonScanners />} />
          <Route path="/fujitsu-ricoh-scanners" element={<FujitsuRicohScanners />} />
          <Route path="/microfilm-scanners" element={<MicrofilmScanners />} />
          <Route path="/servers" element={<Servers />} />
          <Route path="/all-products" element={<AllProducts />} />
          <Route path="/products/:category/:productSlug" element={<ProductDetail />} />
          <Route path="/scanning-software" element={<ScanningSoftware />} />
          
          {/* Test route for new features */}
          <Route path="/test-features" element={<TestNewFeatures />} />
          
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
          
          {/* New Analytics and Content Management Routes */}
          <Route 
            path="/admin/analytics" 
            element={
              <ProtectedRoute>
                <AnalyticsDashboard />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/admin/content" 
            element={
              <ProtectedRoute>
                <AdvancedContentManager />
              </ProtectedRoute>
            } 
          />
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
}

function App() {
  const liveChatRef = useRef();

  const handleOpenLiveChat = () => {
    if (liveChatRef.current && liveChatRef.current.open) {
      liveChatRef.current.open();
    }
  };

  return (
    <AuthProvider>
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
          <Chatbot onOpenLiveChat={handleOpenLiveChat} />
          <LiveChatWidget ref={liveChatRef} />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
