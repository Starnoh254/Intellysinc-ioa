import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const productLinks = [
  { name: 'Avision Scanners', path: '/avision-scanners' },
  { name: 'Brother Scanners', path: '/brother-scanners' },
  { name: 'Canon Scanners', path: '/canon-scanners' },
  { name: 'Fujitsu-RICOH Scanners', path: '/fujitsu-ricoh-scanners' },
  { name: 'Kodak Scanners', path: '/kodak-scanners' },
  { name: 'Microfilm Scanners', path: '/microfilm-scanners' },
  { name: 'Iris Scanners', path: '/iris-scanners' },
  { name: 'Scanning Software', path: '/scanning-software' },
];

export default function ProductSidebar() {
  const location = useLocation();
  return (
    <aside className="sidebar">
      <h2>Product Categories</h2>
      <ul>
        {productLinks.map(link => (
          <li
            key={link.path}
            className={location.pathname === link.path ? 'active' : ''}
          >
            <Link to={link.path}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </aside>
  );
} 