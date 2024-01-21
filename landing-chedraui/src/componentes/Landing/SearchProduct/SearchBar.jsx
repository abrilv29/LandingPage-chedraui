// components/SearchBar.js
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BsSearch } from "react-icons/bs";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    // Redirección a la página de resultados con React Router
    navigate(`/resultados-busqueda?query=${searchTerm}`);
  };

  return (
<div className="relative">
  <label htmlFor="Search" className="sr-only">Buscar</label>

  <input
    type="text"
    id="Search"
    placeholder="Buscar productos..."
    value={searchTerm}
    onChange={handleSearchChange}
    className="w-96 rounded-md border border-gray-300 py-2.5 px-3 focus:outline-none shadow-sm sm:text-sm"
  />

  <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
    <button type="submit" onClick={handleSearchSubmit} className="text-gray-600 hover:text-gray-700 focus:outline-none">
      <span className="sr-only">Buscar</span>

      <BsSearch
        className="absolute top-0 right-4 mt-2 text-gray-500" size={20}
      />
    </button>
  </span>
</div>
  );
};

export default SearchBar;
