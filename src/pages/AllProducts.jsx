import React from 'react';

// Example data structure for all 11 product categories
const productCategories = [
  {
    category: 'Avision Scanners',
    products: [
      { name: 'ad225wn', image: `${import.meta.env.BASE_URL}images/kodak-products/avision-ad225wn.jpg`, specs: ['Type: Document Scanner'] },
      { name: 'ad225', image: `${import.meta.env.BASE_URL}images/kodak-products/avision-ad225.jpg`, specs: ['Type: Document Scanner'] },
      // ...add all Avision products
    ]
  },
  {
    category: 'Brother Scanners',
    products: [
      { name: 'Brother DS-740D', image: `${import.meta.env.BASE_URL}images/kodak-products/brother-ds-740d.jpg`, specs: ['Type: Mobile Scanner'] },
      { name: 'Brother DS-940DW', image: `${import.meta.env.BASE_URL}images/kodak-products/brother-ds-940dw.jpg`, specs: ['Type: Mobile Scanner'] },
      // ...add all Brother products
    ]
  },
  {
    category: 'Canon Scanners',
    products: [
      { name: 'DR-F120', image: `${import.meta.env.BASE_URL}images/kodak-products/canon-dr-f120.jpg`, specs: ['Type: Flatbed Scanner'] },
      { name: 'DR-G2090', image: `${import.meta.env.BASE_URL}images/kodak-products/canon-dr-g2090.jpg`, specs: ['Type: Production Scanner'] },
      // ...add all Canon products
    ]
  },
  {
    category: 'Document Management System',
    products: [
      { name: 'EDMS', image: `${import.meta.env.BASE_URL}images/kodak-products/edms.jpg`, specs: ['Type: Electronic Document Management'] },
    ]
  },
  {
    category: 'Fujitsu-RICOH Scanners',
    products: [
      { name: 'ScanSnap S1100i', image: `${import.meta.env.BASE_URL}images/kodak-products/fujitsu-scansnap-s1100i.jpg`, specs: ['Type: ScanSnap Series'] },
      { name: 'fi-7240', image: `${import.meta.env.BASE_URL}images/kodak-products/fujitsu-fi-7240.jpg`, specs: ['Type: Flatbed Series'] },
      // ...add all Fujitsu-RICOH products
    ]
  },
  {
    category: 'Kodak Scanners',
    products: [
      { name: 'ScanMate i940', image: `${import.meta.env.BASE_URL}images/kodak-products/scanmate-i940.jpg`, specs: ['Type: Scanmate Series'] },
      { name: 'Alaris S2070', image: `${import.meta.env.BASE_URL}images/kodak-products/alaris-s2070.jpg`, specs: ['Type: S 2000 Series'] },
      // ...add all Kodak products
    ]
  },
  {
    category: 'Microfilm Scanners',
    products: [
      { name: 'ScanPro 2500', image: `${import.meta.env.BASE_URL}images/kodak-products/scanpro-2500.jpg`, specs: ['Type: ScanPro Series'] },
      // ...add all Microfilm products
    ]
  },
  {
    category: 'Scanning Software',
    products: [
      { name: 'Kodak Capture Pro', image: `${import.meta.env.BASE_URL}images/kodak-products/kodak-capture-pro.jpg`, specs: ['Type: Scanning Software'] },
      { name: 'Kofax Express', image: `${import.meta.env.BASE_URL}images/kodak-products/kofax-express.jpg`, specs: ['Type: Scanning Software'] },
      // ...add all Scanning Software products
    ]
  },
  {
    category: 'Electronic Document Management Software',
    products: [
      { name: 'EDMS', image: `${import.meta.env.BASE_URL}images/kodak-products/edms-software.jpg`, specs: ['Type: Document Management Software'] },
      // ...add all EDMS products
    ]
  },
  {
    category: 'Other Products',
    products: [
      // Add any other main product page or subcategory products here
    ]
  }
];

const AllProducts = () => (
  <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
    <h1>All Product Categories</h1>
    <p>Extracted from Lonestar Enterprises Products section. Images are placeholders; update with real images as needed.</p>
    {productCategories.map((cat, idx) => (
      <section key={idx} style={{ marginBottom: '3rem' }}>
        <h2 style={{ borderBottom: '2px solid #eee', paddingBottom: '0.5rem' }}>{cat.category}</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem' }}>
          {cat.products.map((prod, pidx) => (
            <div key={pidx} style={{ border: '1px solid #ccc', borderRadius: 8, padding: '1rem', width: 260, background: '#fafafa' }}>
              <img src={prod.image} alt={prod.name} style={{ width: '100%', height: 120, objectFit: 'contain', marginBottom: 8, background: '#fff' }} />
              <h3 style={{ fontSize: '1.1rem', margin: '0 0 0.5rem' }}>{prod.name}</h3>
              <ul style={{ paddingLeft: 18, margin: 0 }}>
                {prod.specs.map((spec, sidx) => (
                  <li key={sidx} style={{ fontSize: 14 }}>{spec}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    ))}
  </div>
);

export default AllProducts; 