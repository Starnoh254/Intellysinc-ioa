import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import Login from './Login';
import '../styles/Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeGroup, setActiveGroup] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const navbarRef = useRef(null);
  const userMenuRef = useRef(null);
  const location = useLocation();
  const { user, isAuthenticated, isAdmin, logout } = useAuth();

  useEffect(() => {
    // Close mobile menu when route changes
    setMenuOpen(false);
    setActiveGroup(null);
  }, [location.pathname]);

  useEffect(() => {
    // Handle scroll effect
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close dropdowns when clicking outside
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setActiveGroup(null);
      }
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setShowUserMenu(false);
      }
    };

    // Prevent body scroll when mobile menu is open
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [menuOpen]);

  const handleDropdownClick = (idx) => {
    setActiveGroup(activeGroup === idx ? null : idx);
  };

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
    setActiveGroup(null);
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
    setActiveGroup(null);
  };

  const handleLoginClick = () => {
    setShowLogin(true);
    setMenuOpen(false);
  };

  const handleLogout = async () => {
    await logout();
    setShowUserMenu(false);
  };

  const navGroups = [
    {
      title: 'Overview',
      links: [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/About' },
        { name: 'Team', path: '/Team' },
        { name: 'Awards', path: '/Awards' },
        { name: 'CompanyInfo', path: '/CompanyInfo' },
      ],
    },
    {
      title: 'Solutions',
      links: [
        { name: 'Business Intelligence', path: '/BusinessIntelligence' },
        { name: 'Data Automation', path: '/DataAutomation' },
        { name: 'Data Processing', path: '/DataProcessing' },
        { name: 'Document Management', path: '/DocumentManagement' },
        { name: 'Integrations', path: '/Integrations' },
        { name: 'Workflow Automation', path: '/WorkflowAutomation' },
        { name: 'Quality Management', path: '/QualityManagement' },
        { name: 'Sales & Marketing', path: '/SalesMarketing' },
        { name: 'Mobile Solutions', path: '/MobileSolutions' },
        { name: 'Security Services', path: '/SecurityServices' },
      ],
    },
    {
      title: 'Services',
      links: [
        { name: 'Solutions', path: '/Solutions' },
        { name: 'CaseStudies', path: '/CaseStudies' },
        { name: 'Testimonials', path: '/Testimonials' },
      ],
    },
    {
      title: 'Blogs',
      links: [
        { name: 'Blog', path: '/Blog' },
      ],
    },
    {
      title: 'Support',
      links: [
        { name: 'Contact', path: '/Contact' },
        { name: 'Support', path: '/Support' },
      ],
    },
  ];

  return (
    <>
      <header className={`navbar-fixed ${isScrolled ? 'scrolled' : ''}`} ref={navbarRef}>
        <div className="navbar-container">
          <Link to="/" className="logo" onClick={handleLinkClick}>
            <img
              src={`${import.meta.env.BASE_URL}images/logo-intellisync.png`}
              alt="intellisync-ioa Logo"
              className="logo-image"
            />
          </Link>

          <button
            className="menu-toggle"
            onClick={handleMenuToggle}
            aria-label="Toggle Menu"
            aria-expanded={menuOpen}
            aria-controls="nav-links"
          >
            <span className={`hamburger ${menuOpen ? 'open' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>

          <nav 
            id="nav-links"
            className={`nav-links ${menuOpen ? 'open' : ''}`}
            role="navigation"
            aria-label="Main navigation"
          >
            {navGroups.map((group, idx) => (
              <div key={idx} className={`nav-group ${activeGroup === idx ? 'active' : ''}`}>
                <span
                  className="nav-group-title"
                  onClick={() => handleDropdownClick(idx)}
                  role="button"
                  tabIndex={0}
                  aria-expanded={activeGroup === idx}
                  aria-haspopup="true"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      handleDropdownClick(idx);
                    }
                  }}
                >
                  {group.title}
                  <span className="dropdown-arrow" aria-hidden="true">▾</span>
                </span>
                <ul 
                  className={`dropdown ${activeGroup === idx ? 'open' : ''}`}
                  role="menu"
                >
                  {group.links.map((link, i) => (
                    <li key={i} role="none">
                      <Link
                        to={link.path}
                        onClick={handleLinkClick}
                        className={location.pathname === link.path ? 'active' : ''}
                        role="menuitem"
                        tabIndex={activeGroup === idx ? 0 : -1}
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Authentication Section */}
            <div className="auth-section">
              {isAuthenticated ? (
                <div className="user-menu-container" ref={userMenuRef}>
                  <button
                    className="user-menu-toggle"
                    onClick={() => setShowUserMenu(!showUserMenu)}
                    aria-label="User menu"
                    aria-expanded={showUserMenu}
                  >
                    <div className="user-avatar">
                      {user?.name ? user.name.charAt(0).toUpperCase() : 'U'}
                    </div>
                    <span className="user-name">{user?.name || 'User'}</span>
                    <span className="dropdown-arrow">▾</span>
                  </button>
                  
                  <div className={`user-dropdown ${showUserMenu ? 'open' : ''}`}>
                    <div className="user-info">
                      <div className="user-email">{user?.email}</div>
                      <div className="user-role">{user?.role || 'user'}</div>
                    </div>
                    
                    <ul className="user-menu">
                      <li>
                        <Link to="/profile" onClick={() => setShowUserMenu(false)}>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                            <circle cx="12" cy="7" r="4"></circle>
                          </svg>
                          Profile
                        </Link>
                      </li>
                      
                      {isAdmin && (
                        <>
                          <li>
                            <Link to="/admin/blog" onClick={() => setShowUserMenu(false)}>
                              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                                <polyline points="14,2 14,8 20,8"></polyline>
                                <line x1="16" y1="13" x2="8" y2="13"></line>
                                <line x1="16" y1="17" x2="8" y2="17"></line>
                                <polyline points="10,9 9,9 8,9"></polyline>
                              </svg>
                              Blog Manager
                            </Link>
                          </li>
                          <li>
                            <Link to="/admin/analytics" onClick={() => setShowUserMenu(false)}>
                              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <line x1="18" y1="20" x2="18" y2="10"></line>
                                <line x1="12" y1="20" x2="12" y2="4"></line>
                                <line x1="6" y1="20" x2="6" y2="14"></line>
                              </svg>
                              Analytics
                            </Link>
                          </li>
                          <li>
                            <Link to="/admin/content" onClick={() => setShowUserMenu(false)}>
                              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                                <polyline points="14,2 14,8 20,8"></polyline>
                                <line x1="16" y1="13" x2="8" y2="13"></line>
                                <line x1="16" y1="17" x2="8" y2="17"></line>
                                <polyline points="10,9 9,9 8,9"></polyline>
                              </svg>
                              Content Manager
                            </Link>
                          </li>
                        </>
                      )}
                      
                      <li className="divider"></li>
                      
                      <li>
                        <button onClick={handleLogout} className="logout-btn">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                            <polyline points="16,17 21,12 16,7"></polyline>
                            <line x1="21" y1="12" x2="9" y2="12"></line>
                          </svg>
                          Logout
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              ) : (
                <button className="login-btn" onClick={handleLoginClick}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
                    <polyline points="10,17 15,12 10,7"></polyline>
                    <line x1="15" y1="12" x2="3" y2="12"></line>
                  </svg>
                  Sign In
                </button>
              )}
            </div>
          </nav>
        </div>
      </header>

      {/* Login Modal */}
      {showLogin && (
        <Login onClose={() => setShowLogin(false)} />
      )}
    </>
  );
};

export default Navbar;
