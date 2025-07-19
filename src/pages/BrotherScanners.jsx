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
    overview: 'The Brother DS-740D is a compact, mobile duplex scanner ideal for on-the-go and small office/home office professionals. It features a single-pass, duplex, color scan speed of up to 16ppm, plug-and-play convenience, and a space-saving design.',
    specs: [
      { label: 'A4 Pages Per Min', value: 'Colour and mono 15ppm (A4 300dpi), Colour Duplex Scanning Speed 30ipm (A4 300dpi)' },
      { label: 'Max Paper Size', value: '8.5" (W) x 72" (L)' },
      { label: 'ADF Capacity', value: '1' },
      { label: 'Duplex Scanning', value: 'Yes' },
      { label: 'Dimensions / Weight', value: '2.48" x 11.85" x 1.78" / 1.427 lbs' },
      { label: 'Interface', value: 'Micro USB 3.0' },
      { label: 'PC Compatibility', value: 'Windows: TWAIN, WIA, Windows 7, 8.1, 10 (32 & 64 bit), Windows Server 2019, 2016, 2012R2, 2012, macOS: ICA 10.12.x-10.14.x, Linux: SANE' },
      { label: 'PC Drivers / Software', value: 'iPS for Windows PC, Nuance® PaperPort SE 14, Kofax Power PDF Standard v3, Remote Setup, NewSoft® Presto!® BizCard 6' },
      { label: 'Mac Drivers / Software', value: 'iPS for macOS, Remote Setup, NewSoft® Presto!® BizCard 7' },
      { label: 'Standard Warranty', value: '2-Year Warranty' }
    ]
  },
  {
    name: 'Brother DS-940DW',
    slug: 'brother-ds-940dw',
    image: `${import.meta.env.BASE_URL}images/DS940DW (2).webp`,
    type: 'Brother Scanner',
    overview: 'The Brother DS-940DW is a duplex and wireless compact mobile document scanner, perfect for on-the-go and small office/home office professionals. It features single-pass duplex scanning, wireless connectivity, and a space-saving design.',
    specs: [
      { label: 'A4 Pages Per Min', value: '80 ppm' },
      { label: 'Max Paper Size', value: '216 x 356 mm' },
      { label: 'ADF Capacity', value: '100.0' },
      { label: 'Duplex Scanning', value: 'Yes' },
      { label: 'Dimensions / Weight', value: '2.48" x 12.56" x 1.79" / 1.54 lbs' },
      { label: 'Interface', value: 'Wireless 802.11 b/g/n, Wi Fi Direct, Micro USB 3.0' },
      { label: 'PC Compatibility', value: 'Windows 7, 8, Vista, XP' },
      { label: 'PC Drivers / Software', value: 'N/A' },
      { label: 'Mac Drivers / Software', value: 'N/A' },
      { label: 'Standard Warranty', value: '12 months' }
    ]
  },
  {
    name: 'Brother ADS-1200',
    slug: 'brother-ads-1200',
    image: `${import.meta.env.BASE_URL}images/ADS1200 (1).webp`,
    type: 'Brother Scanner',
    overview: 'The Brother ADS-1200 is a compact desktop document scanner with a 20-page ADF, fast simplex and duplex scanning, and versatile media handling. Perfect for home or small office use.',
    specs: [
      { label: 'A4 Pages Per Min', value: 'Simplex Scan Speeds Up to 25ppm (color and mono) Duplex Scan Speeds Up to 50ipm (color and mono)' },
      { label: 'Max Paper Size', value: '8.5" (W) x 34" (L)' },
      { label: 'ADF Capacity', value: 'Up to 20 sheets' },
      { label: 'Duplex Scanning', value: 'Yes' },
      { label: 'Dimensions / Weight', value: '11.7" x 3.9" x 3.4" / 3.3 lbs' },
      { label: 'Interface', value: 'Micro USB 3.0' },
      { label: 'PC Compatibility', value: 'Windows 10, 8/8.1, 7(SP1), Mac OSX v10.11.6, 10.12.x, 10.3.x, Linux' },
      { label: 'PC Drivers / Software', value: 'TWAIN, WIA, ICA, SANE' },
      { label: 'Mac Drivers / Software', value: 'N/A' },
      { label: 'Standard Warranty', value: '1-year limited warranty' }
    ]
  },
  {
    name: 'Brother ADS-1700W',
    slug: 'brother-ads-1700w',
    image: `${import.meta.env.BASE_URL}images/ADS1700W (1).webp`,
    type: 'Brother Scanner',
    overview: 'The Brother ADS-1700W is a wireless compact desktop scanner with a 20-page ADF, fast simplex and duplex scanning, and a color touchscreen for easy operation. Ideal for home or small office digitization.',
    specs: [
      { label: 'A4 Pages Per Min', value: 'Simplex Scan Speeds Up to 25ppm (color and mono) Duplex Scan Speeds Up to 50ipm (color and mono)' },
      { label: 'Max Paper Size', value: '8.5" (W) x 34" (L)' },
      { label: 'ADF Capacity', value: 'Up to 20 sheets' },
      { label: 'Duplex Scanning', value: 'Yes' },
      { label: 'Dimensions / Weight', value: '11.8" x 4.1" x 3.3" / 3.7 lbs' },
      { label: 'Interface', value: 'Wireless 802.11 b/g/n, Micro USB 3.0' },
      { label: 'PC Compatibility', value: 'Windows 10, 8/8.1, 7(SP1), Mac OSX v10.11.6, 10.12.x, 10.3.x, Linux' },
      { label: 'PC Drivers / Software', value: 'TWAIN, WIA, ICA, SANE' },
      { label: 'Mac Drivers / Software', value: 'N/A' },
      { label: 'Standard Warranty', value: '1-year limited warranty' }
    ]
  },
  {
    name: 'Brother ADS-2200',
    slug: 'brother-ads-2200',
    image: `${import.meta.env.BASE_URL}images/ADS2200 (2).webp`,
    type: 'Brother Scanner',
    overview: 'The Brother ADS-2200 is a high-speed duplex color scanner with a 50-page ADF, ideal for home office professionals needing reliable, fast scanning and versatile connectivity.',
    specs: [
      { label: 'A4 Pages Per Min', value: 'Duplex Scan Speeds (black & color) (max ipm) 70, Simplex Scan Speeds (black & color) (max ppm) 35' },
      { label: 'Max Paper Size', value: '8.5" (W) x 35" (L)' },
      { label: 'ADF Capacity', value: '50.0' },
      { label: 'Duplex Scanning', value: 'Yes' },
      { label: 'Dimensions / Weight', value: '11.8" x 5.7" x 7.0" / 5.9 lbs' },
      { label: 'Interface', value: 'Hi-Speed USB 2.0' },
      { label: 'PC Compatibility', value: 'Windows / Mac OS / Linux' },
      { label: 'PC Drivers / Software', value: 'Kofax PaperPort® SE with OCR' },
      { label: 'Mac Drivers / Software', value: 'Presto!® PageManager® with OCR' },
      { label: 'Standard Warranty', value: 'N/A' }
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
    overview: 'The Brother ADS-2800W is a wireless, network-ready color desktop scanner with a 50-sheet ADF, fast duplex scanning, and a touchscreen for one-touch scanning to multiple destinations. Designed for mid- to large-size workgroups.',
    specs: [
      { label: 'A4 Pages Per Min', value: 'Scan Speed 40 ppm (color and mono) Duplex Scan Speed 80 ipm (color and mono)' },
      { label: 'Max Paper Size', value: '8.5" (W) x 196" (L)' },
      { label: 'ADF Capacity', value: '50-sheet capacity ADF' },
      { label: 'Duplex Scanning', value: 'Yes' },
      { label: 'Dimensions / Weight', value: '12.1" x 10.2" x 9.8" / 10 lbs' },
      { label: 'Interface', value: 'Wireless 802.11 b/g/n, Gigabit Ethernet 10/100/1000Base-T, Hi-Speed USB 2.0' },
      { label: 'PC Compatibility', value: 'PC: Windows 10, 8.1, 8, 7, Vista, XP (32-bit only), Mac: OS X v10.8.x and up, Linux' },
      { label: 'PC Drivers / Software', value: 'ABBYY FineReader Sprint v.12, ABBYY PDF Transformer+ (Windows), Nuance PaperPort 14 SE (Windows), Brother Control Center' },
      { label: 'Mac Drivers / Software', value: 'N/A' },
      { label: 'Standard Warranty', value: '1-year limited warranty' }
    ]
  },
  {
    name: 'Brother ADS-3000N',
    slug: 'brother-ads-3000n',
    image: `${import.meta.env.BASE_URL}images/ADS-3000N (2).webp`,
    type: 'Brother Scanner',
    overview: 'The Brother ADS-3000N is a high-speed, network-ready color desktop scanner with a 50-sheet ADF, robust media handling, and advanced image processing for demanding office environments.',
    specs: [
      { label: 'A4 Pages Per Min', value: 'Scan Speed Up to 50 ppm (color and mono) Duplex Scan Speed Up to 100 ipm (color and mono)' },
      { label: 'Max Paper Size', value: '8.5" (W) x 196" (L)' },
      { label: 'ADF Capacity', value: '50-sheet capacity ADF' },
      { label: 'Duplex Scanning', value: 'Yes' },
      { label: 'Dimensions / Weight', value: '12.1" x 10.2" x 9.8" / 9.81 lbs' },
      { label: 'Interface', value: 'Gigabit Ethernet 10/100/1000Base-T, SuperSpeed USB 3.0' },
      { label: 'PC Compatibility', value: 'Windows 10, 8.1, 8, 7, Vista, XP (32-bit only), Mac OS X v10.8.x and up, Linux' },
      { label: 'PC Drivers / Software', value: 'ABBYY FineReader Professional 11, ABBYY PDF Transformer Plus (Windows), Nuance PaperPort 14 SE (Windows), Brother Control Center' },
      { label: 'Mac Drivers / Software', value: 'N/A' },
      { label: 'Standard Warranty', value: '1-year limited warranty' }
    ]
  },
  {
    name: 'Brother ADS-3600W',
    slug: 'brother-ads-3600w',
    image: `${import.meta.env.BASE_URL}images/ADS3600W (2).webp`,
    type: 'Brother Scanner',
    overview: 'The Brother ADS-3600W is a wireless, network-ready color desktop scanner with a 50-sheet ADF, advanced image processing, and high-speed duplex scanning for demanding office environments.',
    specs: [
      { label: 'A4 Pages Per Min', value: 'Scan Speed 50 ppm (color and mono) Duplex Scan Speed 100 ipm (color and mono)' },
      { label: 'Max Paper Size', value: '8.5" (W) x 196" (L)' },
      { label: 'ADF Capacity', value: '50-sheet capacity ADF' },
      { label: 'Duplex Scanning', value: 'Yes' },
      { label: 'Dimensions / Weight', value: '12.1" x 10.2" x 9.8" / 10 lbs' },
      { label: 'Interface', value: 'Wireless 802.11 b/g/n, Gigabit Ethernet 10/100/1000Base-T, SuperSpeed USB 3.0' },
      { label: 'PC Compatibility', value: 'Windows 10, 8.1, 8, 7, Vista, XP (32-bit only), Mac OS X v10.8.x and up, Linux' },
      { label: 'PC Drivers / Software', value: 'ABBYY FineReader Professional 11, ABBYY PDF Transformer+ (Windows), Nuance PaperPort 14 SE (Windows), Brother Control Center' },
      { label: 'Mac Drivers / Software', value: 'N/A' },
      { label: 'Standard Warranty', value: '1-year limited warranty' }
    ]
  },
  {
    name: 'Brother PDS-6000F',
    slug: 'brother-pds-6000f',
    image: `${import.meta.env.BASE_URL}images/PDS6000F (2).webp`,
    type: 'Brother Scanner',
    overview: 'The Brother PDS-6000F is a high-speed flatbed scanner with a 100-page ADF, designed for fast, high-volume processing and versatile fixed flatbed for outsized documents and booklet scanning.',
    specs: [
      { label: 'A4 Pages Per Min', value: 'Scan Speed 80 ppm (200 / 300 dpi) 20 ppm (600 dpi) Duplex Scan Speed 80 ppm / 160 ipm (200 / 300 dpi) 20 ppm / 40 ipm (600 dpi)' },
      { label: 'Max Paper Size', value: 'Width 2.0 in. to 8.58 in. (51 mm to 218 mm) Length 2.13 in. to 14.0 in. (54 mm to 356 mm)' },
      { label: 'ADF Capacity', value: 'Up to 100 pages (Paper: 20 lb (80 g/m2))' },
      { label: 'Duplex Scanning', value: 'Yes' },
      { label: 'Dimensions / Weight', value: '12.72 in x 24.13 in x 10.35 in (323mm x 613 mm x 263 mm) / Approx. 20.3 lbs (9.20 kg)' },
      { label: 'Interface', value: 'Super Speed USB 3.0' },
      { label: 'PC Compatibility', value: 'Windows Vista, 7, 8, 8.1, 10, Macintosh OS X v10.8.x, 10.9.x, 10.10.x or later' },
      { label: 'PC Drivers / Software', value: 'N/A' },
      { label: 'Mac Drivers / Software', value: 'N/A' },
      { label: 'Standard Warranty', value: 'N/A' }
    ]
  },
  {
    name: 'Brother DS-640',
    slug: 'ds-640',
    image: `${import.meta.env.BASE_URL}images/4300N12.jpg`,
    type: 'Brother Scanner',
    overview: 'The Brother DS-640 is a portable document scanner designed for home and office use, featuring wireless connectivity, auto document feeder, and one-touch scanning for improved efficiency and productivity.',
    specs: [
      { label: 'A4 Pages Per Min', value: 'Up to 25 ppm' },
      { label: 'Max Paper Size', value: '8.5" x 72"' },
      { label: 'ADF Capacity', value: '30 pages' },
      { label: 'Duplex Scanning', value: 'No' },
      { label: 'Dimensions / Weight', value: '301 x 63 x 45 mm / 1.427 lbs' },
      { label: 'Interface', value: 'USB 3.0, Wireless' },
      { label: 'PC Compatibility', value: 'Windows, macOS' },
      { label: 'PC Drivers / Software', value: 'Software suite for automation and management' },
      { label: 'Mac Drivers / Software', value: 'N/A' },
      { label: 'Standard Warranty', value: 'N/A' }
    ]
  },
  {
    name: 'Brother ADS-3100',
    slug: 'ads-3100',
    image: `${import.meta.env.BASE_URL}images/ADS4100_main.webp`,
    type: 'Brother Scanner',
    overview: 'The Brother ADS-3100 is a high-speed desktop document scanner for small businesses and home offices, featuring a 50-page ADF, one-touch scanning, and OCR software for searchable PDFs.',
    specs: [
      { label: 'A4 Pages Per Min', value: 'Up to 40 ppm' },
      { label: 'Max Paper Size', value: 'Variety of document types, including paper, plastic cards, and receipts' },
      { label: 'ADF Capacity', value: '50 pages' },
      { label: 'Duplex Scanning', value: 'Yes' },
      { label: 'Dimensions / Weight', value: 'Not specified' },
      { label: 'Interface', value: 'USB 2.0' },
      { label: 'PC Compatibility', value: 'Windows, macOS' },
      { label: 'PC Drivers / Software', value: 'Software suite for automation and management, OCR software' },
      { label: 'Mac Drivers / Software', value: 'N/A' },
      { label: 'Standard Warranty', value: 'Not specified' }
    ]
  },
  {
    name: 'Brother ADS-4100',
    slug: 'ads-4100',
    image: `${import.meta.env.BASE_URL}images/ADS4100_main.webp`,
    type: 'Brother Scanner',
    overview: 'The Brother ADS-4100 is a high-speed desktop document scanner for small businesses and home offices, featuring a 60-page ADF, one-touch scanning, OCR software, and USB 3.0 connectivity.',
    specs: [
      { label: 'A4 Pages Per Min', value: 'Up to 35 ppm' },
      { label: 'Max Paper Size', value: 'Variety of document types, including paper, plastic cards, and receipts' },
      { label: 'ADF Capacity', value: '60 pages' },
      { label: 'Duplex Scanning', value: 'Yes' },
      { label: 'Dimensions / Weight', value: 'Not specified' },
      { label: 'Interface', value: 'USB 3.0' },
      { label: 'PC Compatibility', value: 'Windows, macOS' },
      { label: 'PC Drivers / Software', value: 'Software suite for automation and management, OCR software' },
      { label: 'Mac Drivers / Software', value: 'N/A' },
      { label: 'Standard Warranty', value: 'Not specified' }
    ]
  },
  {
    name: 'Brother ADS-4300N',
    slug: 'ads-4300n',
    image: `${import.meta.env.BASE_URL}images/4300N12.jpg`,
    type: 'Brother Scanner',
    overview: 'The Brother ADS-4300N is a high-speed desktop document scanner for small businesses and home offices, featuring an 80-page ADF, one-touch scanning, OCR software, USB 3.0, and network connectivity.',
    specs: [
      { label: 'A4 Pages Per Min', value: 'Up to 40 ppm' },
      { label: 'Max Paper Size', value: 'Variety of document types, including paper, plastic cards, and receipts' },
      { label: 'ADF Capacity', value: '80 pages' },
      { label: 'Duplex Scanning', value: 'Yes' },
      { label: 'Dimensions / Weight', value: 'Not specified' },
      { label: 'Interface', value: 'USB 3.0, Network' },
      { label: 'PC Compatibility', value: 'Windows, macOS' },
      { label: 'PC Drivers / Software', value: 'Software suite for automation and management, OCR software' },
      { label: 'Mac Drivers / Software', value: 'N/A' },
      { label: 'Standard Warranty', value: 'Not specified' }
    ]
  },
  {
    name: 'Brother ADS-4500W',
    slug: 'ads-4500w',
    image: `${import.meta.env.BASE_URL}images/brother-ads-4500w-scanner.jpg`,
    type: 'Brother Scanner',
    overview: 'The Brother ADS-4500W is a high-speed desktop document scanner for small businesses and home offices, featuring an 80-page ADF, one-touch scanning, OCR software, USB 3.0, and wireless connectivity.',
    specs: [
      { label: 'A4 Pages Per Min', value: 'Up to 45 ppm' },
      { label: 'Max Paper Size', value: 'Variety of document types, including paper, plastic cards, and receipts' },
      { label: 'ADF Capacity', value: '80 pages' },
      { label: 'Duplex Scanning', value: 'Yes' },
      { label: 'Dimensions / Weight', value: 'Not specified' },
      { label: 'Interface', value: 'USB 3.0, Wireless' },
      { label: 'PC Compatibility', value: 'Windows, macOS' },
      { label: 'PC Drivers / Software', value: 'Software suite for automation and management, OCR software' },
      { label: 'Mac Drivers / Software', value: 'N/A' },
      { label: 'Standard Warranty', value: 'Not specified' }
    ]
  },
  {
    name: 'Brother ADS-4700W',
    slug: 'ads-4700w',
    image: `${import.meta.env.BASE_URL}images/Brother_ADS4700W__01.webp`,
    type: 'Brother Scanner',
    overview: 'The Brother ADS-4700W is a high-speed desktop document scanner for small businesses and home offices, featuring a 100-page ADF, one-touch scanning, OCR software, USB 3.0, and wireless connectivity.',
    specs: [
      { label: 'A4 Pages Per Min', value: 'Up to 40 ppm' },
      { label: 'Max Paper Size', value: 'Variety of document types, including paper, plastic cards, and receipts' },
      { label: 'ADF Capacity', value: '100 pages' },
      { label: 'Duplex Scanning', value: 'Yes' },
      { label: 'Dimensions / Weight', value: 'Not specified' },
      { label: 'Interface', value: 'USB 3.0, Wireless' },
      { label: 'PC Compatibility', value: 'Windows, macOS' },
      { label: 'PC Drivers / Software', value: 'Software suite for automation and management, OCR software' },
      { label: 'Mac Drivers / Software', value: 'N/A' },
      { label: 'Standard Warranty', value: 'Not specified' }
    ]
  },
  {
    name: 'Brother ADS-4900W',
    slug: 'ads-4900w',
    image: `${import.meta.env.BASE_URL}images/ADS-4900Ww.jpg`,
    type: 'Brother Scanner',
    overview: 'The Brother ADS-4900W is a high-speed desktop document scanner for small businesses and home offices, featuring a 100-page ADF, one-touch scanning, OCR software, USB 3.0, and wireless connectivity.',
    specs: [
      { label: 'A4 Pages Per Min', value: 'Up to 60 ppm' },
      { label: 'Max Paper Size', value: 'Variety of document types, including paper, plastic cards, and receipts' },
      { label: 'ADF Capacity', value: '100 pages' },
      { label: 'Duplex Scanning', value: 'Yes' },
      { label: 'Dimensions / Weight', value: 'Not specified' },
      { label: 'Interface', value: 'USB 3.0, Wireless' },
      { label: 'PC Compatibility', value: 'Windows, macOS' },
      { label: 'PC Drivers / Software', value: 'Software suite for automation and management, OCR software' },
      { label: 'Mac Drivers / Software', value: 'N/A' },
      { label: 'Standard Warranty', value: 'Not specified' }
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