import React from 'react';
import './BrotherScanners.css';
import { Link, useParams, useNavigate } from 'react-router-dom';
import ProductInfo from '../components/ProductInfo';

const brotherProducts = [
  {
    name: 'Brother DS-740D',
    slug: 'brother-ds-740d',
    image: `${import.meta.env.BASE_URL}images/DS_740D (5).webp`,
    type: 'Brother Scanner',
    overview: 'The Brother DS-740D is a compact, portable duplex scanner ideal for mobile professionals and small offices. It offers fast double-sided scanning and USB-powered convenience.',
    specs: [
      { label: 'Scan Speed', value: '15 ppm / 30 ipm (A4, 200 dpi, B/W & Color)' },
      { label: 'ADF Capacity', value: 'Single sheet' },
      { label: 'Max Paper Size', value: '215.9 x 1828.8 mm' },
      { label: 'Connectivity', value: 'USB 3.0' },
      { label: 'Daily Duty Cycle', value: 'Up to 100 sheets' },
      { label: 'OS Support', value: 'Windows, macOS' },
      { label: 'Dimensions', value: '301 x 63 x 45 mm' },
      { label: 'Weight', value: '0.65 kg' },
      { label: 'Bundled Software', value: 'Brother iPrint&Scan, Button Manager' },
      { label: 'Warranty', value: '1 Year' }
    ]
  },
  {
    name: 'Brother DS-940DW',
    slug: 'brother-ds-940dw',
    image: `${import.meta.env.BASE_URL}images/DS940DW (2).webp`,
    type: 'Brother Scanner',
    overview: 'The DS-940DW is a wireless, portable duplex scanner with a built-in battery and Wi-Fi, perfect for scanning on the go. It supports double-sided scanning and microSD storage.',
    specs: [
      { label: 'Scan Speed', value: '15 ppm / 30 ipm (A4, 200 dpi, B/W & Color)' },
      { label: 'ADF Capacity', value: 'Single sheet' },
      { label: 'Max Paper Size', value: '215.9 x 1828.8 mm' },
      { label: 'Connectivity', value: 'USB 3.0, Wi-Fi' },
      { label: 'Battery', value: 'Built-in rechargeable' },
      { label: 'Daily Duty Cycle', value: 'Up to 100 sheets' },
      { label: 'OS Support', value: 'Windows, macOS, Mobile' },
      { label: 'Dimensions', value: '319 x 63 x 45 mm' },
      { label: 'Weight', value: '0.70 kg' },
      { label: 'Bundled Software', value: 'Brother iPrint&Scan, Button Manager' },
      { label: 'Warranty', value: '1 Year' }
    ]
  },
  {
    name: 'Brother ADS-1200',
    slug: 'brother-ads-1200',
    image: `${import.meta.env.BASE_URL}images/ADS1200 (1).webp`,
    type: 'Brother Scanner',
    overview: 'The Brother ADS-1200 is a compact, USB-powered desktop scanner with fast duplex scanning and a 20-sheet ADF, ideal for home offices and small businesses.',
    specs: [
      { label: 'Scan Speed', value: '25 ppm / 50 ipm (A4, 200 dpi, B/W & Color)' },
      { label: 'ADF Capacity', value: '20 sheets' },
      { label: 'Max Paper Size', value: '215.9 x 863.6 mm' },
      { label: 'Connectivity', value: 'USB 3.0' },
      { label: 'Daily Duty Cycle', value: 'Up to 1,000 sheets' },
      { label: 'OS Support', value: 'Windows, macOS' },
      { label: 'Dimensions', value: '300 x 103 x 83 mm' },
      { label: 'Weight', value: '1.36 kg' },
      { label: 'Bundled Software', value: 'Brother iPrint&Scan, Button Manager' },
      { label: 'Warranty', value: '1 Year' }
    ]
  },
  {
    name: 'Brother ADS-1700W',
    slug: 'brother-ads-1700w',
    image: `${import.meta.env.BASE_URL}images/ADS1700W (1).webp`,
    type: 'Brother Scanner',
    overview: 'The ADS-1700W is a wireless, compact desktop scanner with a color touchscreen, fast duplex scanning, and a 20-sheet ADF, perfect for small offices.',
    specs: [
      { label: 'Scan Speed', value: '25 ppm / 50 ipm (A4, 200 dpi, B/W & Color)' },
      { label: 'ADF Capacity', value: '20 sheets' },
      { label: 'Max Paper Size', value: '215.9 x 863.6 mm' },
      { label: 'Connectivity', value: 'Wi-Fi, USB 3.0' },
      { label: 'Daily Duty Cycle', value: 'Up to 1,000 sheets' },
      { label: 'OS Support', value: 'Windows, macOS' },
      { label: 'Dimensions', value: '300 x 103 x 83 mm' },
      { label: 'Weight', value: '1.41 kg' },
      { label: 'Bundled Software', value: 'Brother iPrint&Scan, Button Manager' },
      { label: 'Warranty', value: '1 Year' }
    ]
  },
  {
    name: 'Brother ADS-2200',
    slug: 'brother-ads-2200',
    image: `${import.meta.env.BASE_URL}images/ADS2200 (2).webp`,
    type: 'Brother Scanner',
    overview: 'The ADS-2200 is a high-speed desktop scanner with a 50-sheet ADF, duplex scanning, and versatile media handling, ideal for busy workgroups.',
    specs: [
      { label: 'Scan Speed', value: '35 ppm / 70 ipm (A4, 200 dpi, B/W & Color)' },
      { label: 'ADF Capacity', value: '50 sheets' },
      { label: 'Max Paper Size', value: '215.9 x 355.6 mm' },
      { label: 'Connectivity', value: 'USB 2.0' },
      { label: 'Daily Duty Cycle', value: 'Up to 3,000 sheets' },
      { label: 'OS Support', value: 'Windows, macOS' },
      { label: 'Dimensions', value: '299 x 145 x 141 mm' },
      { label: 'Weight', value: '2.8 kg' },
      { label: 'Bundled Software', value: 'Brother iPrint&Scan, Button Manager' },
      { label: 'Warranty', value: '1 Year' }
    ]
  },
  {
    name: 'Brother ADS-2400N',
    slug: 'brother-ads-2400n',
    image: `${import.meta.env.BASE_URL}images/ApHandler (2).jpg`,
    type: 'Brother Scanner',
    overview: 'The ADS-2400N is a network-ready desktop scanner with a 50-sheet ADF, fast duplex scanning, and robust media handling for shared office environments.',
    specs: [
      { label: 'Scan Speed', value: '30 ppm / 60 ipm (A4, 200 dpi, B/W & Color)' },
      { label: 'ADF Capacity', value: '50 sheets' },
      { label: 'Max Paper Size', value: '215.9 x 355.6 mm' },
      { label: 'Connectivity', value: 'Ethernet, USB 2.0' },
      { label: 'Daily Duty Cycle', value: 'Up to 3,000 sheets' },
      { label: 'OS Support', value: 'Windows, macOS' },
      { label: 'Dimensions', value: '306 x 258 x 250 mm' },
      { label: 'Weight', value: '4.45 kg' },
      { label: 'Bundled Software', value: 'Brother iPrint&Scan, Button Manager' },
      { label: 'Warranty', value: '1 Year' }
    ]
  },
  {
    name: 'Brother ADS-2700W',
    slug: 'brother-ads-2700w',
    image: `${import.meta.env.BASE_URL}images/ApHandler (3)s.jpg`,
    type: 'Brother Scanner',
    overview: 'The ADS-2700W is a wireless, network-ready scanner with a 50-sheet ADF, color touchscreen, and fast duplex scanning for flexible office workflows.',
    specs: [
      { label: 'Scan Speed', value: '35 ppm / 70 ipm (A4, 200 dpi, B/W & Color)' },
      { label: 'ADF Capacity', value: '50 sheets' },
      { label: 'Max Paper Size', value: '215.9 x 355.6 mm' },
      { label: 'Connectivity', value: 'Wi-Fi, Ethernet, USB 2.0' },
      { label: 'Daily Duty Cycle', value: 'Up to 3,000 sheets' },
      { label: 'OS Support', value: 'Windows, macOS' },
      { label: 'Dimensions', value: '299 x 145 x 141 mm' },
      { label: 'Weight', value: '2.8 kg' },
      { label: 'Bundled Software', value: 'Brother iPrint&Scan, Button Manager' },
      { label: 'Warranty', value: '1 Year' }
    ]
  },
  {
    name: 'Brother ADS-2800W',
    slug: 'brother-ads-2800w',
    image: `${import.meta.env.BASE_URL}images/ADS-2800W (2).webp`,
    type: 'Brother Scanner',
    overview: 'The ADS-2800W is a wireless, network-ready scanner with a 50-sheet ADF, fast duplex scanning, and advanced image processing for busy offices.',
    specs: [
      { label: 'Scan Speed', value: '40 ppm / 80 ipm (A4, 200 dpi, B/W & Color)' },
      { label: 'ADF Capacity', value: '50 sheets' },
      { label: 'Max Paper Size', value: '215.9 x 355.6 mm' },
      { label: 'Connectivity', value: 'Wi-Fi, Ethernet, USB 2.0' },
      { label: 'Daily Duty Cycle', value: 'Up to 5,000 sheets' },
      { label: 'OS Support', value: 'Windows, macOS' },
      { label: 'Dimensions', value: '306 x 258 x 250 mm' },
      { label: 'Weight', value: '4.45 kg' },
      { label: 'Bundled Software', value: 'Brother iPrint&Scan, Button Manager' },
      { label: 'Warranty', value: '1 Year' }
    ]
  },
  {
    name: 'Brother ADS-3000N',
    slug: 'brother-ads-3000n',
    image: `${import.meta.env.BASE_URL}images/ADS-3000N (2).webp`,
    type: 'Brother Scanner',
    overview: 'The ADS-3000N is a high-speed, network-ready scanner with a 50-sheet ADF, robust media handling, and advanced image processing for demanding office environments.',
    specs: [
      { label: 'Scan Speed', value: '50 ppm / 100 ipm (A4, 200 dpi, B/W & Color)' },
      { label: 'ADF Capacity', value: '50 sheets' },
      { label: 'Max Paper Size', value: '215.9 x 355.6 mm' },
      { label: 'Connectivity', value: 'Ethernet, USB 2.0' },
      { label: 'Daily Duty Cycle', value: 'Up to 5,000 sheets' },
      { label: 'OS Support', value: 'Windows, macOS' },
      { label: 'Dimensions', value: '306 x 258 x 250 mm' },
      { label: 'Weight', value: '4.45 kg' },
      { label: 'Bundled Software', value: 'Brother iPrint&Scan, Button Manager' },
      { label: 'Warranty', value: '1 Year' }
    ]
  },
  {
    name: 'Brother ADS-3600W',
    slug: 'brother-ads-3600w',
    image: `${import.meta.env.BASE_URL}images/ADS3600W (2).webp`,
    type: 'Brother Scanner',
    overview: 'The ADS-3600W is a wireless, network-ready scanner with a 50-sheet ADF, advanced image processing, and high-speed duplex scanning for demanding office environments.',
    specs: [
      { label: 'Scan Speed', value: '50 ppm / 100 ipm (A4, 200 dpi, B/W & Color)' },
      { label: 'ADF Capacity', value: '50 sheets' },
      { label: 'Max Paper Size', value: '215.9 x 355.6 mm' },
      { label: 'Connectivity', value: 'Wi-Fi, Ethernet, USB 3.0' },
      { label: 'Daily Duty Cycle', value: 'Up to 5,000 sheets' },
      { label: 'OS Support', value: 'Windows, macOS' },
      { label: 'Dimensions', value: '306 x 258 x 250 mm' },
      { label: 'Weight', value: '4.45 kg' },
      { label: 'Bundled Software', value: 'Brother iPrint&Scan, Button Manager' },
      { label: 'Warranty', value: '1 Year' }
    ]
  },
  {
    name: 'Brother PDS-6000F',
    slug: 'brother-pds-6000f',
    image: `${import.meta.env.BASE_URL}images/PDS6000F (2).webp`,
    type: 'Brother Scanner',
    overview: 'The PDS-6000F is a high-speed, flatbed scanner with a 100-sheet ADF, designed for scanning a wide range of documents, including fragile and bound materials.',
    specs: [
      { label: 'Scan Speed', value: '80 ppm / 160 ipm (A4, 200 dpi, B/W & Color)' },
      { label: 'ADF Capacity', value: '100 sheets' },
      { label: 'Max Paper Size', value: '215.9 x 355.6 mm' },
      { label: 'Flatbed Size', value: 'A4 / Letter' },
      { label: 'Connectivity', value: 'USB 3.0' },
      { label: 'Daily Duty Cycle', value: 'Up to 6,000 sheets' },
      { label: 'OS Support', value: 'Windows, macOS' },
      { label: 'Dimensions', value: '323 x 613 x 239 mm' },
      { label: 'Weight', value: '8.6 kg' },
      { label: 'Bundled Software', value: 'Brother iPrint&Scan, Button Manager' },
      { label: 'Warranty', value: '1 Year' }
    ]
  },
  {
    name: 'DS-640',
    slug: 'ds-640',
    image: `${import.meta.env.BASE_URL}images/4300N12.jpg`,
    type: 'Brother Scanner',
    overview: 'The DS-640 is an ultra-portable, USB-powered scanner ideal for scanning documents, receipts, and cards on the go.',
    specs: [
      { label: 'Scan Speed', value: '15 ppm (A4, 300 dpi, Color)' },
      { label: 'Max Paper Size', value: '215.9 x 1828.8 mm' },
      { label: 'Connectivity', value: 'USB 3.0' },
      { label: 'OS Support', value: 'Windows, macOS' },
      { label: 'Dimensions', value: '301 x 63 x 45 mm' },
      { label: 'Weight', value: '0.45 kg' },
      { label: 'Bundled Software', value: 'Brother iPrint&Scan, Button Manager' },
      { label: 'Warranty', value: '1 Year' }
    ]
  },
  {
    name: 'ADS-3100',
    slug: 'ads-3100',
    image: `${import.meta.env.BASE_URL}images/ADS4100_main.webp`,
    type: 'Brother Scanner',
    overview: 'The ADS-3100 is a compact desktop scanner with a 60-sheet ADF, fast duplex scanning, and advanced image processing for small and medium-sized offices.',
    specs: [
      { label: 'Scan Speed', value: '40 ppm / 80 ipm (A4, 200 dpi, B/W & Color)' },
      { label: 'ADF Capacity', value: '60 sheets' },
      { label: 'Max Paper Size', value: '215.9 x 355.6 mm' },
      { label: 'Connectivity', value: 'USB 3.0' },
      { label: 'Daily Duty Cycle', value: 'Up to 5,000 sheets' },
      { label: 'OS Support', value: 'Windows, macOS' },
      { label: 'Dimensions', value: '299 x 145 x 141 mm' },
      { label: 'Weight', value: '2.8 kg' },
      { label: 'Bundled Software', value: 'Brother iPrint&Scan, Button Manager' },
      { label: 'Warranty', value: '1 Year' }
    ]
  },
  {
    name: 'ADS-4100',
    slug: 'ads-4100',
    image: `${import.meta.env.BASE_URL}images/ADS4100_main.webp`,
    type: 'Brother Scanner',
    overview: 'The ADS-4100 is a high-speed desktop scanner with a 60-sheet ADF, robust media handling, and advanced image processing for busy workgroups.',
    specs: [
      { label: 'Scan Speed', value: '40 ppm / 80 ipm (A4, 200 dpi, B/W & Color)' },
      { label: 'ADF Capacity', value: '60 sheets' },
      { label: 'Max Paper Size', value: '215.9 x 355.6 mm' },
      { label: 'Connectivity', value: 'USB 3.0' },
      { label: 'Daily Duty Cycle', value: 'Up to 5,000 sheets' },
      { label: 'OS Support', value: 'Windows, macOS' },
      { label: 'Dimensions', value: '299 x 145 x 141 mm' },
      { label: 'Weight', value: '2.8 kg' },
      { label: 'Bundled Software', value: 'Brother iPrint&Scan, Button Manager' },
      { label: 'Warranty', value: '1 Year' }
    ]
  },
  {
    name: 'ADS-4300N',
    slug: 'ads-4300n',
    image: `${import.meta.env.BASE_URL}images/4300N12.jpg`,
    type: 'Brother Scanner',
    overview: 'The ADS-4300N is a network-ready desktop scanner with a 80-sheet ADF, fast duplex scanning, and robust media handling for shared office environments.',
    specs: [
      { label: 'Scan Speed', value: '40 ppm / 80 ipm (A4, 200 dpi, B/W & Color)' },
      { label: 'ADF Capacity', value: '80 sheets' },
      { label: 'Max Paper Size', value: '215.9 x 355.6 mm' },
      { label: 'Connectivity', value: 'Ethernet, USB 3.0' },
      { label: 'Daily Duty Cycle', value: 'Up to 6,000 sheets' },
      { label: 'OS Support', value: 'Windows, macOS' },
      { label: 'Dimensions', value: '306 x 258 x 250 mm' },
      { label: 'Weight', value: '4.45 kg' },
      { label: 'Bundled Software', value: 'Brother iPrint&Scan, Button Manager' },
      { label: 'Warranty', value: '1 Year' }
    ]
  },
  {
    name: 'ADS-4500W',
    slug: 'ads-4500w',
    image: `${import.meta.env.BASE_URL}images/brother-ads-4500w-scanner.jpg`,
    type: 'Brother Scanner',
    overview: 'The ADS-4500W is a wireless, network-ready scanner with a 80-sheet ADF, color touchscreen, and fast duplex scanning for flexible office workflows.',
    specs: [
      { label: 'Scan Speed', value: '45 ppm / 90 ipm (A4, 200 dpi, B/W & Color)' },
      { label: 'ADF Capacity', value: '80 sheets' },
      { label: 'Max Paper Size', value: '215.9 x 355.6 mm' },
      { label: 'Connectivity', value: 'Wi-Fi, Ethernet, USB 3.0' },
      { label: 'Daily Duty Cycle', value: 'Up to 7,000 sheets' },
      { label: 'OS Support', value: 'Windows, macOS' },
      { label: 'Dimensions', value: '306 x 258 x 250 mm' },
      { label: 'Weight', value: '4.45 kg' },
      { label: 'Bundled Software', value: 'Brother iPrint&Scan, Button Manager' },
      { label: 'Warranty', value: '1 Year' }
    ]
  },
  {
    name: 'ADS-4700W',
    slug: 'ads-4700w',
    image: `${import.meta.env.BASE_URL}images/Brother_ADS4700W__01.webp`,
    type: 'Brother Scanner',
    overview: 'The ADS-4700W is a wireless, network-ready scanner with a 100-sheet ADF, advanced image processing, and high-speed duplex scanning for demanding office environments.',
    specs: [
      { label: 'Scan Speed', value: '50 ppm / 100 ipm (A4, 200 dpi, B/W & Color)' },
      { label: 'ADF Capacity', value: '100 sheets' },
      { label: 'Max Paper Size', value: '215.9 x 355.6 mm' },
      { label: 'Connectivity', value: 'Wi-Fi, Ethernet, USB 3.0' },
      { label: 'Daily Duty Cycle', value: 'Up to 8,000 sheets' },
      { label: 'OS Support', value: 'Windows, macOS' },
      { label: 'Dimensions', value: '306 x 258 x 250 mm' },
      { label: 'Weight', value: '4.45 kg' },
      { label: 'Bundled Software', value: 'Brother iPrint&Scan, Button Manager' },
      { label: 'Warranty', value: '1 Year' }
    ]
  },
  {
    name: 'ADS-4900W',
    slug: 'ads-4900w',
    image: `${import.meta.env.BASE_URL}images/ADS-4900Ww.jpg`,
    type: 'Brother Scanner',
    overview: 'The ADS-4900W is a wireless, network-ready scanner with a 100-sheet ADF, advanced image processing, and ultra-fast duplex scanning for high-volume office environments.',
    specs: [
      { label: 'Scan Speed', value: '60 ppm / 120 ipm (A4, 200 dpi, B/W & Color)' },
      { label: 'ADF Capacity', value: '100 sheets' },
      { label: 'Max Paper Size', value: '215.9 x 355.6 mm' },
      { label: 'Connectivity', value: 'Wi-Fi, Ethernet, USB 3.0' },
      { label: 'Daily Duty Cycle', value: 'Up to 10,000 sheets' },
      { label: 'OS Support', value: 'Windows, macOS' },
      { label: 'Dimensions', value: '306 x 258 x 250 mm' },
      { label: 'Weight', value: '4.45 kg' },
      { label: 'Bundled Software', value: 'Brother iPrint&Scan, Button Manager' },
      { label: 'Warranty', value: '1 Year' }
    ]
  },
];

