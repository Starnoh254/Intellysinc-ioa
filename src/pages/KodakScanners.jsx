import React from 'react';
import './KodakScanners.css';
import { Link, useParams, useNavigate } from 'react-router-dom';
import ProductInfo from '../components/ProductInfo';

const kodakProducts = [
  // Scanmate Series
  {
    name: 'ScanMate i940',
    slug: 'scanmate-i940',
    image: `${import.meta.env.BASE_URL}images/Kodak_1_200.jpg`,
    type: 'Scanmate Series',
    details: {
      // Example specs, fill in for each product as per Lonestar
      speed: '',
      adfCapacity: '',
      warranty: '1 year',
      // ...other specs
    }
  },
  // S 2000 Series
  {
    name: 'Alaris s2040',
    slug: 'alaris-s2040',
    image: `${import.meta.env.BASE_URL}images/Kodak_4_131.jpg`,
    type: 'S 2000 Series',
    details: {
      // ...specs
    }
  },
  // S 2000 Series
  { name: 'Alaris s2050', image: `${import.meta.env.BASE_URL}images/Kodak_5_128.jpg`, type: 'S 2000 Series' },
  { name: 'Alaris s2060w', image: `${import.meta.env.BASE_URL}images/Kodak_6_123.jpg`, type: 'S 2000 Series' },
  { name: 'Alaris S2070', image: `${import.meta.env.BASE_URL}images/Kodak_7_119.jpg`, type: 'S 2000 Series' },
  { name: 'Alaris-S2080W', image: `${import.meta.env.BASE_URL}images/Kodak_15_226.jpg`, type: 'S 2000 Series' },
  { name: 'Alaris S2085F', image: `${import.meta.env.BASE_URL}images/Kodak_16_222.jpg`, type: 'S 2000 Series' },
  // E 1000 Series
  { name: 'Alaris E1025', image: `${import.meta.env.BASE_URL}images/Kodak_17_217.jpg`, type: 'E 1000 Series' },
  { name: 'Alaris E1035', image: `${import.meta.env.BASE_URL}images/Kodak_18_211.jpg`, type: 'E 1000 Series' },
  { name: 'e1030', image: `${import.meta.env.BASE_URL}images/Kodak_19_205.jpg`, type: 'E 1000 Series' },
  { name: 'e1040', image: `${import.meta.env.BASE_URL}images/Kodak_20_195.jpg`, type: 'E 1000 Series' },
  // i 3000 Series
  { name: 'i3500', image: `${import.meta.env.BASE_URL}images/Kodak_26_175.jpg`, type: 'i 3000 Series' },
  // i 4000 Series
  { name: 'i4250', image: `${import.meta.env.BASE_URL}images/Kodak_27_170.jpg`, type: 'i 4000 Series' },
  { name: 'i4850', image: `${import.meta.env.BASE_URL}images/ScanStation-730EX.jpg`, type: 'i 4000 Series' },
  { name: 'i4650', image: `${import.meta.env.BASE_URL}images/Kodak_30_161.jpg`, type: 'i 4000 Series' },
  { name: 'i4600', image: `${import.meta.env.BASE_URL}images/Kodak_31_157.jpg`, type: 'i 4000 Series' },
  // i 5000 Series
  { name: 'i5250', image: `${import.meta.env.BASE_URL}images/Kodak_32_153.jpg`, type: 'i 5000 Series' },
  { name: 'i5650', image: `${import.meta.env.BASE_URL}images/Kodak_33_149.jpg`, type: 'i 5000 Series' },
  { name: 'i5850', image: `${import.meta.env.BASE_URL}images/Kodak_34_145.jpg`, type: 'i 5000 Series' },
  { name: 'i5600', image: `${import.meta.env.BASE_URL}images/Kodak_35_141.jpg`, type: 'i 5000 Series' },
  // Photo Scanner
  { name: 'PS50', image: `${import.meta.env.BASE_URL}images/Kodak_36_137.jpg`, type: 'Photo Scanner' },
  { name: 'PS80', image: `${import.meta.env.BASE_URL}images/s3100f-4.jpg`, type: 'Photo Scanner' },
  // Network Series
  { name: 'Alaris S2060W', image: `${import.meta.env.BASE_URL}images/i4600-1.jpg`, type: 'Network Series' },
  { name: 'Alaris S2080W', image: `${import.meta.env.BASE_URL}images/02_34378_i5650 office desktop.jpg`, type: 'Network Series' },
  { name: 'ScanStation 710', image: `${import.meta.env.BASE_URL}images/KODAKS3120 Max and S3140 Max_sm.jpg`, type: 'Network Series' },
  { name: 'ScanStation 730EX', image: `${import.meta.env.BASE_URL}images/KODAKS3120 Max and S3140 Max_sm (1).jpg`, type: 'Network Series' },
  // Other Kodak
  { name: 'Kodak Sceye', image: `${import.meta.env.BASE_URL}images/e1030_1.jpg`, type: 'Other Kodak' },
  // S 3000 Series
  { name: 'Alaris S3061', image: `${import.meta.env.BASE_URL}images/product-1.jpg`, type: 'S 3000 Series' },
  { name: 'Alaris S3060F', image: '', type: 'S 3000 Series' },
  { name: 'Alaris S3101', image: '', type: 'S 3000 Series' },
  { name: 'Alaris S3100F', image: '', type: 'S 3000 Series' },
  { name: 'Alaris S3120', image: '', type: 'S 3000 Series' },
  { name: 'S3100f', image: '', type: 'S 3000 Series' },
  { name: 's3120 Max', image: '', type: 'S 3000 Series' },
  { name: 's3140 Max', image: '', type: 'S 3000 Series' },
];

export { kodakProducts };

const KodakScanners = () => {
  const { productSlug } = useParams();
  const navigate = useNavigate();

  if (productSlug) {
    const product = kodakProducts.find(p => p.slug === productSlug);
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
          <li><Link to="/avision-scanners">Avision Scanners</Link></li>
          <li><Link to="/brother-scanners">Brother Scanners</Link></li>
          <li><Link to="/canon-scanners">Canon Scanners</Link></li>
          <li><Link to="/fujitsu-ricoh-scanners">Fujitsu-RICOH Scanners</Link></li>
          <li className="active">Kodak Scanners</li>
          <li><Link to="/microfilm-scanners">Microfilm Scanners</Link></li>
          <li><Link to="/scanning-software">Scanning Software</Link></li>
          <li><Link to="/servers">Servers</Link></li>
        </ul>
      </aside>
      <main className="product-main">
        <h1>Kodak Scanners</h1>
        <div className="product-grid">
          {kodakProducts.map((prod, idx) => (
            <div className="product-card" key={idx} style={{ position: 'relative' }}>
              <img src={prod.image} alt={prod.name} className="product-image" />
              <div className="product-info">
                <h3>{prod.name}</h3>
                <p>{prod.type}</p>
                <Link to={`/products/kodak-scanners/${prod.slug}`} className="view-item-btn">View Item</Link>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default KodakScanners; 