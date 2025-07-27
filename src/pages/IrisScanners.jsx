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
  const handleVariantChange = (e) => setSelectedVariant(e.target.value);

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
                  <img src="/images/iris/pdf-manager-box.jpg" alt="PDF Manager" />
                </div>
              </div>
            </div>
            <div className="iris-hero-right">
              <h3>PDF Manager :</h3>
              <h4>Product range comparison</h4>
              <ul className="iris-hero-product-list">
                <li>
                  <span className="iris-hero-product-icon">📄</span>
                  Readiris PDF Essential
                  <span className="iris-hero-os-icons">🪟 🍎</span>
                </li>
                <li>
                  <span className="iris-hero-product-icon">📄</span>
                  Readiris PDF Elite
                  <span className="iris-hero-os-icons">🪟 🍎</span>
                </li>
              </ul>
            </div>
            <div className="iris-hero-right">
              <h3>OCR Solutions :</h3>
              <h4>Product range comparison</h4>
              <ul className="iris-hero-product-list">
                <li>
                  <span className="iris-hero-product-icon">📄</span>
                  Readiris Pro 17
                  <span className="iris-hero-os-icons">🪟</span>
                </li>
                <li>
                  <span className="iris-hero-product-icon">📄</span>
                  Readiris Corporate 17
                  <span className="iris-hero-os-icons">🪟</span>
                </li>
                <li>
                  <span className="iris-hero-product-icon">📄</span>
                  Readiris Dyslexic
                  <span className="iris-hero-os-icons">🪟</span>
                </li>
                <li>
                  <span className="iris-hero-product-icon">📄</span>
                  Readiris Pro 17
                  <span className="iris-hero-os-icons">🍎</span>
                </li>
                <li>
                  <span className="iris-hero-product-icon">📄</span>
                  Readiris Corporate 17
                  <span className="iris-hero-os-icons">🍎</span>
                </li>
              </ul>
            </div>
          </div>
        )}

        {activeCategory === 'capture-classification' && (
          <div className="iris-hero-content-grid">
            <div className="iris-hero-left">
              <div className="iris-hero-product-box">
                <div className="iris-hero-product-image">
                  <img src="/images/iris/irismart-box.jpg" alt="IRISmart" />
                </div>
              </div>
            </div>
            <div className="iris-hero-right">
              <h3>Classification software :</h3>
              <ul className="iris-hero-product-list">
                <li>
                  <span className="iris-hero-product-icon">📁</span>
                  IRISMart File
                  <span className="iris-hero-os-icons">🪟</span>
                </li>
                <li>
                  <span className="iris-hero-product-icon">📁</span>
                  IRISMart File Security
                  <span className="iris-hero-os-icons">🪟</span>
                </li>
                <li>
                  <span className="iris-hero-product-icon">📁</span>
                  IRISPowerscan 12
                  <span className="iris-hero-os-icons">🪟</span>
                </li>
              </ul>
            </div>
            <div className="iris-hero-right">
              <h3>Business card software :</h3>
              <ul className="iris-hero-product-list">
                <li>
                  <span className="iris-hero-product-icon">📇</span>
                  Cardiris Corporate 5 for 1 PC
                  <span className="iris-hero-os-icons">🪟</span>
                </li>
                <li>
                  <span className="iris-hero-product-icon">📇</span>
                  Cardiris Corporate SMB 5 for 5 PC
                  <span className="iris-hero-os-icons">🪟</span>
                </li>
              </ul>
            </div>
          </div>
        )}

        {activeCategory === 'document-scanners' && (
          <div className="iris-hero-content-grid">
            <div className="iris-hero-left">
              <div className="iris-hero-product-box">
                <div className="iris-hero-product-image">
                  <img src="/images/iris/camera-book-scanner.jpg" alt="Camera & Book Scanner" />
                </div>
              </div>
            </div>
            <div className="iris-hero-right">
              <h3>Camera & Book Scanner :</h3>
              <h4>Product range comparison</h4>
              <ul className="iris-hero-product-list">
                <li>
                  <span className="iris-hero-product-icon">📷</span>
                  IRIScan Desk 6
                </li>
                <li>
                  <span className="iris-hero-product-icon">📷</span>
                  IRIScan Desk 6 Pro
                </li>
                <li>
                  <span className="iris-hero-product-icon">📷</span>
                  IRIScan Desk 6 DYSLEXIC
                </li>
                <li>
                  <span className="iris-hero-product-icon">📷</span>
                  IRIScan Desk 6 Business
                </li>
                <li>
                  <span className="iris-hero-product-icon">📷</span>
                  IRIScan Desk 7 Pro
                </li>
                <li>
                  <span className="iris-hero-product-icon">📷</span>
                  IRIScan Desk 7 Business
                </li>
              </ul>
            </div>
            <div className="iris-hero-right">
              <h3>Document Scanner & Visualizer :</h3>
              <ul className="iris-hero-product-list">
                <li>
                  <span className="iris-hero-product-icon">📄</span>
                  Iriscan Visualizer 7
                </li>
                <li>
                  <span className="iris-hero-product-icon">📄</span>
                  Iriscan Visualizer 7 Dyslexic
                </li>
              </ul>
            </div>
          </div>
        )}

        {activeCategory === 'handheld-pen-scanners' && (
          <div className="iris-hero-content-grid">
            <div className="iris-hero-left">
              <div className="iris-hero-product-box">
                <div className="iris-hero-product-image">
                  <img src="/images/iris/pen-scanner.jpg" alt="Pen Scanner" />
                </div>
              </div>
            </div>
            <div className="iris-hero-right">
              <h3>Pen Scanner & Reading Pen :</h3>
              <ul className="iris-hero-product-list">
                <li>
                  <span className="iris-hero-product-icon">✏️</span>
                  IRISPen Reader 8
                </li>
                <li>
                  <span className="iris-hero-product-icon">✏️</span>
                  IRISPen Air 8
                </li>
              </ul>
            </div>
            <div className="iris-hero-right">
              <h3>Handheldscanners :</h3>
              <h4>Product range comparison</h4>
              <ul className="iris-hero-product-list">
                <li>
                  <span className="iris-hero-product-icon">📖</span>
                  IRIScan Book 5
                </li>
                <li>
                  <span className="iris-hero-product-icon">📖</span>
                  IRIScan Book 5 Wifi
                </li>
              </ul>
            </div>
          </div>
        )}

        {activeCategory === 'portable-scanners' && (
          <div className="iris-hero-content-grid">
            <div className="iris-hero-left">
              <div className="iris-hero-product-box">
                <div className="iris-hero-product-image">
                  <img src="/images/iris/single-sheetfed.jpg" alt="Single-sheetfed Scanner" />
                </div>
              </div>
            </div>
            <div className="iris-hero-right">
              <h3>Single-sheetfed :</h3>
              <h4>Product range comparison</h4>
              <ul className="iris-hero-product-list">
                <li>
                  <span className="iris-hero-product-icon">📄</span>
                  IRIScan Anywhere 6 Wifi
                </li>
                <li>
                  <span className="iris-hero-product-icon">📄</span>
                  IRIScan Anywhere 6 Wifi Duplex
                </li>
                <li>
                  <span className="iris-hero-product-icon">📄</span>
                  IRIScan Express 4
                </li>
                <li>
                  <span className="iris-hero-product-icon">📄</span>
                  IRIScan Executive 4
                </li>
              </ul>
            </div>
            <div className="iris-hero-right">
              <h3>Multi-page sheetfed :</h3>
              <h4>Product range comparison</h4>
              <ul className="iris-hero-product-list">
                <li>
                  <span className="iris-hero-product-icon">📄</span>
                  IRIScan Pro 5
                </li>
                <li>
                  <span className="iris-hero-product-icon">📄</span>
                  IRIScan Pro 5 File
                </li>
              </ul>
            </div>
          </div>
        )}

        {activeCategory === 'services-warranty' && (
          <div className="iris-hero-content-grid">
            <div className="iris-hero-left">
              <div className="iris-hero-product-box">
                <div className="iris-hero-product-image">
                  <img src="/images/iris/extended-warranty.jpg" alt="Extended Warranty" />
                </div>
              </div>
            </div>
            <div className="iris-hero-right">
              <h3>Extended Warranty :</h3>
              <ul className="iris-hero-product-list">
                <li>
                  <span className="iris-hero-product-icon">🏆</span>
                  IRISCare 3 years extended warranty
                </li>
                <li>
                  <span className="iris-hero-product-icon">🏆</span>
                  IRISCare 4 year extended warranty
                </li>
              </ul>
            </div>
            <div className="iris-hero-right">
              <h3>Coaching :</h3>
              <ul className="iris-hero-product-list">
                <li>
                  <span className="iris-hero-product-icon">💻</span>
                  1H coaching
                </li>
                <li>
                  <span className="iris-hero-product-icon">💻</span>
                  3H coaching
                </li>
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
