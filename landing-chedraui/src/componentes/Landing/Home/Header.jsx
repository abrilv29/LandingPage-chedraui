import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
            src="https://via.placeholder.com/800x400"
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
            className="w-full h-auto max-h-72 md:max-h-96 lg:max-h-120"
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

      {/* Grid con dos contenedores fijos */}
      <div className="grid grid-cols-2 gap-4 mt-8">
        <div>
          <img
            src="https://via.placeholder.com/400x200"
            alt="Image 1"
            className="w-full h-auto max-h-36 md:max-h-48 lg:max-h-60"
          />
        </div>
        <div>
          <img
            src="https://via.placeholder.com/400x200"
            alt="Image 2"
            className="w-full h-auto max-h-36 md:max-h-48 lg:max-h-60"
          />
        </div>
      </div>
    </div>
  );
}

export default HeaderPage;
