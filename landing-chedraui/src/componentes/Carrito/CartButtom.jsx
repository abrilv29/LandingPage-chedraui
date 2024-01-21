import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { BsCart2 } from 'react-icons/bs';

function CartButton({ cartItemCount }) {
  console.log(cartItemCount);
  return (
    <div className="flex items-center flex-row font-montserrat font-medium">
      <Link to="/detalles-compra">
        <BsCart2 className="text-[#e57308]" />
        {/* Mostrar el contador solo si hay elementos en el carrito */}
        {cartItemCount > 0 && (
          <span className="bg-red-500 text-white rounded-full px-2 py-1 ml-1">
            {cartItemCount}
          </span>
        )}
      </Link>
    </div>
  );
}

// Validación de propiedades
CartButton.propTypes = {
  cartItemCount: PropTypes.number.isRequired,
};

export default CartButton;
