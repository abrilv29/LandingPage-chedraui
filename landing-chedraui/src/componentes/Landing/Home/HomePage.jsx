import ProductAll from "../../Productos/ProductAll"
import CartCagory from "../CartCagory"
import Newsletter from "./Newsletter"
import Footer from "./Footer"


function HomePage() {
  return (
    <>
      <CartCagory />
      <ProductAll />
      <Newsletter/>
      <Footer/>
    </>
  )
}

export default HomePage