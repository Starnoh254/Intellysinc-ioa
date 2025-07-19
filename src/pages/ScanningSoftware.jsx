import React from 'react';
import './ScanningSoftware.css';
import { Link, useParams, useNavigate } from 'react-router-dom';
import ProductInfo from '../components/ProductInfo';

const scanningSoftwareProducts = [
  {
    name: 'Kodak Capture Pro',
    slug: 'kodak-capture-pro',
    image: `${import.meta.env.BASE_URL}images/ScanningSoftwares_139_08.jpg`,
    type: 'Scanning Software',
    overview: `Kodak Capture Pro Software is designed for centralized, high volume, mission critical, production scanning applications. It easily handles complex scanning, data extraction & indexing.\n\n**Enhance your productivity:**\n- Click a job button to automatically scan, process and output\n- Integrates with leading ECM solutions, SharePoint and secure FTP\n\n**Reduce your costs:**\n- Advanced, automated indexing capabilities help guard against errors\n- Review and correct images with Intelligent Quality Control\n\n**Versions:**\n1. Capture Pro Software – Simplify scanning, Automate indexing, Maximize connectivity\n2. Capture Pro Software Network Edition – Capture across your world\n3. Capture Pro Software Auto Import Edition – Got files? Import them\n4. Capture Pro Software Limited Edition – Be productive right out of the box\n\n**Key Features:**\n- Quickly convert batches of paper into high-quality images.\n- Capture and index critical data and deliver it to databases, applications and people automatically.\n- Send smarter information to ECM systems and Microsoft SharePoint with extensive integration to streamline workflow and processes.\n- Scales beautifully from desktop to high-volume operations.\n\n**Network Edition:**\n- Centrally manage multiple capture and indexing stations anywhere on your network\n- Remote administration and batch monitoring\n- Utilize auto import, link workstations and more\n\n**Auto Import Edition:**\n- Import image files from MFPs and other sources via network folders\n- Benefit from the same imaging, indexing and output capabilities you get with scanned images\n- Can run as a service; no operator needed\n\n**Limited Edition:**\n- Easy single-batch scanning productivity; upgradeable to full version\n- 16 GUI languages; 126 OCR languages supported; native SharePoint connectivity`,
    details: {}
  },
  {
    name: 'Kofax Express',
    slug: 'kofax-express',
    image: `${import.meta.env.BASE_URL}images/ScanningSoftwares_140_05.jpg`,
    type: 'Scanning Software',
    overview: `Kofax Express™ is a powerful, all-in-one, easy-to-use, batch-oriented document scan application capable of high-speed scanning with real-time image display, indexing, and bar code detection.\n\nIt is designed for less complex applications and makes it easy for anyone to quickly scan, index and export documents for fast and easy retrieval.\n\nKofax patented VirtualReScan® (VRS) technology is built into the application to ensure optimal image quality, reduce errors and exceptions, and improve system effectiveness.\n\nKofax Express can export captured images and data to a wide variety of backend systems including Microsoft SharePoint and Kofax Capture.\n\n**Kofax VRS Elite**\nKofax VirtualReScan® (VRS) Elite is Kofax’s patented image enhancement and perfection software.\n\n- Reduces the time involved in manual document preparation\n- Enhances the quality of scanned images\n- Improves both manual scanning productivity and the efficiency of document capture processes\n\nHigh quality images are critical as they can significantly impact the success of downstream data extraction and retrieval needs.`,
    details: {}
  },
  {
    name: 'Dokmee Capture',
    slug: 'dokmee-capture',
    image: `${import.meta.env.BASE_URL}images/ScanningSoftwares_141_02.jpg`,
    type: 'Scanning Software',
    overview: `Dokmee Capture is a Document Capture Software. Improving business processes with no per click charges or limitations sounds almost too good to be true, but with Dokmee Capture it is a reality!\n\nOffering unlimited scanning, automated data capture options, and unmatched reporting and auditing tools, Dokmee Capture is the ideal Document Capture Software for scanning service bureaus, centralized scanning departments within large corporations, or companies looking to convert a large backlog of files.\n\nThis is a state of the art solution for streamlining the conversion from paper to searchable electronic files in a manner that saves both time and money.\n\n**Automated Data Capture:**\n- Barcode – 1D & 2D\n- QR Code & Data Matrix\n- OCR – Typed Text\n- ICR – Handwriting\n- MICR- Banking Font\n- OMR – Check Boxes and Fill in Bubbles\n- Smart Zone OCR for Variable Location Text and Line Items\n- Database Look Up & Matching – SQL, CSV, Excel, TXT\n\n**Versions:**\n- Standalone Edition: Single Station Processing\n- Network Edition: Networkable Processing for batch sharing and centralized management`,
    details: {}
  },
];

export { scanningSoftwareProducts };

const ScanningSoftware = () => {
  const { productSlug } = useParams();
  const navigate = useNavigate();

  if (productSlug) {
    const product = scanningSoftwareProducts.find(p => p.slug === productSlug);
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
          <li>Fujitsu-RICOH Scanners</li>
          <li>Kodak Scanners</li>
          <li>Microfilm Scanners</li>
          <li className="active">Scanning Software</li>
          <li>Servers</li>
        </ul>
      </aside>
      <main className="product-main">
        <h1>Scanning Software</h1>
        <div className="product-grid">
          {scanningSoftwareProducts.map((prod, idx) => (
            <div className="product-card" key={idx} style={{ position: 'relative' }}>
              <img src={prod.image} alt={prod.name} className="product-image" />
              <div className="product-info">
                <h3>{prod.name}</h3>
                <p>{prod.type}</p>
                <Link to={`/products/scanning-software/${prod.slug}`} className="view-item-btn">View Item</Link>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default ScanningSoftware; 