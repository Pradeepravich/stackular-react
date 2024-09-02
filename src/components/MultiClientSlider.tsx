import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface ImageData {
  name: string;
  url: string;
}
interface MultiImageSliderProps {
  images: ImageData[];
}

const MultiClientSlider: React.FC<MultiImageSliderProps> = ({ images }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 5,
    // slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: true,
    arrows: false, 
    responsive: [
      {
        breakpoint: 1024, // Tablet
        settings: {
          slidesToShow: 3, // 3 slides for tablet
          slidesToScroll: 1,
          centerMode: true, // Enables centering of slides
          centerPadding: "20px", // Adds gap between slides                         
        },
      },
      {
        breakpoint: 768, // Mobile
        settings: {
          slidesToShow: 2, // 2 slides for mobile
          slidesToScroll: 1,
          centerMode: true, // Enables centering of slides
          centerPadding: "10px", // Adds gap between slides   
        },
      },
      {
        breakpoint: 480, // Small mobile
        settings: {
          slidesToShow: 2, // 1 slide for small mobile
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {images?.map((image: any, index: any) => (
          <div key={index} className="slider-item">
            <img src={image.url} alt={image.name} className="slider-image" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MultiClientSlider;
