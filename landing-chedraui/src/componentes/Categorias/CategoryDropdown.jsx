import { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiMenuAlt2 } from "react-icons/hi";
import { GiBigDiamondRing } from "react-icons/gi";
import { IoShirtOutline } from "react-icons/io5";

const CategoryDropdown = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleCategoryClick = () => {
    // Ocultar el menú cuando se selecciona una categoría
    setShowMenu(false);
  };

  return (
    <div className="relative z-50 flex items-center">
      <button onClick={() => setShowMenu(!showMenu)}>
        <HiMenuAlt2 className="text-orange-500 text-3xl" />
      </button>

      <div className={`absolute top-12 right-0 bg-white border border-gray-300 p-3 ${showMenu ? '' : 'hidden'}`}>
        <span className="text-customBlue font-semibold font-monserrat text-base">Categorías</span>

        <div className="flex items-center">
          <Link to="/categoria-jeweler" className="flex items-center text-lg hover:text-gray-700" onClick={handleCategoryClick}>
            <GiBigDiamondRing className="text-orange-500 text-sm mr-2" />
            Jeweler
          </Link>

          <Link to="/categoria-mens" className="flex items-center text-lg hover:text-gray-700 ml-4" onClick={handleCategoryClick}>
            <IoShirtOutline className="text-orange-500 text-sm mr-2" />
            Mens
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CategoryDropdown;
