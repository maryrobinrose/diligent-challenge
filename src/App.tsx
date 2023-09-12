import React, { useEffect, useState } from 'react';
import { fetchProducts, Product } from './api';
import ProductCard from './components/ProductCard';
import ProductDropdown from './components/ProductDropdown';

const App: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchProducts();
      setProducts(data);
    };

    fetchData();
  }, []);

  const handleProductSelect = (product: Product | null) => {
    setSelectedProduct(product);
  };

  return (
    <div>
      <ProductDropdown products={products} onSelect={handleProductSelect} />

      {selectedProduct ? (
        <ProductCard product={selectedProduct} />
      ) : (
        <p>No product selected</p>
      )}
    </div>
  );
};

export default App;
