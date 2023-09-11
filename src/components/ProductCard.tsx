import React from 'react';
import { Product } from '../api';  

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div>
      <h2>{product.title}</h2>
      <h3>{product.brand}</h3>
      <h4>${product.price}</h4>
      <span>{product.category}</span>
      <p>{product.description}</p>
      <img src={product.thumbnail} alt={product.title} />
    </div>
  );
};

export default ProductCard;
