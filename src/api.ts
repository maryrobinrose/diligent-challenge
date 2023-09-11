import axios from 'axios';

export interface Product {
  id: number;
  title: string;
  brand: string;
  category: string;
  price: number;
  description: string;
  thumbnail: string;
}

export const fetchProducts = async (): Promise<Product[]> => {
  try {
    const response = await axios.get('https://dummyjson.com/products');
    return response.data.products;
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
};
