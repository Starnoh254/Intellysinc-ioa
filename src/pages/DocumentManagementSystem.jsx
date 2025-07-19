import React from 'react';
import './DocumentManagementSystem.css';

const dmsProducts = [
  { name: 'EDMS', image: '', type: 'Electronic Document Management' },
];

const DocumentManagementSystem = () => (
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
        <li>Scanning Software</li>
        <li>Servers</li>
      </ul>
    </aside>
    <main className="product-main">
      <h1>Document Management System</h1>
      <div className="product-grid">
        {dmsProducts.map((prod, idx) => (
          <div className="product-card" key={idx}>
            <img src={prod.image} alt={prod.name} className="product-image" />
            <div className="product-info">
              <h3>{prod.name}</h3>
              <p>{prod.type}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  </div>
);

export default DocumentManagementSystem; 