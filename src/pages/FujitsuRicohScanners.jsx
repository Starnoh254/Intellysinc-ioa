import React from 'react';
import './FujitsuRicohScanners.css';
import { Link, useParams, useNavigate } from 'react-router-dom';
import ProductInfo from '../components/ProductInfo';

const fujitsuProducts = [
  // ScanSnap Series
  { name: 'ScanSnap S1100i', slug: 'scansnap-s1100i', image: '/images/Fujitsu_66_408.jpg', type: 'ScanSnap Series', details: {} },
  { name: 'ScanSnap iX100', image: '/images/Fujitsu_69_393.jpg', type: 'ScanSnap Series' },
  { name: 'ScanSnap S1300i', image: '/images/Fujitsu_70_387.jpg', type: 'ScanSnap Series' },
  { name: 'ScanSnap SV600', image: '/images/Fujitsu_73_371.jpg', type: 'ScanSnap Series' },
  { name: 'ScanSnap IX1400', image: '/images/fi-65f.jpg', type: 'ScanSnap Series' },
  { name: 'ScanSnap IX1500', image: '/images/Fujitsu_75_364.jpg', type: 'ScanSnap Series' },
  { name: 'ScanSnap iX1600', image: '/images/Fujitsu_79_343.jpg', type: 'ScanSnap Series' },
  // Flatbed Series
  { name: 'fi-7240', image: '/images/Fujitsu_80_338.jpg', type: 'Flatbed Series' },
  { name: 'fi-7260', image: '/images/Fujitsu_81_335.jpg', type: 'Flatbed Series' },
  { name: 'fi-7280', image: '/images/Fujitsu_82_332.jpg', type: 'Flatbed Series' },
  { name: 'FI-7700', image: '/images/Fujitsu_88_297.jpg', type: 'Flatbed Series' },
  { name: 'fi-65F', image: '/images/Fujitsu_89_293.jpg', type: 'Flatbed Series' },
  { name: 'SP-1425', image: '/images/Fujitsu_90_286.jpg', type: 'Flatbed Series' },
  { name: 'SP-1130', image: '/images/Fujitsu_94_278.jpg', type: 'Flatbed Series' },
  { name: 'SP-1125', image: '/images/Fujitsu_95_273.jpg', type: 'Flatbed Series' },
  { name: 'SP-1120', image: '/images/Fujitsu_96_268.jpg', type: 'Flatbed Series' },
  { name: 'FI-800R', image: '/images/Fujitsu_97_265.jpg', type: 'Flatbed Series' },
  { name: 'FI-7700S', image: '/images/Fujitsu_98_262.jpg', type: 'Flatbed Series' },
  { name: 'FI-7800', image: '/images/Fujitsu_101_428.jpg', type: 'Flatbed Series' },
  { name: 'FI-7900', image: '/images/Fujitsu_103_420.jpg', type: 'Flatbed Series' },
  { name: 'SP-1120N', image: '/images/6770-2.jpg', type: 'Flatbed Series' },
  { name: 'SP-1125N', image: '/images/Fujitsu-fi-8190 (2).jpg', type: 'Flatbed Series' },
  { name: 'SP-1130N', image: '/images/Fujitsu-fi-8290 (2).jpg', type: 'Flatbed Series' },
  // Desktop Series
  { name: 'Fi-7030', image: '/images/Fujitsu-fi-8170 (2).jpg', type: 'Desktop Series' },
  { name: 'fi-7140', image: '/images/Fujitsu-fi-8270 (2).jpg', type: 'Desktop Series' },
  { name: 'fi-7160', image: '/images/fujitsu-fi-8180 (2).jpg', type: 'Desktop Series' },
  { name: 'Fujitsu fi-8190', image: '/images/Fujitsu-fi-8250 (2).jpg', type: 'Desktop Series' },
  { name: 'Fujitsu fi-8290', image: '/images/img_fi-8040_overview02.jpg', type: 'Desktop Series' },
  { name: 'Fujitsu fi-8170', image: '', type: 'Desktop Series' },
  { name: 'Fujitsu fi-8270', image: '', type: 'Desktop Series' },
  { name: 'Fujitsu fi-8150', image: '', type: 'Desktop Series' },
  { name: 'Fujitsu fi-8250', image: '', type: 'Desktop Series' },
  { name: 'FI-8040', image: '', type: 'Desktop Series' },
  // Departmental Series
  { name: 'fi-7180', image: '', type: 'Departmental Series' },
  { name: 'fi-7460', image: '', type: 'Departmental Series' },
  { name: 'Fi-7480', image: '', type: 'Departmental Series' },
  { name: 'FI-7600', image: '', type: 'Departmental Series' },
  { name: 'fi-6670', image: '', type: 'Departmental Series' },
  // Network Series
  { name: 'N7100', image: '', type: 'Network Series' },
  { name: 'FI-7300', image: '', type: 'Network Series' },
];

export { fujitsuProducts };

const FujitsuRicohScanners = () => {
  const { productSlug } = useParams();
  const navigate = useNavigate();

  if (productSlug) {
    const product = fujitsuProducts.find(p => p.slug === productSlug);
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
          <li className="active">Fujitsu-RICOH Scanners</li>
          <li>Kodak Scanners</li>
          <li>Microfilm Scanners</li>
          <li>Scanning Software</li>
          <li>Servers</li>
        </ul>
      </aside>
      <main className="product-main">
        <h1>Fujitsu-RICOH Scanners</h1>
        <div className="product-grid">
          {fujitsuProducts.map((prod, idx) => (
            <div className="product-card" key={idx} style={{ position: 'relative' }}>
              <img src={prod.image} alt={prod.name} className="product-image" />
              <div className="product-info">
                <h3>{prod.name}</h3>
                <p>{prod.type}</p>
                <Link to={`/products/fujitsu-ricoh-scanners/${prod.slug}`} className="view-item-btn">View Item</Link>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default FujitsuRicohScanners; 