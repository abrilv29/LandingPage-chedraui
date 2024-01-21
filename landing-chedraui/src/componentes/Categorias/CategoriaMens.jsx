import { useEffect, useState } from 'react';
import axios from 'axios';
import ProductList from '../Productos/ProductList';

const CategoriaMens = () => {
  
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products/category/men\'s%20clothing');
        setProducts(response.data);
        console.log(response);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <ProductList productList={products} />
  );
};

export default CategoriaMens;
