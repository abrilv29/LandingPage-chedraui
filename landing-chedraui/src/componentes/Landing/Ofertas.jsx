import ejercicio from "../../assets/img/banner-gym.png";
import sonido from "../../assets/img/banner-sonido.png";
import juguetes from "../../assets/img/juguetes.png";
import telefonia from "../../assets/img/banner-cel.png";
import laptop from "../../assets/img/banner-computadora.png";
import envios from "../../assets/img/banner-envio.png";




function Ofertas() {
    return (

        <>
            <div className="flex items-start">
                <h3 className="text-customBlue font-medium font-monserrat text-3xl mx-4">Nuestras ofertas</h3>
            </div>
            <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-24 flex items-center">
                <div className="-m-1 flex flex-row sm:flex-wrap md:-m-2">
                    <div className="flex w-full sm:w-1/2 flex-wrap lg:flex-row flex-row-reverse">
                        <div className="w-full lg:w-1/2 p-1 md:p-2">
                            <img
                                src={envios}
                                alt="envios"
                                className="block h-full w-full rounded-lg 2xl:rounded-2xl object-fill md:object-cover object-center" />
                        </div>
                        <div className="w-full lg:w-1/2 p-1 md:p-2">
                            <img
                                src={telefonia}
                                alt="telefonia"
                                className="block h-full w-full rounded-lg 2xl:rounded-2xl object-fill md:object-cover object-center" />
                        </div>
                        <div className="w-full p-1 md:p-2">
                            <img
                                src={sonido}
                                alt="videojuegos"
                                className="block h-full w-full rounded-lg 2xl:rounded-2xl object-fill md:object-cover object-center max-h-none lg:max-h-[1000px]" />
                        </div>
                    </div>
                    <div className="flex w-full sm:w-1/2 flex-wrap">
                        <div className="w-full p-1 md:p-2">
                            <img
                                src={ejercicio}
                                alt="ejercicio"
                                className="block h-full w-full rounded-lg 2xl:rounded-2xl object-cover object-center md:object-contain"  />
                        </div>
                        <div className="w-1/2 p-1 md:p-2">
                            <img
                                src={juguetes}
                                alt="juguetes"
                                className="block h-full w-full rounded-lg 2xl:rounded-2xl object-cover object-center" />
                        </div>
                        <div className="w-1/2 p-1 md:p-2">
                            <img
                                src={laptop}
                                alt="laptop"
                                className="block h-full w-full rounded-lg 2xl:rounded-2xl object-cover object-center" />
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}
export default Ofertas;
