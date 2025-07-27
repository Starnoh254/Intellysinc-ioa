import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductInfo = ({ product, onRequestQuote, style = {} }) => {
  const navigate = useNavigate();

  if (!product) return null;

  if (product.slug === 'cyberglobe-culture') {
    return (
      <div className="product-info-page">
        <h1>{product.name}</h1>
        <img src={product.image} alt={product.name} className="product-info-image" />
        <h2>Designed for detailed 3D imaging</h2>
        <p>
          Capturing an object from all sides without any gaps and presenting it online – it can’t be that difficult, can it? Until now it was, but with the CYBERGLOBE Culture it’s child’s play. Thanks to sophisticated technology. Anyone operating the 3D scanner only needs to press the button once and the device does the rest.
        </p>
        <p>
          What was the challenge so far? If you wanted to digitize an object – let’s take a vase – you couldn’t do it completely and at the same time without distortions. If you place the vase on a table, the underside cannot be photographed, the table is in the way. A glass table wouldn’t help either, as the glass reflects light. If you pick up the vase to capture the underside, inaccuracies arise because the vase has to be moved, and the proportions are no longer correct. Creating complicated constructions to capture the vase from all perspectives is also useless, firstly because it is complicated, secondly because it is time-consuming and thirdly because the auxiliary construction itself gets in the way.
        </p>
        <p>
          With the CYBERGLOBE Culture, on the other hand, you can achieve seamless images, top quality, enormous efficiency and cost-effective production. All at the touch of a button. Anyone can easily operate the CYBERGLOBE Culture, you don’t need to be an IT expert.
        </p>
        <p>
          How is all this possible? Two things are crucial: the 80-megapixel camera, which moves in a semicircle from top to bottom, stops repeatedly and takes pictures, and the object support on which the object is placed. The support table rotates around its own axis in line with the movement of the camera. This enables the object to be captured without any gaps and without any loss of quality. This also applies to objects that are much more flexible than a vase, such as a rope.
        </p>
        <p>
          The four LED lights, the color calibration and the reflector also help to ensure that the digitized object looks exactly like the original, down to the smallest detail. No shadows, no reflections. Another important aspect: the CYBERGLOBE Culture is mobile and can be easily moved to the objects to be digitized.
        </p>
        <p>
          The CYBERGLOBE Culture camera takes pictures from 250 positions, after which the software automatically merges all the images into one large whole. Up to seven objects can be digitized per hour. Anyone operating the CYBERGLOBE Culture only needs to place the object – with a maximum diameter and a maximum height of 46 cm – on the slide and press the button. The process can run in parallel, and you can do something else in the meantime.
        </p>
      </div>
    );
  }

  // Product overview/description
  let overview = product.overview || '';
  if (!overview && product.slug === 'ad225wn') {
    overview = `The AD225WN is a compact and portable scanner designed to enhance productivity with its batch scanning capabilities. Weighing just 1,500 grams and featuring a built-in automatic document feeder (ADF) and card scanner, this device combines flexibility and efficiency, making it an ideal solution for any workplace environment.\n\nScans batches efficiently with a 25-page ADF. Handles a variety of documents, including embossed cards and legal-size paper. Offers dual eject paths for versatile handling. Supports network and Wi-Fi connectivity for shared use. Easy-to-use with one-touch scanning to cloud and applications. Bundled with advanced software for document management and image processing.`;
  }

  // Product specs table
  let specs = product.specs || [];
  // If no specs but details object exists, convert details to specs array
  if ((!specs || specs.length === 0) && product.details && typeof product.details === 'object') {
    specs = Object.entries(product.details).map(([label, value]) => ({ label, value }));
  }
  if ((!specs || specs.length === 0) && product.slug === 'ad225wn') {
    specs = [
      { label: 'A4 Pages Per Min', value: 'B/W @ 200dpi, A4Simplex : 25 ppm; Duplex : 50 ipm B/W @ 300dpi, A4Simplex : 25 ppm; Duplex : 50ipm Color @ 200dpi, A4Simplex : 25 ppm; Duplex : 50 ipm Color @ 300dpi, A4Simplex : 25 ppm; Duplex : 50ipm' },
      { label: 'Max Paper Size', value: '216 x 356 mm (Legal) (8.5 x 14 in.)' },
      { label: 'ADF Capacity', value: '25 SHEETS' },
      { label: 'Duplex Scanning', value: 'YES' },
      { label: 'Dimensions / Weight', value: '299 x 104 x 74 mm' },
      { label: 'Interface', value: 'USB 2.0' },
      { label: 'PC Compatibility', value: 'Win 7, Win 8, Win 10, Win11, Fedora, openSUSE, Debian, Ubuntu, macOS10.12-10.15, macOS11 Big Sur, macOS12 Monterey, macOS13 Ventura, macOS14 Sonoma' },
      { label: 'PC Drivers / Software', value: 'TWAIN Driver, ISIS Driver, Button Manager, PaperPort, AVScan' },
      { label: 'Mac Drivers / Software', value: 'N/A' },
      { label: 'Standard Warranty', value: '1 Year' },
      { label: 'Duty Cycle', value: 'Up to 3,000 sheets per day' },
      { label: 'Network', value: 'Yes + Wi-Fi' },
    ];
  }

  // Product properties table
  let properties = product.properties || [];
  if ((!properties || properties.length === 0) && product.slug === 'ad225wn') {
    properties = [
      { label: 'ADF or Flatbed', value: 'ADF' },
      { label: 'PPM', value: '25 ppm/50 ipm' },
      { label: 'ADF Capacity', value: '25 Sheets (80 g/m²)' },
      { label: 'Duty Cycle', value: 'Up to 3,000 sheets per day' },
      { label: 'Network', value: 'Yes + Wi-Fi' },
    ];
  }

  // Product images gallery
  const images = product.images || (product.image ? [product.image] : []);

  return (
    <div style={{ maxWidth: 1100, margin: '0 auto', background: '#fff', borderRadius: 8, boxShadow: '0 2px 12px #0001', padding: 32, display: 'flex', gap: 40, ...style }}>
      {/* Left: Image Gallery */}
      <div style={{ flex: '0 0 320px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {images.length > 0 && <img src={images[0]} alt={product.name} style={{ width: 280, height: 220, objectFit: 'contain', marginBottom: 16, borderRadius: 8, background: '#fafafa' }} />}
        {images.length > 1 && (
          <div style={{ display: 'flex', gap: 8, marginTop: 8 }}>
            {images.map((img, idx) => (
              <img key={idx} src={img} alt={product.name + ' ' + (idx + 1)} style={{ width: 60, height: 48, objectFit: 'contain', borderRadius: 4, background: '#f2f2f2', border: '1px solid #eee' }} />
            ))}
          </div>
        )}
      </div>
      {/* Right: Product Info */}
      <div style={{ flex: 1, minWidth: 0 }}>
        <h1 style={{ marginBottom: 8 }}>{product.name}</h1>
        <div style={{ color: '#1976d2', fontWeight: 600, marginBottom: 16 }}>{product.type}</div>
        <button
          style={{ background: '#43a047', color: '#fff', fontWeight: 600, border: 'none', borderRadius: 4, padding: '12px 32px', fontSize: 18, marginBottom: 24, cursor: 'pointer' }}
          onClick={() => onRequestQuote ? onRequestQuote(product) : navigate(`/contact?subject=${encodeURIComponent(product.name)}`)}
        >
          Request Quotation
        </button>
        <div style={{ marginBottom: 24 }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', background: '#fafcff', borderRadius: 8, overflow: 'hidden' }}>
            <tbody>
              {specs.map((row, idx) => (
                <tr key={idx} style={{ borderBottom: '1px solid #f0f0f0' }}>
                  <td style={{ fontWeight: 600, padding: '8px 12px', color: '#333', width: 220 }}>{row.label}</td>
                  <td style={{ padding: '8px 12px', color: '#444' }}>{row.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {overview && (
          <div style={{ marginBottom: 32 }}>
            <h2 style={{ fontSize: 20, margin: '18px 0 8px' }}>Product Overview</h2>
            <div style={{ color: '#444', lineHeight: 1.7, whiteSpace: 'pre-line' }}>{overview}</div>
          </div>
        )}
        {properties && properties.length > 0 && (
          <div style={{ marginBottom: 32 }}>
            <h3 style={{ fontSize: 17, margin: '18px 0 8px' }}>Some important properties include:</h3>
            <table style={{ width: '100%', borderCollapse: 'collapse', background: '#f7f7fa', borderRadius: 8, overflow: 'hidden' }}>
              <tbody>
                {properties.map((row, idx) => (
                  <tr key={idx} style={{ borderBottom: '1px solid #f0f0f0' }}>
                    <td style={{ fontWeight: 600, padding: '7px 12px', color: '#333', width: 180 }}>{row.label}</td>
                    <td style={{ padding: '7px 12px', color: '#444' }}>{row.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductInfo; 