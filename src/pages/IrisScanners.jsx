import React from 'react';
import '../styles/IrisScanners.css';
import { Link, useParams, useNavigate } from 'react-router-dom';
import ProductInfo from '../components/ProductInfo';
import '../styles/IrisScannersSubnav.css';
import ReadirisShowcase from '../components/ReadirisShowcase';
import { useState } from 'react';
import ProductSidebar from '../components/ProductSidebar';

export const irisProducts = []; // You can populate or import this as needed

const productTabs = [
  {
    label: 'Document Scanner', key: 'document', products: [
      { name: 'IRIScan Visualizer 7', image: '/images/iris/iris1.png' },
      { name: 'IRIScan Visualizer 7 Dyslexic', image: '/images/iris/iris2.png' },
      { name: 'IRIScan Desk 7 Pro', image: '/images/iris/iris3.png' },
      { name: 'IRIScan Desk 7 Business', image: '/images/iris/iris4.png' },
      { name: 'IRIScan Desk 6 Business', image: '/images/iris/iris5.png' },
      { name: 'IRIScan Desk 6 Pro', image: '/images/iris/iris6.png' },
      { name: 'IRIScan Desk 6', image: '/images/iris/iris7.png' },
      { name: 'IRIScan Desk 5 Pro Dyslexic', image: '/images/iris/iris8.png' },
      { name: 'IRIScan Desk 5 Pro', image: '/images/iris/iris9.png' },
      { name: 'IRIScan Desk 5', image: '/images/iris/iris10.png' },
      { name: 'IRIScan Book 5 Wifi', image: '/images/iris/iris11.png' },
      { name: 'IRIScan Book 5', image: '/images/iris/iris12.png' },
    ]
  },
  { label: 'Handheld Scanners', key: 'handheld', products: [
    { name: 'IRISPen Air 8', image: '/images/iris/iris13.png' },
    { name: 'IRISPen Reader 8', image: '/images/iris/iris14.png' },
    { name: 'IRIsScan Book 5 Wifi', image: '/images/iris/iris15.png' },
    { name: 'IRIScan Book 5', image: '/images/iris/iris16.png' },
    { name: 'IRIScan Book 3', image: '/images/iris/iris17.png' },
    { name: 'IRIScan Mouse 2 Executive', image: '/images/iris/iris18.png' },
    ] 
  },

  { label: 'Portable Scanners', key: 'portable', products: [
    { name: 'IRIScan Anywhere 6 Simplex', image: '/images/iris/iris19.png' },
    { name: 'IRIScan Anywhere 6 Duplex', image: '/images/iris/iris20.png' },
    { name: 'IRIScan Executive 4', image: '/images/iris/iris21.png' },
    { name: 'IRIScan Express 4', image: '/images/iris/iris22.png' },
    { name: 'IRIScan Book 5 Wifi', image: '/images/iris/iris23.png' },
    { name: 'IRIScan Book 5', image: '/images/iris/iris24.png' },
    { name: 'IRIScan Pro 5', image: '/images/iris/iris25.png' },
    { name: 'IRIScan Pro 5 File', image: '/images/iris/iris26.png' },
    ] 
  },

  { label: 'Dyslexic Solutions & Tools', key: 'dyslexic', products: [
    { name: 'IRISPen Air 8', image: '/images/iris/iris27.png' },
    { name: 'IRISPen Reader 8', image: '/images/iris/iris28.png' },
    { name: 'IRIScan Desk 6 Pro Dyslexic', image: '/images/iris/iris29.png' },
    { name: 'IRIScan Book 5 Wifi', image: '/images/iris/iris30.png' },
    { name: 'IRIScan Book 5', image: '/images/iris/iris31.png' },
    { name: 'IRIScan Executive 4', image: '/images/iris/iris32.png' },
    { name: 'IRIScan Express 4', image: '/images/iris/iris33.png' },
    ] 
  },

  { label: 'Pens Scanner & Reading Pen', key: 'pens', products: [
    { name: 'IRISPen Air 8', image: '/images/iris/iris34.png' },
    { name: 'IRISPen Reader 8', image: '/images/iris/iris35.png' },
    { name: 'IRISPen Executive 7', image: '/images/iris/iris36.png' },
    { name: 'IRISPen Air 7', image: '/images/iris/iris37.png' },

    ] 
  },
];

