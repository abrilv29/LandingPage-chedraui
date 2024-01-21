import { FaFacebook, FaInstagram, FaTwitter, FaTiktok, FaYoutube } from 'react-icons/fa';

const Newsletter = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center p-4 bg-orange-400 font-medium font-monserrat">
      {/* Lado izquierdo - Ofertas */}
      <div className="lg:ml-4 text-white mb-4 lg:mb-0">
        <p>¡Regístrate y recibe las mejores ofertas!</p>
      </div>

      {/* Centro - Formulario de Registro */}
      <div className="flex-shrink w-full lg:w-1/2 mx-4 flex mb-4 lg:mb-0"> {/* Ajustar el tamaño del contenedor del input y botón */}
        <input
          type="email"
          placeholder="Tu correo electrónico"
          className="w-full p-2 border rounded-sm"
        />
        <button className="bg-blue-500 text-white p-2 ml-2 rounded-sm lg:ml-4">Registrarse</button> {/* Ajustar el tamaño del botón y agregar margen izquierdo */}
      </div>

      {/* Lado derecho - Redes Sociales */}
      <div className="flex items-center flex-col">
        <span className="mb-2 lg:mb-0 text-white">Síguenos en nuestras redes:</span>
        <div className="flex">
          <a href="#" className="mr-2 text-2xl text-white">
            <FaFacebook />
          </a>
          <a href="#" className="mr-2 text-2xl text-white">
            <FaInstagram />
          </a>
          <a href="#" className="mr-2 text-2xl text-white">
            <FaTwitter />
          </a>
          <a href="#" className="mr-2 text-2xl text-white">
            <FaTiktok />
          </a>
          <a href="#" className="mr-2 text-2xl text-white">
            <FaYoutube />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
