import { Link } from 'react-router-dom';
import { BsCart2 } from 'react-icons/bs';

function CartButton() {
  return (
    <div className="flex items-center flex-row font-montserrat font-medium">
      <Link to="/detalles-compra">
        <BsCart2 className="text-[#e57308]" />
      </Link>
    </div>
  );
}

export default CartButton;
