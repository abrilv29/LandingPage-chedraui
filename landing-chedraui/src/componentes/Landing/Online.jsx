import pago from "../../assets/img/pago.png";
import seguridad from "../../assets/img/seguridad.png";
import camion from "../../assets/img/camion.png";

function Online() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-monserrat font-bold text-customBlue sm:text-4xl">Siempre en línea contigo</h2>
        </div>

        <div className="mt-8 sm:mt-12">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="flex flex-col items-center justify-center rounded-lg border border-gray-100 px-4 py-8 text-center">
              <img src={seguridad} alt="" className="mx-auto mb-4 w-16 h-16 object-contain" />
              <p className="text-lg font-medium text-gray-500">Compra 100% segura</p>
            </div>

            <div className="flex flex-col items-center justify-center rounded-lg border border-gray-100 px-4 py-8 text-center">
              <img src={camion} alt="" className="mx-auto mb-4 w-16 h-16 object-contain" />
              <p className="text-lg font-medium text-gray-500">
                Envío a domicilio en el horario que elijas
              </p>
            </div>

            <div className="flex flex-col items-center justify-center rounded-lg border border-gray-100 px-4 py-8 text-center">
              <img src={pago} alt="" className="mx-auto mb-4 w-16 h-16 object-contain" />
              <p className="text-lg font-medium text-gray-500">Paga en línea o contraentrega</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Online;
