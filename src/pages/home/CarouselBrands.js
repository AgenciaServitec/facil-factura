import {
  Brand1,
  Brand2,
  Brand3,
  Brand4,
  Brand5,
  Brand6,
  LogoServitec,
} from "../../images";
import Carousel from "react-multi-carousel";

export const CarouselBrands = ({ isMobile }) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 7,
      partialVisibilityGutter: 40,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
      partialVisibilityGutter: 30,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      partialVisibilityGutter: 20,
    },
  };
  return (
    <Carousel
      additionalTransfrom={0}
      arrows={!isMobile}
      autoPlay
      autoPlaySpeed={3000}
      centerMode={false}
      className="carousel-component"
      containerClass="container"
      dotListClass=""
      draggable
      focusOnSelect={false}
      infinite={true}
      itemClass=""
      keyBoardControl
      minimumTouchDrag={80}
      pauseOnHover
      renderArrowsWhenDisabled={false}
      renderButtonGroupOutside={false}
      renderDotsOutside={false}
      responsive={responsive}
      rewind={false}
      rewindWithAnimation={false}
      rtl={false}
      shouldResetAutoplay
      showDots={false}
      sliderClass=""
      slidesToSlide={2}
      swipeable
    >
      <div>
        <img className="image-shadow" src={Brand1} alt="Logo de Alvillantas" />
      </div>
      <div>
        <img src={Brand2} alt="Logo Hankook Alvillantas" />
      </div>
      <div>
        <img
          className="image-shadow"
          src={Brand3}
          alt="Logo de Servitec Perú"
        />
      </div>
      <div>
        <img src={Brand4} alt="Logo de Servitec Software" />
      </div>
      <div>
        <img src={Brand5} alt="Logo de Avc Llantas" />
      </div>
      <div>
        <img src={Brand6} alt="Logo de Cobiene" />
      </div>
      <div>
        <img src={LogoServitec} alt="Logo de Servitec Publicidad" />
      </div>
    </Carousel>
  );
};
