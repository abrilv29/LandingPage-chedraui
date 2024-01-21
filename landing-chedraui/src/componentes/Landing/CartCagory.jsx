import { Link } from 'react-router-dom';
import { MdOutlineArrowRightAlt } from 'react-icons/md';
import joyeria from"../../assets/img/joyeria.png";
import jacket from"../../assets/img/jacket.png";

function CartCagory() {
  return (
        <section>
          <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">
              <div className="grid place-content-center rounded bg-gray-100 p-6 sm:p-8">
                <div className="mx-auto max-w-md text-center lg:text-left">
                  <header>
                    <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">Productos</h2>
    
                    <p className="mt-4 text-gray-500">
                      Explora nuestra selección de productos de alta calidad. Encuentra lo mejor entre los más populares, ¡porque mereces solo lo mejor!
                    </p>
                  </header>
    
                  <Link
                    to="/catalogo-productos"
                    className="mt-8 inline-block rounded border border-orange-500 bg-orange-500 px-12 py-3 text-sm font-medium text-white transition hover:shadow focus:outline-none focus:ring"
                  >
                    Descubre más
                  </Link>
                </div>
              </div>
    
              <div className="lg:col-span-2 lg:py-8">
                <ul className="grid grid-cols-2 gap-4">
                  <li className="flex justify-center items-center">
                    <Link to="/categoria-jeweler" className="group block">
                      <img
                        src={joyeria}
                        alt="joyeria"
                        className="aspect-square w-full rounded object-contain border pl-14"
                      />
    
                      <div className="mt-3">
                        <h3 className="font-medium text-customBlue group-hover:underline group-hover:underline-offset-4 font-monserrat">
                          Joyería
                        </h3>
    
                        <p className="mt-1 text-xl  text-customBlue">
                          <MdOutlineArrowRightAlt />
                        </p>
                      </div>
                    </Link>
                  </li>
    
                  <li className="flex items-center justify-center">
                    <Link to="/categoria-mens" className="group block">
                      <img
                        src={jacket}
                        alt=""
                        className="aspect-square w-full rounded object-contain border"
                      />
    
                      <div className="mt-3">
                        <h3 className="font-medium text-customBlue group-hover:underline group-hover:underline-offset-4 font-monserrat">
                          Mens
                        </h3>
    
                        <p className="mt-1 text-xl text-customBlue">
                          <MdOutlineArrowRightAlt />
                        </p>
                      </div>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
    );
  }
export default CartCagory