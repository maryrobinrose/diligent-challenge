import React, { useState } from 'react';
import { Product } from '../api';
import './ProductDropdown.css';

interface ProductDropdownProps {
  products: Product[];
  onSelect: (product: Product | null) => void;
}

const ProductDropdown: React.FC<ProductDropdownProps> = ({ products, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (product: Product) => {
    setSelectedProduct(product);
    setIsOpen(false);
    onSelect(product);
  };

  return (
    <div className={`dropdown ${isOpen ? 'open' : ''}`} onClick={handleToggle}>
      <div className="dropdown-list">
          {selectedProduct ? selectedProduct.title : 'Select a product'}
      </div>
        <div className={`options ${isOpen ? 'show' : ''}`}>
          {products.map((product) => (
            <div
              key={product.id}
              className="option"
              onClick={() => handleSelect(product)}
            >
              {product.title}
            </div>
          ))}
      </div>
    </div>
  );
};

export default ProductDropdown;
