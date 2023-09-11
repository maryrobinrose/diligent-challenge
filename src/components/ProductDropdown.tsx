import React from 'react';
import { Product } from '../api';

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
    <div>
      <label htmlFor="productDropdown">Select a Product:</label>
      <select id="productDropdown" onChange={handleChange}>
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
