import React from 'react';
import './MicrofilmScanners.css';
import { Link, useParams, useNavigate } from 'react-router-dom';
import ProductInfo from '../components/ProductInfo';
import ProductSidebar from '../components/ProductSidebar';

const microfilmProducts = [
  {
    name: 'ScanPro 2500',
    slug: 'scanpro-2500',
    image: `${import.meta.env.BASE_URL}images/ScanPro-2500-Scanner.png`,
    type: 'ScanPro Series',
    overview: 'The ScanPro 2500 is a versatile microfilm scanner that works with all types of film. It features FOCUS-Lock™ for consistent image focus, 5x-32x optical zoom, and easy one-click scanning. Upgradeable to the 3500 model for more advanced features.',
    specs: [
      { label: 'A4 Pages Per Min', value: 'N/A' },
      { label: 'Max Paper Size', value: 'N/A' },
      { label: 'ADF Capacity', value: 'N/A' },
      { label: 'Duplex Scanning', value: 'N/A' },
      { label: 'Dimensions / Weight', value: '19cm x 32cm x 42 cm (H x W x L)' },
      { label: 'Interface', value: 'USB 3.1' },
      { label: 'PC Compatibility', value: 'Win 7 to Win 10 (32/64 bit), Enterprise, Professional, Home' },
      { label: 'PC Drivers / Software', value: 'N/A' },
      { label: 'Mac Drivers / Software', value: 'N/A' },
      { label: 'Standard Warranty', value: '3-year factory warranty (includes carriers)' }
    ]
  },
  {
    name: 'ScanPro 2500 All-In-One',
    slug: 'scanpro-2500-all-in-one',
    image: `${import.meta.env.BASE_URL}images/ScanPro--2500-Scanner.png`,
    type: 'ScanPro Series',
    overview: 'The ScanPro 2500 All-In-One is a high-speed desktop scanner for fiche and roll film, supporting all film types. With AUTO-Scan™ Pro software, it can scan at 100 images per minute. Ships with AUTO-Carrier™ and roll film carrier for full All-In-One functionality.',
    specs: [
      { label: 'A4 Pages Per Min', value: 'N/A' },
      { label: 'Max Paper Size', value: 'N/A' },
      { label: 'ADF Capacity', value: 'N/A' },
      { label: 'Duplex Scanning', value: 'N/A' },
      { label: 'Dimensions / Weight', value: '19cm x 42cm x 42 cm (H x W x L)' },
      { label: 'Interface', value: 'USB 3.1' },
      { label: 'PC Compatibility', value: 'Win 7 to Win 10 (32/64 bit), Enterprise, Professional, Home' },
      { label: 'PC Drivers / Software', value: 'N/A' },
      { label: 'Mac Drivers / Software', value: 'N/A' },
      { label: 'Standard Warranty', value: '3-year factory warranty (includes carriers)' }
    ]
  },
  {
    name: 'ScanPro 3500',
    slug: 'scanpro-3500',
    image: `${import.meta.env.BASE_URL}images/ScanPro-3500-Scanner.png`,
    type: 'ScanPro Series',
    overview: 'The ScanPro 3500 is a high-speed desktop scanner for fiche and roll film, supporting all film types. With AUTO-Scan™ Pro software, it can scan at 100 images per minute. Upgradeable to All-In-One functionality.',
    specs: [
      { label: 'A4 Pages Per Min', value: 'N/A' },
      { label: 'Max Paper Size', value: 'N/A' },
      { label: 'ADF Capacity', value: 'N/A' },
      { label: 'Duplex Scanning', value: 'N/A' },
      { label: 'Dimensions / Weight', value: 'N/A' },
      { label: 'Interface', value: 'USB 3.1' },
      { label: 'PC Compatibility', value: 'Win 7 to Win 10 (32/64 bit), Enterprise, Professional, Home' },
      { label: 'PC Drivers / Software', value: 'N/A' },
      { label: 'Mac Drivers / Software', value: 'N/A' },
      { label: 'Standard Warranty', value: '3-year factory warranty (includes carriers)' }
    ]
  },
  {
    name: 'ScanPro 3500 All-In-One',
    slug: 'scanpro-3500-all-in-one',
    image: `${import.meta.env.BASE_URL}images/ScanPro--3500-Scanner.png`,
    type: 'ScanPro Series',
    overview: 'The ScanPro 3500 All-In-One is a high-speed desktop scanner for fiche and roll film, supporting all film types. Ships with AUTO-Carrier™ and roll film carrier for full All-In-One functionality. Scans at 100 images per minute with AUTO-Scan™ Pro software.',
    specs: [
      { label: 'A4 Pages Per Min', value: 'N/A' },
      { label: 'Max Paper Size', value: 'N/A' },
      { label: 'ADF Capacity', value: 'N/A' },
      { label: 'Duplex Scanning', value: 'N/A' },
      { label: 'Dimensions / Weight', value: '19cm x 42cm x 42 cm (H x W x L)' },
      { label: 'Interface', value: 'USB 3.1' },
      { label: 'PC Compatibility', value: 'Win 7 to Win 10 (32/64 bit), Enterprise, Professional, Home' },
      { label: 'PC Drivers / Software', value: 'N/A' },
      { label: 'Mac Drivers / Software', value: 'N/A' },
      { label: 'Standard Warranty', value: '3-year factory warranty (includes carriers)' }
    ]
  },
  {
    name: 'ScanPro i9500 All-In-One',
    slug: 'scanpro-i9500-all-in-one',
    image: `${import.meta.env.BASE_URL}images/ScanPro-i9500-Scanner.png`,
    type: 'ScanPro Series',
    overview: 'The ScanPro i9500 All-In-One features image-mark (blip) sensing, fully integrated OCR, and 5x-105x optical magnification. It can scan at 20 images/minute (100 with AUTO-Scan Pro) and uses a 26MP pixel-shifting camera for the clearest images in the microfilm industry.',
    specs: [
      { label: 'A4 Pages Per Min', value: 'N/A' },
      { label: 'Max Paper Size', value: 'N/A' },
      { label: 'ADF Capacity', value: 'N/A' },
      { label: 'Duplex Scanning', value: 'N/A' },
      { label: 'Dimensions / Weight', value: '19cm x 42cm x 42 cm (H x W x L)' },
      { label: 'Interface', value: 'USB 3.1' },
      { label: 'PC Compatibility', value: 'Win 7 to Win 10 (32/64 bit), Enterprise, Professional, Home' },
      { label: 'PC Drivers / Software', value: 'N/A' },
      { label: 'Mac Drivers / Software', value: 'N/A' },
      { label: 'Standard Warranty', value: '3-year factory warranty (includes carriers)' }
    ]
  },
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
      <ProductSidebar />
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