import React from 'react';
import { Product } from '../api';
import './ProductCard.css'; 

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.thumbnail} alt={product.title} className="product-image" />
      <div className="product-details">
        <h2>{product.title}</h2>
        <span>{product.category}</span>
        <h3>{product.brand}</h3>
        <h4>${product.price}</h4>
        <p>{product.description}</p>
      </div>
    </div>
  );
};

export default ProductCard;
