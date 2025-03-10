import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PHeader from './ProductHeader';
import ProductPage from './ProductPage';
import ProductDetail from './ProductDetail';

const Router1 = () => {
  return (
    <BrowserRouter>
      <PHeader />
      <Routes>
   
        <Route path="/" element={<ProductPage />} />
        <Route path="/product/:productId" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router1;
