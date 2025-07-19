import React from 'react';
import './MicrofilmScanners.css';
import { Link, useParams, useNavigate } from 'react-router-dom';
import ProductInfo from '../components/ProductInfo';

const microfilmProducts = [
  { name: 'ScanPro 2500', slug: 'scanpro-2500', image: '/images/ScanPro-2500-Scanner.png', type: 'ScanPro Series', details: {} },
  { name: 'ScanPro 2500 All-In-One', image: '/images/ScanPro--2500-Scanner.png', type: 'ScanPro Series' },
  { name: 'ScanPro 3500', image: '/images/ScanPro-3500-Scanner.png', type: 'ScanPro Series' },
  { name: 'ScanPro 3500 All-In-One', image: '/images/ScanPro--3500-Scanner.png', type: 'ScanPro Series' },
  { name: 'ScanPro i9500 All-In-One', image: '/images/ScanPro-i9500-Scanner.png', type: 'ScanPro Series' },
];

export { microfilmProducts };

const MicrofilmScanners = () => {
  const { productSlug } = useParams();
  const navigate = useNavigate();

  if (productSlug) {
    const product = microfilmProducts.find(p => p.slug === productSlug);
    if (!product) {
      return <div style={{ padding: 40 }}><h2>Product Not Found</h2><button onClick={() => navigate(-1)}>Go Back</button></div>;
    }
    return <ProductInfo product={product} />;
  }

  return (
    <div className="product-page-container">
      <aside className="sidebar">
        <h2>Product Categories</h2>
        <ul>
          <li>Avision Scanners</li>
          <li>Brother Scanners</li>
          <li>Canon Scanners</li>
          <li>Document Management System</li>
          <li>Fujitsu-RICOH Scanners</li>
          <li>Kodak Scanners</li>
          <li className="active">Microfilm Scanners</li>
          <li>Scanning Software</li>
          <li>Servers</li>
        </ul>
      </aside>
      <main className="product-main">
        <h1>Microfilm Scanners</h1>
        <div className="product-grid">
          {microfilmProducts.map((prod, idx) => (
            <div className="product-card" key={idx} style={{ position: 'relative' }}>
              <img src={prod.image} alt={prod.name} className="product-image" />
              <div className="product-info">
                <h3>{prod.name}</h3>
                <p>{prod.type}</p>
                <Link to={`/products/microfilm-scanners/${prod.slug}`} className="view-item-btn">View Item</Link>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default MicrofilmScanners; 