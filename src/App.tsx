import React, { useEffect, useState } from 'react';
import { fetchProducts, Product } from './api';
import ProductCard from './components/ProductCard';

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

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const productId = e.target.value;
    const product = products.find((p) => p.id === parseInt(productId, 10)) || null;
    setSelectedProduct(product);
  };

  return (
    <div>
      <select onChange={handleChange}>
        <option value="">Select a product</option>
        {products.map((product) => (
          <option key={product.id} value={product.id}>
            {product.title}
          </option>
        ))}
      </select>

      {selectedProduct ? (
        <ProductCard product={selectedProduct} />
      ) : (
        <p>No product selected</p>
      )}
    </div>
  );
};

export default App;
