import React from 'react';
import { Link } from 'react-router-dom';

const ProductPage = () => {
  return (
    <div>
      <h2>Product Page</h2>
      {Array.from({ length: 10 }, (_, i) => (
        <button key={i + 1} style={{ margin: '5px' }}>
          <Link to={`/product/${i + 1}`}>Product {i + 1}</Link>
        </button>
      ))}
    </div>
  );
};

export default ProductPage;
