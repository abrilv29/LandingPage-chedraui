import { useEffect, useState } from 'react';
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

  const filteredProduct = searchResults.find((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col">
      <h2 className=" my-4 mx-7 text-2xl font-monserrat font-bold text-customBlue">Resultados de búsqueda para: {searchTerm}</h2>
      {loading ? (
        <p>Cargando resultados...</p>
      ) : filteredProduct ? (
        
          <div key={filteredProduct.id} className="flex flex-row items-center border p-8 m-8 rounded-2xl">
            <div className="flex mx-6">
            <img src={filteredProduct.image} alt={filteredProduct.title}  className= "shadow-xl rounded-2xl my-4 "/>
            </div>

             {/* Card body - Detalles del producto*/}

            <div className="flex flex-1 flex-col ">
              <h3 className="text-customBlue text-4xl font-medium font-monserrat my-4">{filteredProduct.title}</h3>
              <p className="my-3 text-neutral-600 font-monserrat font-normal text-lg">{filteredProduct.description}</p>
              <p className="my-2 text-neutral-900 font-monserrat font-bold text-3xl">${filteredProduct.price}</p>
              <p className="my-3  text-gray-700 font-monserrat font-semibold text-xl">Categoría: {filteredProduct.category}</p>
              <p className="my-3">Calificación: {filteredProduct.rating.rate}</p>
              <p className="my-3">Recuento de Calificaciones: {filteredProduct.rating.count}</p>

              {/* Carrito de compras*/}
              <p>Información adicional para el producto buscado</p>
              <button>Agregar al Carrito</button>

            </div>
        </div> //envuelve a todos
      ) : (
        <p>No se encontraron resultados.</p>
      )}
    </div>
  );
};

export default SearchResults;
