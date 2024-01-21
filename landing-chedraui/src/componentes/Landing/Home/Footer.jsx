import appandroid from "../../../assets/img/google-play.svg";
import appcloud from "../../../assets/img/app-store.svg";
import gallery from "../../../assets/img/app-gallery.svg";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 py-8 md:py-16 m-8 p-6 md:p-20 flex flex-wrap justify-between">
      {/* Nosotros */}
      <div className="w-full sm:w-1/2 md:w-1/4 mb-8 md:mb-0 pl-4 border-r border-gray-300">
        <h4 className="text-xl font-monserrat font-semibold text-customBlue mb-4">Nosotros</h4>
        <ul className="font-monserrat font-normal">
              <li className="mt-2">Grupo Chedraui</li>
              <li className="mt-2">Sitio Corporativo</li>
              <li className="mt-2">Trabaja con nosotros</li>
              <li className="mt-2">Proveedores</li>
              <li className="mt-2">Sustentabilidad</li>
              <li className="mt-2">Ley anti-lavado de dinero</li>
            </ul>
      </div>

      {/* Servicio al cliente - encabezado */}
      <div className="w-full sm:w-1/2 md:w-1/4 mb-8 md:mb-0 pl-4 border-r border-gray-300">
        <h4 className="text-xl font-monserrat font-semibold text-customBlue mb-4">Servicio al cliente </h4>
        <ul className="font-monserrat font-normal">
              <li className="mt-2">Medidas frente al COVID</li>
              <li className="mt-2">Proceso de compra</li>
              <li className="mt-2">Formas de pago</li>
              <li className="mt-2">Opciones de entrega</li>
              <li className="mt-2">Cambios y devoluciones</li>
              <li className="mt-2">Promociones vigentes</li>
            </ul>
      </div>

      {/* Resuelve tus dudas - encabezado */}
      <div className="w-full sm:w-1/2 md:w-1/4 mb-8 md:mb-0 pl-4 border-r border-gray-300">
        <h4 className="text-xl font-monserrat font-semibold text-customBlue mb-4">Resuelve tus dudas</h4>
        <ul className="font-monserrat font-normal">
              <li className="mt-2">Medidas frente al COVID</li>
              <li className="mt-2">Proceso de compra</li>
              <li className="mt-2">Formas de pago</li>
              <li className="mt-2">Opciones de entrega</li>
              <li className="mt-2">Cambios y devoluciones</li>
              <li className="mt-2">Promociones vigentes</li>
            </ul>
      </div>

      {/* Podemos ayudarte */}
      <div className="w-full sm:w-1/2 md:w-1/4 mb-8 md:mb-0 pl-4">
        <h4 className="text-xl font-monserrat font-semibold text-customBlue mb-4">Podemos ayudarte</h4>
        <ul className="font-monserrat font-normal">
              <li className="mt-2">Centro de ayuda</li>
              <li className="mt-2">
              Contáctanos - <span className="font-bold">55 5563 2222</span>
              </li>
            </ul>
        
        {/* Tres imágenes pequeñas */}
        <div className="flex flex-col items-start mt-4">
          {/* Inserta aquí tus tres imágenes pequeñas */}
          <img src={appandroid} alt="playsote" className="w-1/3" />
          <img src={appcloud} alt="appsote" className="w-1/3" />
          <img src={gallery} alt="gallery" className="w-1/3" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
