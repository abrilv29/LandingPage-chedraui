import { useEffect, useState } from "react";
import axios from 'axios';  // Importa Axios
import ProductList from "./ProductList"; 

function ProductAll() {
  const [products, setAllProducts] = useState([]);
 
  const allProducts = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");  // Usa axios.get en lugar de fetch
      setAllProducts(response.data);
    } catch (error) {
      console.error("Error en la solicitud:", error);
    }
  };
  
  useEffect(() => {
    allProducts();
  }, []);

  return (
    <>
      <div className="flex items-start">
        <h3 className="text-customBlue font-medium font-monserrat text-3xl mx-4">Encuentra los mejores productos</h3>
      </div>
      <ProductList productList={products} />
    </>
  );
}

export default ProductAll;
