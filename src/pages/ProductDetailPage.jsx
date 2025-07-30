import React from 'react';
import { useParams } from 'react-router-dom';
import { productData } from '../data/productData';
import '../styles/ProductDetailPage.css';

export default function ProductDetailPage() {
  const { productSlug } = useParams();
  const product = productData[productSlug];

  if (!product) {
    return (
      <div className="not-found">
        <h2>Product not found</h2>
        <p>The product you are looking for does not exist.</p>
      </div>
    );
  }

  return (
    <div className="product-detail-container">
      <h2>{product.name}</h2>
      <p className="product-category">{product.category}</p>

      <div className="product-features">
        <h3>Key Features</h3>
        <ul>
          {product.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>

      <div className="product-description">
        <h3>Description</h3>
        <p>{product.shortDescription}</p>
      </div>

      <div className="product-new-features">
        <h3>What's New in 2025!</h3>
        <div className="new-features-grid">
          {Object.entries(product.newFeatures).map(([key, value]) => (
            <div key={key}>
              <strong>{key}</strong>
              <p>{value}</p>
            </div>
          ))}
        </div>
      </div>

      {product.longDescriptions.map((desc, index) => (
        <div key={index} className="product-long-description">
          <h3>{desc.title}</h3>
          <p>{desc.content}</p>
        </div>
      ))}
    </div>
  );
}
