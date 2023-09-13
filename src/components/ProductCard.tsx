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
        <h1>
          {product.title} <span>{product.category}</span>
        </h1>
        <h2>{product.brand}</h2>
        <h3>${product.price}.00</h3>
        <p>{product.description}</p>
      </div>
    </div>
  );
};

export default ProductCard;
