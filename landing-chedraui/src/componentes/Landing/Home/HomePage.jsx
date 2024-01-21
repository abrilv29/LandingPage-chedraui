import ProductAll from "../../Productos/ProductAll"
import CartCagory from "../CartCagory"
import Newsletter from "./Newsletter"
import Footer from "./Footer"
import Online from "../Online"
import CarouselMarcas from "../CarrucelMarcas"


function HomePage() {
  return (
    <>
      <CartCagory />
      <ProductAll />
      <Online/>
      <CarouselMarcas />
      <Newsletter/>
      <Footer/>

    </>
  )
}

export default HomePage