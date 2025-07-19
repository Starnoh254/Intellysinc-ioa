import React from 'react';
import './CanonScanners.css';
import { Link, useParams, useNavigate } from 'react-router-dom';
import ProductInfo from '../components/ProductInfo';

const canonProducts = [
  // Flatbed Series
  {
    name: 'DR-F120',
    slug: 'dr-f120',
    image: `${import.meta.env.BASE_URL}images/Canon_37_548.jpg',
    type: 'Flatbed Scanner',
    details: {
      speed: 'A4 / LTR, Portrait, 200dpi: Black and White: 20ppm (simplex) / 36ipm (duplex); Grayscale: 20ppm (simplex) / 36ipm (duplex); Colour: 10ppm (simplex) / 18ipm (duplex)',
      maxPaperSize: 'Width: 51 – 216 mm, Length: 89 – 356 mm',
      adfCapacity: '50 sheets (80g/m²)',
      duplexScanning: 'Yes',
      dimensions: 'Tray Closed: 469 (W) x 335 (D) x 120 (H) mm; Tray Opened: 469 (W) x 335 (D) x 151 (H) mm',
      interface: 'High speed USB 2.0',
      pcCompatibility: 'Windows',
      drivers: 'ISIS /TWAIN Driver (Windows XP/VISTA/7/8/10 Server 2008/Server 2012); CaptureOnTouch; EMC Captiva Cloud Runtime Controls',
      macDrivers: 'N/A',
      warranty: 'N/A',
      overview: 'Maximised productivity: Capture various types of document types accurately and efficiently with the DR-F120: a compact all-in-one scanning solution that offers both an automatic document feeder (ADF) and flatbed. You can save yourself valuable time using the 50-sheet document feeder, with its faster 20ppm scanning speeds. The DR-F120 can be relied on to get through your work with a suggested daily volume of up to 1000 scans. Effortless paper handling: The DR-F120 gives you complete flexibility to scan a wide range of materials despite its compact body size and small footprint. The straight-through ADF path accommodates A4-width documents, and media of up to 1,000mm in length. You’ll enjoy increased reliability and time-savings when scanning mixed documents as a result of the separation roller in the feeding mechanism. The flatbed scanner is ideal for handling media like books, passports or magazines, and effortlessly captures pages up to legal size. It’s equally at home with photos or other thick, thin and delicate documents. Superior image quality: The DR-F120 delivers superior quality results time after time, due to its 2400dpi scanning, wide range of built-in image enhancement features and Canon’s renowned imaging technology. You’ll achieve unprecedented colour accuracy that stays true to the original document via the scanner’s 3-Dimensional Color Correction function. Simple, user-friendly operation: Achieve superb results with just a single touch of a button using the Full Auto Mode that automatically applies the best settings for each scanned image. Built-in tools eliminate blank pages and automatically detect paper size and text orientation; while the automatic deskew feature straightens documents fed at an angle. Frequent tasks can be made even simpler by assigning them to 3 job buttons on the scanner panel. Bundled software gives you more choice: The DR-F120 offers a simple and intuitive scanning experience using Canon’s CaptureOnTouch 3 software. Users can scan, edit and send their documents even more easily with this versatile scanning solution. Its step-by-step icon-based user interface lets users quickly convert their paper documents to multiple file formats (PDF, TIFF, JPEG, BMP, PNG and PowerPoint). CaptureOnTouch is equally capable as a simple document filing solution that lets users scan and create searchable PDF documents – including easy text-based search and retrieval. Cloud plug-ins to SharePoint, SugarSync, OneDrive, Dropbox, Google Drive™ and Evernote are included, ISIS and TWAIN drivers are also provided. Easy to own and maintain: DR-F120 is easy to maintain because of its user-friendly design. The feed rollers are user-replaceable, which means you won’t incur the cost of calling out a service technician. Your costs stay low due to the scanner’s high energy-efficiency, using less than 20W in operation.'
    }
  },
  // Production Series
  {
    name: 'DR-G2090',
    slug: 'dr-g2090',
    image: `${import.meta.env.BASE_URL}images/Canon_38_544.jpg',
    type: 'Production Scanner',
    overview: 'The DR-G2090 is a high-speed production scanner designed for large-volume document processing, offering advanced image quality and reliable paper handling.',
    specs: [
      { label: 'Scan Speed', value: '90 ppm / 180 ipm (A4, 200 dpi, B/W & Color)' },
      { label: 'ADF Capacity', value: '300 sheets' },
      { label: 'Max Paper Size', value: 'A3' },
      { label: 'Connectivity', value: 'USB 3.1' },
      { label: 'Daily Duty Cycle', value: 'Up to 30,000 sheets' },
      { label: 'OS Support', value: 'Windows' },
      { label: 'Dimensions', value: '480 x 569 x 315 mm' },
      { label: 'Weight', value: '25 kg' },
      { label: 'Bundled Software', value: 'CaptureOnTouch, ISIS/TWAIN Driver' },
      { label: 'Warranty', value: '1 Year' }
    ]
  },
  {
    name: 'DR-G2110',
    slug: 'dr-g2110',
    image: `${import.meta.env.BASE_URL}images/Canon_39_540.jpg',
    type: 'Production Scanner',
    overview: 'The DR-G2110 is a robust, high-speed production scanner with network capability, ideal for centralized scanning in large organizations.',
    specs: [
      { label: 'Scan Speed', value: '110 ppm / 220 ipm (A4, 200 dpi, B/W & Color)' },
      { label: 'ADF Capacity', value: '300 sheets' },
      { label: 'Max Paper Size', value: 'A3' },
      { label: 'Connectivity', value: 'USB 3.1, Ethernet' },
      { label: 'Daily Duty Cycle', value: 'Up to 50,000 sheets' },
      { label: 'OS Support', value: 'Windows' },
      { label: 'Dimensions', value: '480 x 569 x 315 mm' },
      { label: 'Weight', value: '25 kg' },
      { label: 'Bundled Software', value: 'CaptureOnTouch, ISIS/TWAIN Driver' },
      { label: 'Warranty', value: '1 Year' }
    ]
  },
  {
    name: 'DR-G2140',
    slug: 'dr-g2140',
    image: `${import.meta.env.BASE_URL}images/Canon_40_536.jpg',
    type: 'Production Scanner',
    overview: 'The DR-G2140 is a network-ready, ultra-fast production scanner with advanced paper handling and image processing for high-volume environments.',
    specs: [
      { label: 'Scan Speed', value: '140 ppm / 280 ipm (A4, 200 dpi, B/W & Color)' },
      { label: 'ADF Capacity', value: '300 sheets' },
      { label: 'Max Paper Size', value: 'A3' },
      { label: 'Connectivity', value: 'USB 3.1, Ethernet' },
      { label: 'Daily Duty Cycle', value: 'Up to 70,000 sheets' },
      { label: 'OS Support', value: 'Windows' },
      { label: 'Dimensions', value: '480 x 569 x 315 mm' },
      { label: 'Weight', value: '25 kg' },
      { label: 'Bundled Software', value: 'CaptureOnTouch, ISIS/TWAIN Driver' },
      { label: 'Warranty', value: '1 Year' }
    ]
  },
  {
    name: 'DR-X10C',
    slug: 'dr-x10c',
    image: `${import.meta.env.BASE_URL}images/Canon_41_534.jpg',
    type: 'Production Scanner',
    overview: 'The DR-X10C is a premium production scanner with exceptional image quality, high-speed scanning, and advanced paper protection features.',
    specs: [
      { label: 'Scan Speed', value: '130 ppm / 260 ipm (A4, 200 dpi, B/W & Color)' },
      { label: 'ADF Capacity', value: '500 sheets' },
      { label: 'Max Paper Size', value: 'A3' },
      { label: 'Connectivity', value: 'USB 2.0' },
      { label: 'Daily Duty Cycle', value: 'Up to 60,000 sheets' },
      { label: 'OS Support', value: 'Windows' },
      { label: 'Dimensions', value: '528 x 563 x 375 mm' },
      { label: 'Weight', value: '39 kg' },
      { label: 'Bundled Software', value: 'CapturePerfect, ISIS/TWAIN Driver' },
      { label: 'Warranty', value: '1 Year' }
    ]
  },
  // 6000 Series
  { name: 'DR-6010C', image: `${import.meta.env.BASE_URL}images/Canon_42_528.jpg', type: '6000 Series' },
  { name: 'DR-6030C', image: `${import.meta.env.BASE_URL}images/Canon_43_524.jpg', type: '6000 Series' },
  // Portable Series
  { name: 'P-215II', image: `${import.meta.env.BASE_URL}images/Canon_44_520.jpg', type: 'Portable Scanner' },
  { name: 'P-208II', image: `${import.meta.env.BASE_URL}images/Canon_45_515.jpg', type: 'Portable Scanner' },
  { name: 'Canon R10', image: `${import.meta.env.BASE_URL}images/Canon_47_510.jpg', type: 'Portable Scanner' },
  { name: 'Canon R40', image: `${import.meta.env.BASE_URL}images/Canon_48_507.jpg', type: 'Portable Scanner' },
  // Network Series
  { name: 'ScanFront 400', image: `${import.meta.env.BASE_URL}images/Canon_49_499.jpg', type: 'Network Scanner' },
  // M Series
  { name: 'DR-M140', image: `${import.meta.env.BASE_URL}images/Canon_50_493.jpg', type: 'M Series' },
  { name: 'DR-M160II', image: `${import.meta.env.BASE_URL}images/Canon_51_486.jpg', type: 'M Series' },
  { name: 'DR-M260', image: `${import.meta.env.BASE_URL}images/Canon_52_483.jpg', type: 'M Series' },
  { name: 'DR-M1060', image: `${import.meta.env.BASE_URL}images/Canon_53_480.jpg', type: 'M Series' },
  // C Series
  { name: 'DR-C225 II', image: `${import.meta.env.BASE_URL}images/Canon_54_473.jpg', type: 'C Series' },
  { name: 'DR-C225', image: `${import.meta.env.BASE_URL}images/Canon_58_459.jpg', type: 'C Series' },
  { name: 'DR-C240', image: `${import.meta.env.BASE_URL}images/Canon_59_455.jpg', type: 'C Series' },
  { name: 'DR-C230', image: `${import.meta.env.BASE_URL}images/Canon_60_454.jpg', type: 'C Series' },
  { name: 'Canon DR-C225W II', image: `${import.meta.env.BASE_URL}images/Canon_61_452.jpg', type: 'C Series' },
  // Cheque Scanners
  { name: 'CR-120', image: `${import.meta.env.BASE_URL}images/Canon_63_445.jpg', type: 'Cheque Scanner' },
  { name: 'CR-150N', image: `${import.meta.env.BASE_URL}images/Canon-r10 (1).png', type: 'Cheque Scanner' },
  // Other Canon
  { name: 'DR-S130', image: `${import.meta.env.BASE_URL}images/Canon-r40 (2).jpg', type: 'Other Canon' },
  { name: 'DR-S150', image: `${import.meta.env.BASE_URL}images/Canon-DRC225wII.webp', type: 'Other Canon' },
];

export { canonProducts };

const CanonScanners = () => {
  const { productSlug } = useParams();
  const navigate = useNavigate();

  if (productSlug) {
    const product = canonProducts.find(p => p.slug === productSlug);
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
          <li className="active">Canon Scanners</li>
          <li>Document Management System</li>
          <li>Fujitsu-RICOH Scanners</li>
          <li>Kodak Scanners</li>
          <li>Microfilm Scanners</li>
          <li>Scanning Software</li>
          <li>Servers</li>
        </ul>
      </aside>
      <main className="product-main">
        <h1>Canon Scanners</h1>
        <div className="product-grid">
          {canonProducts.map((prod, idx) => (
            <div className="product-card" key={idx} style={{ position: 'relative' }}>
              <img src={prod.image} alt={prod.name} className="product-image" />
              <div className="product-info">
                <h3>{prod.name}</h3>
                <p>{prod.type}</p>
                <Link to={`/products/canon-scanners/${prod.slug}`} className="view-item-btn">View Item</Link>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default CanonScanners; 