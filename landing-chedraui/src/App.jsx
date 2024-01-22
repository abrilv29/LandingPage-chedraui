// En App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavMenu from "./componentes/Landing/Home/NavMenu";
import SearchResults from "./componentes/Landing/SearchProduct/SearchResult";
import HomePage from "./componentes/Landing/Home/HomePage";
import CartDetails from "./componentes/Carrito/CartDetails";
import CategoriaMens from "./componentes/Categorias/CategoriaMens";
import CategoriaJeweler from "./componentes/Categorias/CategoriaJeweler";
import ProductAll from "./componentes/Productos/ProductAll";
import { CartProvider } from "./componentes/Carrito/CartContext";
import ProductDescription from "./componentes/Productos/ProductDescription";
import NoFound from "./componentes/Landing/Home/NoFound";


const App = () => {

  return (
    <Router>
     <CartProvider>
      <NavMenu />
      <Routes>
        <Route
          path="/"
          element={<HomePage />}
        />
        <Route
          path="/resultados-busqueda"
          element={<SearchResults />}
        />
        <Route
          path="/detalles-compra"
          element={<CartDetails />}
        />
        <Route
          path="/categoria-jeweler"
          element={<CategoriaJeweler />}
        />
        <Route
          path="/categoria-mens"
          element={<CategoriaMens />}
        />
        <Route
          path="/catalogo-productos"
          element={<ProductAll />}
        />
           <Route
            path="/detalle-producto/:id" 
            element={<ProductDescription />}
          />
            <Route
            path="/pagina-de-error"
            element={<NoFound />}
          />
        </Routes>
      </CartProvider>
    </Router>
    );
  };
  

export default App;
