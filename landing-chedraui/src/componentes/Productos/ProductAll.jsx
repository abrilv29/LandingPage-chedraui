import { useEffect, useState } from "react";
import { HiStar } from "react-icons/hi";
import { BsCart2 } from "react-icons/bs";
import { useCart } from "../Carrito/CartContext";

function ProductAll() {
  const [products, setAllProducts] = useState([]);
  const { addToCart } = useCart();

  const allProducts = async () => {
    const data = await fetch("https://fakestoreapi.com/products");
    const productsData = await data.json();
    setAllProducts(productsData);
  };

  useEffect(() => {
    allProducts();
  }, []);

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < Math.floor(rating); i++) {
      stars.push(<HiStar key={i} className="text-yellow-400" />);
    }
    return stars;
  };

  return (
    <div className="container mx-auto max-w-screen-xl p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <div key={product.id} className="relative m-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
            <a className="relative mx-auto mt-3 flex h-60 overflow-hidden rounded-xl" href="#">
              <img
                className="object-contain w-full"
                src={product.image || ""}
                alt={product.title || ""}
              />
              <span className="absolute top-0 left-0 m-2 rounded-full bg-customBlue px-2 text-center text-sm font-medium text-white">Nuevo</span>
            </a>
            <div className="mt-4 px-5 pb-5">
              <a href="#">
                <h5 className="tracking-tight text-slate-900 text-sm font-montserrat font-semibold">{product.title || ""}</h5>
              </a>
              <div className="mt-2 mb-5 flex items-center justify-between">
                <p>
                  <span className="text-3xl font-montserrat font-bold text-slate-900">${product.price || ""}</span>
                </p>
                <div className="flex items-center">
                  {renderStars(product.rating.rate)}
                  <span className="mr-2 ml-3 rounded bg-yellow-300 px-2.5 py-0.5 text-xs font-montserrat font-semibold">{product.rating.rate}</span>
                </div>
              </div>
              <a
                onClick={() => addToCart(product)}
                href="#"
                className="flex items-center justify-center rounded-md bg-[#e57308] px-4 sm:px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-customBlue focus:outline-none focus:ring-4 focus:ring-blue-300"
              >
                <BsCart2 className="text-white text-xl mr-2 h-6 w-6"/>
                Agregar al carrito
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductAll;
