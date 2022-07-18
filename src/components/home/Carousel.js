import React from "react";
import AntCarousel from "antd/lib/carousel";
import {
  ServitecSlider1,
  ServitecSlider2,
  ServitecSlider3,
  ServitecSlider4,
} from "../../images";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { useDevice } from "../../hooks";
import { mediaQuery } from "../../styles/constants/mediaQuery";
import { ItemCarousel } from "./ItemCarousel";

const carouselItems = [
  {
    title: "Redes Sociales",
    description: "Atrae clientes donde esta tu publico objetivo",
    image: ServitecSlider1,
    bgColor: "#4cc2c0",
  },
  {
    title: "SEO Posicionamiento en Motores de Busqueda",
    description:
      "(Search Engine Optimization) optimiza tu pagina web para que este en los primeros lugares",
    image: ServitecSlider2,
    bgColor: "#f15b26",
  },
  {
    title: "Comunity manager",
    description: "Clientes potenciales conectados en tus redes Sociales",
    image: ServitecSlider3,
    bgColor: "#3cb878",
  },
  {
    title: "Publicidad digital en Google",
    description:
      "Utiliza y engrana todos las herramientas de google en tu campaña (SEO, SEM, Analytics, ADDS)",
    image: ServitecSlider4,
    bgColor: "#fcb03b",
  },
];

export const Carousel = ({
  onClickVisibleFormContact,
  onEventGaClickButton,
}) => {
  const { isMobile } = useDevice();

  return (
    <Container>
      <AntCarousel
        autoplay
        autoplaySpeed={5 * 1000}
        arrows={!isMobile}
        prevArrow={<FontAwesomeIcon icon={faChevronLeft} />}
        nextArrow={<FontAwesomeIcon icon={faChevronRight} />}
      >
        {carouselItems.map((carouselItem, index) => (
          <ItemCarousel
            key={index}
            title={carouselItem.title}
            description={carouselItem.description}
            image={carouselItem.image}
            bgColor={carouselItem.bgColor}
            onClickVisibleFormContact={onClickVisibleFormContact}
            onEventGaClickButton={onEventGaClickButton}
          />
        ))}
      </AntCarousel>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: auto;

  ${mediaQuery.minDesktop} {
    .ant-carousel .slick-prev,
    .ant-carousel .slick-next {
      top: 46%;
    }

    .ant-carousel .slick-next,
    .ant-carousel .slick-next {
      top: 46%;
    }

    .slick-arrow.slick-prev,
    .slick-arrow.slick-next {
      color: white;
      z-index: 99999;
    }

    .slick-arrow.slick-prev {
      left: 3%;
    }

    .slick-arrow.slick-next {
      right: 3%;
    }
  }

  .slick-dots-bottom {
    bottom: 1px;

    ${mediaQuery.minDesktop} {
      bottom: 4rem;
    }
  }

  .slick-dots {
    display: none !important;

    ${mediaQuery.minTablet} {
      display: flex !important;
    }

    li.slick-active {
      width: 48px;
    }

    li {
      width: 48px;

      button {
        width: 48px;
        height: 7px;
      }
    }

    ${mediaQuery.minTablet} {
      li.slick-active {
        width: 34px;
      }

      li {
        width: 34px;

        button {
          width: 34px;
          height: 5px;
        }
      }
    }
  }

  ${mediaQuery.minDesktop} {
    display: inherit;
  }
`;
