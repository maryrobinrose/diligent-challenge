import React from 'react';
import { Product } from '../api';
import './ProductDropdown.css';

interface ProductDropdownProps {
  products: Product[];
  onSelect: (product: Product | null) => void;
}

const ProductDropdown: React.FC<ProductDropdownProps> = ({ products, onSelect }) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const productId = parseInt(e.target.value, 10);
    const selectedProduct = products.find((product) => product.id === productId) || null;
    onSelect(selectedProduct);
  };

  return (
    <div className="dropdown-container">
      <select id="productDropdown" onChange={handleChange} className="dropdown">
        <option value="">Select a product</option>
        {products.map((product) => (
          <option key={product.id} value={product.id}>
            {product.title}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ProductDropdown;
