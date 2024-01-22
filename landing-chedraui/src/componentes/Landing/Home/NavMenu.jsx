import SearchBar from "../SearchProduct/SearchBar";
import LinksNav from "../LinksNav";
import logo from "../../../assets/img/logo.png";
import { TbUser } from "react-icons/tb";
import { SlLocationPin } from "react-icons/sl";
import CartButton from "../../Carrito/CartButtom";
import { useCart } from "../../Carrito/CartContext";
import CategoryDropdown from "../../Categorias/CategoryDropdown";

function NavMenu() {
  const { cartItems } = useCart();

  return (
    <>
      <LinksNav />
      <nav className="container mx-auto p-4">
        <div className="flex flex-col items-center md:flex-row md:justify-between">
          {/* Contenido del logotipo y menú de categorías */}
          <div className="flex items-center space-x-4">
            {/* Contenido del logotipo */}
            <img className="w-40 md:w-32 lg:w-48 h-auto md:h-auto mb-4 md:mb-0" src={logo} alt="logo" />

            {/* Menú de categorías */}
            <CategoryDropdown />
          </div>

          {/* Barra de búsqueda */}
          <div className="flex items-center justify-center w-full md:w-auto md:ml-4">
            <SearchBar />
          </div>

          {/* Íconos de usuario, ubicación y carrito */}
          <div className="flex items-center space-x-4 text-sm md:text-base lg:text-lg m-2">
            <div className="flex items-center font-montserrat font-medium">
              <TbUser className="text-[#e57308]" />
              <span className="ml-2 text-customBlue">Cuenta</span>
            </div>

            <div className="flex items-center font-montserrat font-medium">
              <SlLocationPin className="text-[#e57308]" />
              <span className="ml-2 hidden md:inline text-customBlue">Ubicación</span>
            </div>

            {/* Carrito de compras botón */}
            <CartButton cartItemCount={cartItems.length} />
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavMenu;