export { brotherProducts };

const BrotherScanners = () => {
  const { productSlug } = useParams();
  const navigate = useNavigate();

  if (productSlug) {
    const product = brotherProducts.find(p => p.slug === productSlug);
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
          <li className="active">Brother Scanners</li>
          <li><Link to="/canon-scanners">Canon Scanners</Link></li>
          <li><Link to="/fujitsu-ricoh-scanners">Fujitsu-RICOH Scanners</Link></li>
          <li><Link to="/kodak-scanners">Kodak Scanners</Link></li>
          <li><Link to="/microfilm-scanners">Microfilm Scanners</Link></li>
          <li><Link to="/scanning-software">Scanning Software</Link></li>
          <li><Link to="/servers">Servers</Link></li>
        </ul>
      </aside>
      <main className="product-main">
        <h1>Brother Scanners</h1>
        <div className="product-grid">
          {brotherProducts.map((prod, idx) => (
            <div className="product-card" key={idx} style={{ position: 'relative' }}>
              <img src={prod.image} alt={prod.name} className="product-image" />
              <div className="product-info">
                <h3>{prod.name}</h3>
                <p>{prod.type}</p>
                <Link to={`/products/brother-scanners/${prod.slug}`} className="view-item-btn">View Item</Link>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default BrotherScanners; 