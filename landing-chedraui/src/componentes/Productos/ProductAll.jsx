import { useEffect, useState } from "react";
import ProductList from "./ProductList"; 



function ProductAll() {
  const [products, setAllProducts] = useState([]);
 

  const allProducts = async () => {
    try {
      const data = await fetch("https://fakestoreapi.com/products");
      const productsData = await data.json();
      setAllProducts(productsData);
    } catch (error) {
      console.error("Error en la solicitud:", error);
    }
  };
  
  useEffect(() => {
    allProducts();
  }, []);

  // Comenté la función renderStars para evitar el mensaje de advertencia
  // const renderStars = (rating) => {
  //   const stars = [];
  //   for (let i = 0; i < Math.floor(rating); i++) {
  //     stars.push(<HiStar key={i} className="text-yellow-400" />);
  //   }
  //   return stars;
  // };

 // const isProductInCart = (productId) => {
 //   return cartItems.some((item) => item.id === productId);
 // };

  //const handleCartAction = (product) => {
  // if (isProductInCart(product.id)) {
  //    removeFromCart(product.id);
  //  } else {
  //    addToCart(product);
  //  }
 // };

  return (
    <>
    <div className="flex items-start">
      <h3 className="text-customBlue font-medium font-monserrat text-3xl mx-4">Encuentra los mejores productos</h3>
    </div>
    <ProductList productList={products} /></>
  );
}

export default ProductAll;