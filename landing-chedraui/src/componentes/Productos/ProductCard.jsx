import PropTypes from 'prop-types';
import { HiStar } from 'react-icons/hi';
import { BsCart2 } from 'react-icons/bs';
import { useCart } from '../Carrito/CartContext';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const { cartItems, addToCart, removeFromCart } = useCart();

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < Math.floor(rating); i++) {
      stars.push(<HiStar key={i} className="text-yellow-400" />);
    }
    return stars;
  };

  const isProductInCart = (productId) => {
    return cartItems.some((item) => item.id === productId);
  };

  const handleCartAction = () => {
    if (isProductInCart(product.id)) {
      removeFromCart(product.id);
    } else {
      addToCart(product);
    }
  };

  return (
    <div className="relative m-4 sm:m-6 lg:m-8 mx-auto flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
      {/* Imagen */}
      <Link to={`/detalle-producto/${product.id}`}>
        <img
          className="object-contain w-full h-48 sm:h-60 md:h-72 lg:h-80"
          src={product.image || ''}
          alt={product.title || ''}
        />
        <span className="absolute top-0 left-0 m-2 rounded-full bg-customBlue px-2 text-center text-sm font-medium text-white">Nuevo</span>
      </Link>

      {/* Contenido */}
      <div className="mt-4 px-4 sm:px-6 pb-6">
        {/* Título */}
        <Link to={`/detalle-producto/${product.id}`}>
          <h5 className="tracking-tight text-slate-900 text-sm font-montserrat font-semibold">{product.title || ''}</h5>
        </Link>

        {/* Precio y Calificación */}
        <div className="mt-2 mb-4 sm:mb-6 flex items-center justify-between">
          <p>
            <span className="text-3xl font-montserrat font-bold text-slate-900">${product.price || ''}</span>
          </p>
          <div className="flex items-center">
            {renderStars(product.rating.rate)}
            <span className="mr-2 ml-3 rounded bg-yellow-300 px-2.5 py-0.5 text-xs font-montserrat font-semibold">{product.rating.rate}</span>
          </div>
        </div>

        {/* Botón de Carrito */}
        <button
          onClick={handleCartAction}
          className={`flex items-center justify-center rounded-md ${isProductInCart(product.id) ? 'bg-red-500' : 'bg-[#e57308]'} px-4 sm:px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-customBlue focus:outline-none focus:ring-4 focus:ring-${isProductInCart(product.id) ? 'red-300' : 'blue-300'} mt-2`}
        >
          <BsCart2 className="text-white text-xl mr-2 h-6 w-6"/>
          {isProductInCart(product.id) ? 'Eliminar del carrito' : 'Agregar al carrito'}
        </button>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    rating: PropTypes.shape({
      rate: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};

export default ProductCard;
