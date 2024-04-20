import Carousel from "react-multi-carousel";
import { brands } from "../../data-list";

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
      {brands.map((brand) => (
        <div key={brand.id}>
          <img src={brand.src} alt={brand.name} />
        </div>
      ))}
    </Carousel>
  );
};
