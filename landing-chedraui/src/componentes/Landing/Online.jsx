import { FaShieldAlt } from 'react-icons/fa';
import { LiaShippingFastSolid } from "react-icons/lia";
import { RiMoneyDollarCircleLine } from "react-icons/ri";

function Online() {
  return (
    <div className="bg-white">
    <div className="text-center text-customBlue py-6 text-4xl font-montserrat font-semibold">
      Siempre en línea contigo
    </div>
    <div className="flex justify-around text-customBlue py-4">
      <div className="flex flex-col items-center">
        <FaShieldAlt className="text-orange-500 text-6xl" />
        <p className="text-sm font-montserrat">Compra 100% segura</p>
      </div>
      <div className="flex flex-col items-center">
        <LiaShippingFastSolid className="text-orange-500 text-6xl " />
        <p className="text-sm font-montserrat">Envío a domicilio en el horario que elijas</p>
      </div>
      <div className="flex flex-col items-center">
      <RiMoneyDollarCircleLine  className="text-orange-500 text-6xl" />
        <p className="text-sm font-montserrat">Paga en línea o a contraentrega</p>
      </div>
    </div>
  </div>

  )
}

export default Online;