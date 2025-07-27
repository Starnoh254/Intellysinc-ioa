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
  const handleQuantityChange = (e) => setQuantity(parseInt(e.target.value));
  const handleIncrement = () => setQuantity(prev => prev + 1);
  const handleDecrement = () => quantity > 1 && setQuantity(prev => prev - 1);
  const handleVariantChange = (e) => setSelectedVariant(e.target.value);
  // Remove dropdownContent and hoveredMenu state
  // Remove all dropdown rendering logic from the heroSection

  const heroSection = (
    <section className="iris-hero-section">
      <nav className="iris-subnav">
        <div className="iris-subnav-container">
          <ul className="iris-subnav-list">
            <li>PDF & OCR software</li>
            <li>Capture & Classification</li>
            <li>Document scanners</li>
            <li>Handheld & Pen scanners</li>
            <li>Portable scanners</li>
            <li>Services & warranty</li>
          </ul>
        </div>
      </nav>
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
