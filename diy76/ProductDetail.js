import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { productId } = useParams(); // Extract the product ID from the URL

  return (
    <div>
      <h2>Product Detail</h2>
      <p>You are viewing Product {productId}</p>
    </div>
  );
};

export default ProductDetail;
