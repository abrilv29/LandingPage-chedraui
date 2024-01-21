// SearchResults.jsx
import { useEffect, useState } from 'react';
import ProductList from "../../Productos/ProductList"
import { useLocation } from 'react-router-dom';

const SearchResults = () => {
  const location = useLocation();
  const searchTerm = new URLSearchParams(location.search).get('query');
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products?title=${searchTerm}`);
        const data = await response.json();
        setSearchResults(data);
      } catch (error) {
        console.error('Error fetching search results:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchSearchResults();
  }, [searchTerm]);

  const filterFunction = (product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase());

  return (
    <div className="flex flex-col">
      <h2 className="my-4 mx-7 text-2xl font-monserrat font-bold text-customBlue">Resultados de búsqueda para: {searchTerm}</h2>
      {loading ? (
        <p>Cargando resultados...</p>
      ) : searchResults.length > 0 ? (
        <ProductList productList={searchResults} filterFunction={filterFunction} />
      ) : (
        <p>No se encontraron resultados.</p>
      )}
    </div>
  );
};

export default SearchResults;
