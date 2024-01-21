import ProductAll from "../../Productos/ProductAll"
import CartCagory from "../CartCagory"
import Newsletter from "./Newsletter"
import Footer from "./Footer"
import Online from "../Online"


function HomePage() {
  return (
    <>
      <CartCagory />
      <ProductAll />
      <Online/>
      <Newsletter/>
      <Footer/>
    </>
  )
}

export default HomePage