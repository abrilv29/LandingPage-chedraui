import { useEffect, useState } from 'react';
import axios from 'axios';
import ProductList from "../Productos/ProductList"
import Breadcrumb from '../Landing/Breadcrumb';

const CategoriaJeweler = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products/category/jewelery');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <><Breadcrumb />
    <ProductList productList={products} />
    </>
  );
};

export default CategoriaJeweler;
