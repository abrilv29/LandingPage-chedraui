import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavMenu from "./componentes/Landing/Home/NavMenu";
import SearchResults from "./componentes/Landing/SearchProduct/SearchBar";
import HomePage from "./componentes/Landing/Home/HomePage";
import CartDetails from "./componentes/Carrito/CartDetails";
import CategoriaMens from "./componentes/Categorias/CategoriaMens";
import CategoriaJeweler from "./componentes/Categorias/CategoriaJeweler";
const App = () => {
  return (
    <Router>
      <NavMenu />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/resultados-busqueda" element={<SearchResults />} />
        <Route path="/detalles-compra" element={<CartDetails />} />
        <Route path="/categoria-jeweler" element={<CategoriaJeweler />} /> 
        <Route path="/categoria-mens" element={<CategoriaMens />} />

      </Routes>
    </Router>
  );
};

export default App;