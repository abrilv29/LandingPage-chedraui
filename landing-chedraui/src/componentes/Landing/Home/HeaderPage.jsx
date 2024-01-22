import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import linea from "../../../assets/img/banner-linea.png";
import nutricion from "../../../assets/img/slider-dos.png";
import verduras from "../../../assets/img/slider-uno.png";
import aseo from "../../../assets/img/aseo.png";
import small from "../../../assets/img/banner-small.png";

function HeaderPage() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Mostrar dos imágenes a la vez
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1, // Mostrar solo una imagen en pantallas pequeñas
        },
      },
    ],
  };

  return (
    <div className="w-full max-w-screen-xl mx-auto">
      <Slider {...sliderSettings}>
        {/* Contenido del slider */}
        <div>
          <img
            src={linea}
            alt="Slide 1"
            className="w-full h-auto max-h-72 md:max-h-96 lg:max-h-120"
          />
        </div>
        <div>
          <img
            src="https://via.placeholder.com/800x400"
            alt="Slide 2"
            className="w-full h-auto max-h-72 md:max-h-96 lg:max-h-120"
          />
        </div>
        <div>
          <img
            src="https://via.placeholder.com/800x400"
            alt="Slide 3"
             className="w-full h-auto max-h-72 md:max-h-96 lg:max-h-120 object-fit-cover"
            />
        </div>
        <div>
          <img
            src="https://via.placeholder.com/800x400"
            alt="Slide 4"
            className="w-full h-auto max-h-72 md:max-h-96 lg:max-h-120"
          />
        </div>
      </Slider>

      {/* Diseño de logos*/}
      <div className="py-8 flex items-center">
        <img src={small} alt="" />
      </div>
      <div className="flex flex-row items-center justify-around w-full py-2 mx-2  md:flex-wrap">
        <div>
          <img
            src={nutricion}
            alt="Image 1"
            className="w-24 md:w-48 h-auto max-h-36 md:max-h-48 lg:max-h-60 rounded-full transition-transform transform hover:scale-110"
          />
        </div>
        <div>
          <img
            src={verduras}
            alt="Image 1"
            className="w-24 md:w-48 h-auto max-h-36 md:max-h-48 lg:max-h-60 rounded-full transition-transform transform hover:scale-110"
          />
        </div>
        <div>
          <img
            src={aseo}
            alt="Image 1"
            className="w-24 md:w-48 h-auto max-h-36 md:max-h-48 lg:max-h-60 rounded-full transition-transform transform hover:scale-110"
          />
        </div>
      </div>
    </div>
  );
}

export default HeaderPage;
