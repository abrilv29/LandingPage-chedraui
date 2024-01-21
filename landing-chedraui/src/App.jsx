import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavMenu from "./componentes/Landing/Home/NavMenu";
import SearchResults from "./componentes/Landing/SearchProduct/SearchBar";
import HomePage from "./componentes/Landing/Home/HomePage";

const App = () => {
  return (
    <Router>
      <NavMenu />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/resultados-busqueda" element={<SearchResults />} />
      </Routes>
    </Router>
  );
};

export default App;