import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import kodakProducts from './KodakScanners';
import { avisionProducts } from './AvisionScanners';
import { brotherProducts } from './BrotherScanners';
import { canonProducts } from './CanonScanners';
import ProductInfo from '../components/ProductInfo';

// Map category to product array
const categoryMap = {
  'kodak-scanners': kodakProducts,
  'avision-scanners': avisionProducts,
  'brother-scanners': brotherProducts,
  'canon-scanners': canonProducts,
  // ...add more as needed
};

const ProductDetail = () => {
  const { category, productSlug } = useParams();
  const navigate = useNavigate();
  const products = categoryMap[category] || [];
  const product = products.find(p => p.slug === productSlug);

  if (!product) {
    return <div style={{ padding: 40 }}><h2>Product Not Found</h2><button onClick={() => navigate(-1)}>Go Back</button></div>;
  }

  return <ProductInfo product={product} />;
};

export default ProductDetail; 