export default function IrisScanners() {
  const { productSlug } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(null); // subnav highlight only
  const [productTab, setProductTab] = useState('document'); // product categories
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedVariant, setSelectedVariant] = useState("/eshop/Coaching");
  const [activeCategory, setActiveCategory] = useState('pdf-ocr'); // New state for hero navigation
  const handleQuantityChange = (e) => setQuantity(parseInt(e.target.value));
  const handleIncrement = () => setQuantity(prev => prev + 1);
  const handleDecrement = () => quantity > 1 && setQuantity(prev => prev - 1);
  const handleVariantChange = (e) => {
    const path = e.target.value;
    setSelectedVariant(path);
    navigate(path);
  };

  // New hero section with navigation and content based on the images
  const heroSection = (
    <section className="iris-hero-section">
      {/* Navigation Bar */}
      <nav className="iris-hero-nav">
        <div className="iris-hero-nav-container">
          <ul className="iris-hero-nav-list">
            <li 
              className={activeCategory === 'pdf-ocr' ? 'active' : ''}
              onClick={() => setActiveCategory('pdf-ocr')}
            >
              PDF & OCR software
            </li>
            <li 
              className={activeCategory === 'capture-classification' ? 'active' : ''}
              onClick={() => setActiveCategory('capture-classification')}
            >
              Capture & Classification
            </li>
            <li 
              className={activeCategory === 'document-scanners' ? 'active' : ''}
              onClick={() => setActiveCategory('document-scanners')}
            >
              Document scanners
            </li>
            <li 
              className={activeCategory === 'handheld-pen-scanners' ? 'active' : ''}
              onClick={() => setActiveCategory('handheld-pen-scanners')}
            >
              Handheld & Pen scanners
            </li>
            <li 
              className={activeCategory === 'portable-scanners' ? 'active' : ''}
              onClick={() => setActiveCategory('portable-scanners')}
            >
              Portable scanners
            </li>
            <li 
              className={activeCategory === 'services-warranty' ? 'active' : ''}
              onClick={() => setActiveCategory('services-warranty')}
            >
              Services & warranty
            </li>
          </ul>
        </div>
      </nav>

      {/* Content Area */}
      <div className="iris-hero-content">
        {activeCategory === 'pdf-ocr' && (
          <div className="iris-hero-content-grid">
            <div className="iris-hero-left">
              <div className="iris-hero-product-box">
                <div className="iris-hero-product-image">
                  <img src="/images/iris/pdf_manager.png" alt="PDF & OCR Solutions" />
                </div>
              </div>
            </div>
            <div className="iris-hero-right">
              <h3>PDF Manager :</h3>
              <h4>Product range comparison</h4>
              <ul className="iris-hero-product-list">
                <Link to="/iris-scanners/readiris-pdf-essential">
                  <li>
                    <span className="iris-hero-product-icon">📄</span>
                    Readiris PDF Essential
                    <span className="iris-hero-os-icons">🪟 🍎</span>
                  </li>
                </Link>
                <Link to="/iris-scanners/readiris-pdf-elite">
                  <li>
                    <span className="iris-hero-product-icon">📄</span>
                    Readiris PDF Elite
                    <span className="iris-hero-os-icons">🪟 🍎</span>
                  </li>
                </Link>
              </ul>
            </div>
            <div className="iris-hero-right">
              <h3>OCR Solutions :</h3>
              <h4>Product range comparison</h4>
              <ul className="iris-hero-product-list">
                <Link to="/iris-scanners/readiris-pro">
                  <li>
                    <span className="iris-hero-product-icon">📄</span>
                    Readiris Pro 17 Windows
                    <span className="iris-hero-os-icons">🪟</span>
                  </li>
                </Link>
                <Link to="/iris-scanners/readiris-corporate">
                  <li>
                    <span className="iris-hero-product-icon">📄</span>
                    Readiris Corporate 17 Windows
                    <span className="iris-hero-os-icons">🪟</span>
                  </li>
                </Link>
                <Link to="/iris-scanners/readiris-dyslexic">
                  <li>
                    <span className="iris-hero-product-icon">📄</span>
                    Readiris Dyslexic 2.0
                    <span className="iris-hero-os-icons">🪟</span>
                  </li>
                </Link>
                <Link to="/iris-scanners/readiris-pro-17-mac">
                  <li>
                    <span className="iris-hero-product-icon">📄</span>
                    Readiris Pro 17 Mac
                    <span className="iris-hero-os-icons">🍎</span>
                  </li>
                </Link>
                <Link to="/iris-scanners/readiris-corporate-17-mac">
                  <li>
                    <span className="iris-hero-product-icon">📄</span>
                    Readiris Corporate 17 Mac
                    <span className="iris-hero-os-icons">🍎</span>
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        )}

        {activeCategory === 'capture-classification' && (
          <div className="iris-hero-content-grid">
            <div className="iris-hero-left">
              <div className="iris-hero-product-box">
                <div className="iris-hero-product-image">
                  <img src="/images/iris/IRISmart.png" alt="Capture & Classification" />
                </div>
              </div>
            </div>
            <div className="iris-hero-right">
              <h3>Classification software :</h3>
              <ul className="iris-hero-product-list">
                <Link to="/iris-scanners/irismart-file">
                  <li>
                    <span className="iris-hero-product-icon">📁</span>
                    IRISMart File
                    <span className="iris-hero-os-icons">🪟</span>
                  </li>
                </Link>
                <Link to="/iris-scanners/irismart-file-security">
                  <li>
                    <span className="iris-hero-product-icon">📁</span>
                    IRISMart File Security
                    <span className="iris-hero-os-icons">🪟</span>
                  </li>
                </Link>
                <Link to="/iris-scanners/irispowerscan-12">
                  <li>
                    <span className="iris-hero-product-icon">📁</span>
                    IRISPowerscan 12
                    <span className="iris-hero-os-icons">🪟</span>
                  </li>
                </Link>
              </ul>
            </div>
            <div className="iris-hero-right">
              <h3>Business card software :</h3>
              <ul className="iris-hero-product-list">
                <Link to="/iris-scanners/cardiris-corporate-5-for-1-pc">
                  <li>
                    <span className="iris-hero-product-icon">📇</span>
                    Cardiris Corporate 5 for 1 PC
                    <span className="iris-hero-os-icons">🪟</span>
                  </li>
                </Link>
                <Link to="/iris-scanners/cardiris-corporate-smb-5-for-5-pc">
                  <li>
                    <span className="iris-hero-product-icon">📇</span>
                    Cardiris Corporate SMB 5 for 5 PC
                    <span className="iris-hero-os-icons">🪟</span>
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        )}

        {activeCategory === 'document-scanners' && (
          <div className="iris-hero-content-grid">
            <div className="iris-hero-left">
              <div className="iris-hero-product-box">
                <div className="iris-hero-product-image">
                  <img src="/images/iris/camera_book_scanner.png" alt="Document Scanners" />
                </div>
              </div>
            </div>
            <div className="iris-hero-right">
              <h3>Camera & Book Scanner :</h3>
              <h4>Product range comparison</h4>
              <ul className="iris-hero-product-list">
                <Link to="/iris-scanners/iriscan-desk-6">
                  <li>
                    <span className="iris-hero-product-icon">📷</span>
                    IRIScan Desk 6
                  </li>
                </Link>
                <Link to="/iris-scanners/iriscan-desk-6-pro">
                  <li>
                    <span className="iris-hero-product-icon">📷</span>
                    IRIScan Desk 6 Pro
                  </li>
                </Link>
                <Link to="/iris-scanners/iriscan-desk-6-dyslexic">
                  <li>
                    <span className="iris-hero-product-icon">📷</span>
                    IRIScan Desk 6 DYSLEXIC
                  </li>
                </Link>
                <Link to="/iris-scanners/iriscan-desk-6-business-refurbished">
                  <li>
                    <span className="iris-hero-product-icon">📷</span>
                    IRIScan Desk 6 Business - refurbished
                  </li>
                </Link>
                <Link to="/iris-scanners/iriscan-desk-6-business">
                  <li>
                    <span className="iris-hero-product-icon">📷</span>
                    IRIScan Desk 6 Business
                  </li>
                </Link>
                <Link to="/iris-scanners/iriscan-desk-7-pro">
                  <li>
                    <span className="iris-hero-product-icon">📷</span>
                    IRIScan Desk 7 Pro
                  </li>
                </Link>
                <Link to="/iris-scanners/iriscan-desk-7-business">
                  <li>
                    <span className="iris-hero-product-icon">📷</span>
                    IRIScan Desk 7 Business
                  </li>
                </Link>
              </ul>
            </div>
            <div className="iris-hero-right">
              <h3>Document Scanner & Visualizer :</h3>
              <ul className="iris-hero-product-list">
                <Link to="/iris-scanners/iriscan-visualizer-7">
                  <li>
                    <span className="iris-hero-product-icon">📄</span>
                    Iriscan Visualizer 7
                  </li>
                </Link>
                <Link to="/iris-scanners/iriscan-visualizer-7-dyslexic">
                  <li>
                    <span className="iris-hero-product-icon">🏆</span>
                    IRIScan Visualizer 7 DYSLEXIC
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        )}

        {activeCategory === 'handheld-pen-scanners' && (
          <div className="iris-hero-content-grid">
            <div className="iris-hero-left">
              <div className="iris-hero-product-box">
                <div className="iris-hero-product-image">
                  <img src="/images/iris/pen_scanner.jpg" alt="Handheld & Pen scanners" />
                </div>
              </div>
            </div>
            <div className="iris-hero-right">
              <h3>Pen Scanner & Reading Pen :</h3>
              <ul className="iris-hero-product-list">
                <Link to="/iris-scanners/irispen-reader-8">
                  <li>
                    <span className="iris-hero-product-icon">✏️</span>
                    IRISPen Reader 8
                  </li>
                </Link>
                <Link to="/iris-scanners/irispen-air-8">
                  <li>
                    <span className="iris-hero-product-icon">✏️</span>
                    IRISPen Air 8
                  </li>
                </Link>
              </ul>
            </div>
            <div className="iris-hero-right">
              <h3>Handheldscanners :</h3>
              <h4>Product range comparison</h4>
              <ul className="iris-hero-product-list">
                <Link to="/iris-scanners/iriscan-book-5">
                  <li>
                    <span className="iris-hero-product-icon">📖</span>
                    IRIScan Book 5
                  </li>
                </Link>
                <Link to="/iris-scanners/iriscan-book-5-wifi">
                  <li>
                    <span className="iris-hero-product-icon">📖</span>
                    IRIScan Book 5 Wifi
                  </li>
                </Link>
                <Link to="/iris-scanners/iriscan-anywhere-6-wifi">
                  <li>
                    <span className="iris-hero-product-icon">📖</span>
                    IRIScan Anywhere 6 Wifi
                  </li>
                </Link>
                <Link to="/iris-scanners/iriscan-anywhere-6-wifi-duplex">
                  <li>
                    <span className="iris-hero-product-icon">📖</span>
                    IRIScan Anywhere 6 Wifi Duplex
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        )}

        {activeCategory === 'portable-scanners' && (
          <div className="iris-hero-content-grid">
            <div className="iris-hero-left">
              <div className="iris-hero-product-box">
                <div className="iris-hero-product-image">
                  <img src="/images/iris/single_sheetfed.png" alt="Portable Scanners" />
                </div>
              </div>
            </div>
            <div className="iris-hero-right">
              <h3>Single-sheetfed :</h3>
              <h4>Product range comparison</h4>
              <ul className="iris-hero-product-list">
                <Link to="/iris-scanners/iriscan-anywhere-6-wifi">
                  <li>
                    <span className="iris-hero-product-icon">📄</span>
                    IRIScan Anywhere 6 Wifi
                  </li>
                </Link>
                <Link to="/iris-scanners/iriscan-anywhere-6-wifi-duplex">
                  <li>
                    <span className="iris-hero-product-icon">📄</span>
                    IRIScan Anywhere 6 Wifi Duplex
                  </li>
                </Link>
                <Link to="/iris-scanners/iriscan-express-4">
                  <li>
                    <span className="iris-hero-product-icon">📄</span>
                    IRIScan Express 4
                  </li>
                </Link>
                <Link to="/iris-scanners/iriscan-executive-4">
                  <li>
                    <span className="iris-hero-product-icon">📄</span>
                    IRIScan Executive 4
                  </li>
                </Link>
              </ul>
            </div>
            <div className="iris-hero-right">
              <h3>Multi-page sheetfed :</h3>
              <h4>Product range comparison</h4>
              <ul className="iris-hero-product-list">
                <Link to="/iris-scanners/iriscan-pro-5">
                  <li>
                    <span className="iris-hero-product-icon">📄</span>
                    IRIScan Pro 5
                  </li>
                </Link>
                <Link to="/iris-scanners/iriscan-pro-5-file">
                  <li>
                    <span className="iris-hero-product-icon">📄</span>
                    IRIScan Pro 5 File
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        )}

        {activeCategory === 'services-warranty' && (
          <div className="iris-hero-content-grid">
            <div className="iris-hero-left">
              <div className="iris-hero-product-box">
                <div className="iris-hero-product-image">
                  <img src="/images/iris/extended_warranty.png" alt="Extended Warranty" />
                </div>
              </div>
            </div>
            <div className="iris-hero-right">
              <h3>Extended Warranty :</h3>
              <ul className="iris-hero-product-list">
                <Link to="/iris-scanners/iriscare-3-years-extended-warranty">
                  <li>
                    <span className="iris-hero-product-icon">🏆</span>
                    IRISCare 3 years extended warranty
                  </li>
                </Link>
                <Link to="/iris-scanners/iriscare-4-year-extended-warranty">
                  <li>
                    <span className="iris-hero-product-icon">🏆</span>
                    IRISCare 4 year extended warranty
                  </li>
                </Link>
              </ul>
            </div>
            <div className="iris-hero-right">
              <h3>Coaching :</h3>
              <ul className="iris-hero-product-list">
                <Link to="/iris-scanners/1h-coaching">
                  <li>
                    <span className="iris-hero-product-icon">💻</span>
                    1H coaching
                  </li>
                </Link>
                <Link to="/iris-scanners/3h-coaching">
                  <li>
                    <span className="iris-hero-product-icon">💻</span>
                    3H coaching
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        )}
      </div>
    </section>
  );

  if (productSlug) {
    const product = irisProducts.find(p => p.slug === productSlug);
    if (!product) {
      return (
        <div style={{ padding: 40 }}>
          <h2>Product Not Found</h2>
          <button onClick={() => navigate(-1)}>Go Back</button>
        </div>
      );
    }
    return (
      <>
        {heroSection}
        <ProductInfo product={product} />
      </>
    );
  }

  return (
    <div className="product-page-container">
      <ProductSidebar />
      <main className="product-main">
        {heroSection}
        {!selectedProduct && (
          <div className="iris-product-tabs-section">
            <h2 className="iris-product-tabs-title">Please select your product to begin the registration</h2>

            <div className="iris-product-tabs">
              {productTabs.map(tab => (
                <button
                  key={tab.key}
                  className={`iris-product-tab${productTab === tab.key ? ' active' : ''}`}
                  onClick={() => setProductTab(tab.key)}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="iris-product-tab-content">
              <div className="iris-product-grid">
                {(() => {
                  const tab = productTabs.find(tab => tab.key === productTab);
                  if (!tab) return <div className="iris-product-placeholder">Please select a category above.</div>;
                  if (!tab.products || tab.products.length === 0) return <div>No products available.</div>;
                  return tab.products.map((product, index) => (
                    <div key={index} className="iris-product-grid-item">
                      <div className="iris-product-name">{product.name}</div>
                      <div className="iris-product-card">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="iris-product-image"
                        />
                      </div>
                    </div>
                  ));
                })()}
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
