import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeGroup, setActiveGroup] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const navbarRef = useRef(null);
  const location = useLocation();

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
      title: 'Services',
      links: [
        { name: 'BusinessIntelligence', path: '/BusinessIntelligence' },
        { name: 'DataAutomation', path: '/DataAutomation' },
        { name: 'DataProcessing', path: '/DataProcessing' },
        { name: 'DocumentManagement', path: '/DocumentManagement' },
        { name: 'Integrations', path: '/Integrations' },
        { name: 'WorkflowAutomation', path: '/WorkflowAutomation' },
        { name: 'QualityManagement', path: '/QualityManagement' },
        { name: 'SalesMarketing', path: '/SalesMarketing' },
        { name: 'MobileSolutions', path: '/MobileSolutions' },
        { name: 'SecurityServices', path: '/SecurityServices' },
      ],
    },
    {
      title: 'Solutions',
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
        { name: 'Resources', path: '/Resources' },
        { name: 'Support', path: '/Support' },
      ],
    },
  ];

  return (
    <header className={`navbar-fixed ${isScrolled ? 'scrolled' : ''}`} ref={navbarRef}>
      <div className="navbar-container">
        <Link to="/" className="logo" onClick={handleLinkClick}>
          <span style={{
            fontWeight: 'bold',
            fontSize: '2rem',
            color: '#007bff',
            letterSpacing: '1px',
            fontFamily: 'Segoe UI, Arial, sans-serif',
            display: 'block',
            padding: '4px 0',
            textShadow: '0 2px 6px rgba(0,0,0,0.15)'
          }}>
            IntelliSync-OA
          </span>
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
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
