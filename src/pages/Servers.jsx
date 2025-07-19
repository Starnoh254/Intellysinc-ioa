import React from 'react';
import './Servers.css';
import { Link, useParams, useNavigate } from 'react-router-dom';
import ProductInfo from '../components/ProductInfo';

const serverProducts = [
  // HP Rack Servers
  { name: 'ProLiant DL180 Gen10', slug: 'proliant-dl180-gen10', image: `${import.meta.env.BASE_URL}images/ID-26NEW_S26-2.jpg`, type: 'HP Rack Server', details: {} },
  { name: 'ProLiant DL360 Gen11', image: `${import.meta.env.BASE_URL}images/ID-27NEW_S27-2.jpg`, type: 'HP Rack Server' },
  { name: 'ProLiant DL365 Gen10 Plus', image: `${import.meta.env.BASE_URL}images/ID-28NEW_S28-2.jpg`, type: 'HP Rack Server' },
  { name: 'ProLiant DL365 Gen11', image: `${import.meta.env.BASE_URL}images/ID-29NEW_S29-1 NEW.jpg`, type: 'HP Rack Server' },
  { name: 'ProLiant DL380 Gen11', image: `${import.meta.env.BASE_URL}images/ID-30NEW_S30-1N.jpg`, type: 'HP Rack Server' },
  { name: 'ProLiant DL385 Gen10 Plus v2', image: `${import.meta.env.BASE_URL}images/ID-31NEW_S31-1-removebg-preview.jpg`, type: 'HP Rack Server' },
  { name: 'ProLiant DL385 Gen11', image: `${import.meta.env.BASE_URL}images/ID-32NEW_s32-1.jpg`, type: 'HP Rack Server' },
  { name: 'ProLiant DL560 Gen10', image: `${import.meta.env.BASE_URL}images/ID-33NEW_33-2.jpg`, type: 'HP Rack Server' },
  { name: 'ProLiant DL580 G10', image: `${import.meta.env.BASE_URL}images/ID-34NEW_S34-1.jpg`, type: 'HP Rack Server' },
  { name: 'ProLiant DL360 Plus', image: `${import.meta.env.BASE_URL}images/ID-35NEW_35-2.jpg`, type: 'HP Rack Server' },
  { name: 'DL380 Gen10 Plus', image: `${import.meta.env.BASE_URL}images/ID-36NEW_S36-2N.jpg`, type: 'HP Rack Server' },
  { name: 'ProLiant DL560 Gen9', image: `${import.meta.env.BASE_URL}images/ID-37NEW_S37-2.jpg`, type: 'HP Rack Server' },
  { name: 'ProLiant DL160 Gen9', image: `${import.meta.env.BASE_URL}images/ID-38NEW_S38-1N.jpg`, type: 'HP Rack Server' },
  { name: 'ProLiant DL180 Gen9', image: `${import.meta.env.BASE_URL}images/ID-39NEW_39-2.jpg`, type: 'HP Rack Server' },
  { name: 'ProLiant DL60 Gen9', image: `${import.meta.env.BASE_URL}images/ID-40NEW_40-1.jpg`, type: 'HP Rack Server' },
  // HP Blade Servers
  { name: 'Apollo R2600 Gen10 Blade', image: `${import.meta.env.BASE_URL}images/ID-41NEW_41-2.jpg`, type: 'HP Blade Server' },
  // HP Tower Servers
  { name: 'ProLiant ML350 Gen11', image: `${import.meta.env.BASE_URL}images/ID-42NEW_42-1N.jpg`, type: 'HP Tower Server' },
  { name: 'ProLiant ML150 Gen9', image: `${import.meta.env.BASE_URL}images/ID-43NEW_43-2N.jpg`, type: 'HP Tower Server' },
  { name: 'ProLiant ML350 Gen9', image: `${import.meta.env.BASE_URL}images/ID-44NEW_44.jpg`, type: 'HP Tower Server' },
  { name: 'ProLiant ML30 Gen10', image: `${import.meta.env.BASE_URL}images/ID-45NEW_45-1new.jpg`, type: 'HP Tower Server' },
  // Dell Rack Servers
  { name: 'PowerEdge R620 (10SFF)', image: `${import.meta.env.BASE_URL}images/ID-46NEW_46-3.jpg`, type: 'Dell Rack Server' },
  { name: 'PowerEdge R830', image: `${import.meta.env.BASE_URL}images/ID-47NEW_47-1n.jpg`, type: 'Dell Rack Server' },
  { name: 'PowerEdge R720', image: `${import.meta.env.BASE_URL}images/ID-48NEW_48-1n.jpg`, type: 'Dell Rack Server' },
  { name: 'PowerEdge R710 With 128GB RAM', image: `${import.meta.env.BASE_URL}images/ID-49NEW_49-2.jpg`, type: 'Dell Rack Server' },
  { name: 'PowerEdge R820 (8SFF)', image: `${import.meta.env.BASE_URL}images/ID-50NEW_50-2.jpg`, type: 'Dell Rack Server' },
  { name: 'PowerEdge R720 (8SFF)', image: `${import.meta.env.BASE_URL}images/ID-26NEW_S26-2 (1).jpg`, type: 'Dell Rack Server' },
  { name: 'PowerEdge R210', image: `${import.meta.env.BASE_URL}images/ID-27NEW_S27-2 (1).jpg`, type: 'Dell Rack Server' },
  { name: 'PowerEdge R230', image: `${import.meta.env.BASE_URL}images/ID-28NEW_S28-2 (1).jpg`, type: 'Dell Rack Server' },
  { name: 'PowerEdge R330', image: `${import.meta.env.BASE_URL}images/ID-29NEW_S29-1 NEW (1).jpg`, type: 'Dell Rack Server' },
  { name: 'PowerEdge T110 II', image: `${import.meta.env.BASE_URL}images/ID-30NEW_S30-1N (1).jpg`, type: 'Dell Rack Server' },
  { name: 'PowerEdge R210 II', image: `${import.meta.env.BASE_URL}images/ID-31NEW_S31-1-removebg-preview (1).jpg`, type: 'Dell Rack Server' },
  { name: 'PowerEdge R220', image: `${import.meta.env.BASE_URL}images/ID-32NEW_s32-1 (1).jpg`, type: 'Dell Rack Server' },
  { name: 'PowerEdge R320', image: `${import.meta.env.BASE_URL}images/ID-33NEW_33-2 (1).jpg`, type: 'Dell Rack Server' },
  { name: 'PowerEdge R410', image: `${import.meta.env.BASE_URL}images/ID-34NEW_S34-1 (1).jpg`, type: 'Dell Rack Server' },
  { name: 'PowerEdge R530', image: `${import.meta.env.BASE_URL}images/ID-35NEW_35-2 (1).jpg`, type: 'Dell Rack Server' },
  { name: 'PowerEdge R910', image: `${import.meta.env.BASE_URL}images/ID-36NEW_S36-2N (1).jpg`, type: 'Dell Rack Server' },
  { name: 'R930', image: `${import.meta.env.BASE_URL}images/ID-37NEW_S37-2 (1).jpg`, type: 'Dell Rack Server' },
  { name: 'PowerEdge 2950', image: `${import.meta.env.BASE_URL}images/ID-38NEW_S38-1N (1).jpg`, type: 'Dell Rack Server' },
  { name: 'PowerEdge 1950', image: `${import.meta.env.BASE_URL}images/ID-39NEW_39-2 (1).jpg`, type: 'Dell Rack Server' },
  { name: 'PowerEdge R730xd', image: `${import.meta.env.BASE_URL}images/ID-40NEW_40-1 (1).jpg`, type: 'Dell Rack Server' },
  { name: 'PowerEdge R620', image: `${import.meta.env.BASE_URL}images/ID-41NEW_41-2 (1).jpg`, type: 'Dell Rack Server' },
  { name: 'PowerEdge R810', image: `${import.meta.env.BASE_URL}images/ID-42NEW_42-1N (1).jpg`, type: 'Dell Rack Server' },
  // Dell Blade Servers
  { name: 'M620 Blade', image: `${import.meta.env.BASE_URL}images/ID-43NEW_43-2N (1).jpg`, type: 'Dell Blade Server' },
  { name: 'MX7000 Enclosure', image: `${import.meta.env.BASE_URL}images/ID-44NEW_44 (1).jpg`, type: 'Dell Blade Server' },
  { name: 'PowerEdge M1000e Blade Enclosure', image: `${import.meta.env.BASE_URL}images/ID-45NEW_45-1new (1).jpg`, type: 'Dell Blade Server' },
  { name: 'M610 Blade', image: `${import.meta.env.BASE_URL}images/ID-46NEW_46-3 (1).jpg`, type: 'Dell Blade Server' },
  { name: 'M630 Blade', image: `${import.meta.env.BASE_URL}images/ID-47NEW_47-1n (1).jpg`, type: 'Dell Blade Server' },
  // Dell Tower Servers
  { name: 'PowerEdge T310', image: `${import.meta.env.BASE_URL}images/ID-48NEW_48-1n (1).jpg`, type: 'Dell Tower Server' },
  { name: 'PowerEdge T320', image: `${import.meta.env.BASE_URL}images/ID-49NEW_49-2 (1).jpg`, type: 'Dell Tower Server' },
  { name: 'PowerEdge T330', image: `${import.meta.env.BASE_URL}images/ID-50NEW_50-2 (1).jpg`, type: 'Dell Tower Server' },
  { name: 'PowerEdge T430', image: `${import.meta.env.BASE_URL}images/ID-51NEW_51-2N.jpg`, type: 'Dell Tower Server' },
  { name: 'PowerEdge T610', image: `${import.meta.env.BASE_URL}images/ID-52NEW_52-2N.jpg`, type: 'Dell Tower Server' },
  { name: 'PowerEdge T110', image: `${import.meta.env.BASE_URL}images/ID-53NEW_53-2N.jpg`, type: 'Dell Tower Server' },
  { name: 'PowerEdge T130', image: `${import.meta.env.BASE_URL}images/ID-54NEW_54-2.jpg`, type: 'Dell Tower Server' },
  { name: 'PowerEdge T20 Mini', image: `${import.meta.env.BASE_URL}images/ID-55NEW_55-2N.jpg`, type: 'Dell Tower Server' },
  { name: 'PowerEdge T2900', image: `${import.meta.env.BASE_URL}images/ID-56NEW_56-2N.jpg`, type: 'Dell Tower Server' },
  { name: 'PowerEdge T410', image: `${import.meta.env.BASE_URL}images/ID-57NEW_57-3N.jpg`, type: 'Dell Tower Server' },
  { name: 'PowerEdge T630', image: `${import.meta.env.BASE_URL}images/ID-58NEW_58-2.jpg`, type: 'Dell Tower Server' },
  { name: 'PowerEdge T420', image: `${import.meta.env.BASE_URL}images/ID-59NEW_59-2.jpg`, type: 'Dell Tower Server' },
  { name: 'T30 Mini', image: `${import.meta.env.BASE_URL}images/ID-60NEW_60-3.jpg`, type: 'Dell Tower Server' },
];

export { serverProducts };

const Servers = () => {
  const { productSlug } = useParams();
  const navigate = useNavigate();

  if (productSlug) {
    const product = serverProducts.find(p => p.slug === productSlug);
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
          <li>Microfilm Scanners</li>
          <li>Scanning Software</li>
          <li className="active">Servers</li>
        </ul>
      </aside>
      <main className="product-main">
        <h1>Servers</h1>
        <div className="product-grid">
          {serverProducts.map((prod, idx) => (
            <div className="product-card" key={idx} style={{ position: 'relative' }}>
              <img src={prod.image} alt={prod.name} className="product-image" />
              <div className="product-info">
                <h3>{prod.name}</h3>
                <p>{prod.type}</p>
                <Link to={`/products/servers/${prod.slug}`} className="view-item-btn">View Item</Link>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Servers; 