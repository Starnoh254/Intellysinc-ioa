import React from 'react';
import './Book2NetFilterBar.css';

const filterCategories = [
  'ALL',
  '3D',
  'A0',
  'A1',
  'A2',
  'A3',
  'ARCHIVE SCANNERS',
  'BOOK SCANNERS',
  'CAMERAS',
];

const Book2NetFilterBar = ({ activeFilter, setActiveFilter }) => {
  return (
    <div className="book2net-filter-bar">
      <ul>
        {filterCategories.map((category) => (
          <li
            key={category}
            className={activeFilter === category ? 'active' : ''}
            onClick={() => setActiveFilter(category)}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Book2NetFilterBar;
