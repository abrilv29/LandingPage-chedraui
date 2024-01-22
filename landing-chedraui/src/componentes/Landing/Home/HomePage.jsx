import ProductAll from "../../Productos/ProductAll";
import CartCagory from "../CartCagory";
import Newsletter from "./Newsletter";
import Footer from "./Footer";
import Online from "../Online";
import CarouselMarcas from "../CarrucelMarcas";
import HeaderPage from "./HeaderPage";
import Ofertas from "../Ofertas";

function HomePage() {
  return (
    <div className="container mx-auto">
      <HeaderPage />
      <CartCagory />
      <ProductAll />
      <Online />
      <Ofertas />
      <CarouselMarcas />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default HomePage;
