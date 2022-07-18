import React from "react";
import styled from "styled-components";
import { SeoFour, SeoOne, SeoThree, SeoTwo } from "../../images";
import { mediaQuery } from "../../styles/constants/mediaQuery";
import { Button } from "../ui";

export const Services = ({
  onClickVisibleFormContact,
  onEventGaClickButton,
}) => {
  return (
    <Container id="services">
      <div className="content-items">
        <h2 className="title">Paquetes de servicios de SEO asequibles</h2>
        <div className="content-img">
          <ItemService imgService={SeoOne} title="OBJETIVO" />
          <ItemService imgService={SeoTwo} title="ESTRATEGIA" />
          <ItemService imgService={SeoThree} title="TÉCNOLOGIA" />
          <ItemService imgService={SeoFour} title="ANALÍTICA" />
        </div>
        <div className="button">
          <Button
            text="¡Empezar Ahora!"
            type="tertiary"
            onClick={() => {
              onClickVisibleFormContact(true);
              onEventGaClickButton(
                "click-boton-empezar-ahora",
                "Click boton empezar ahora"
              );
            }}
          />
        </div>
      </div>
    </Container>
  );
};

const ItemService = ({ imgService, title }) => {
  return (
    <div className="item-img">
      <img src={imgService} alt="seo" className="image-bg" />
      <p>{title}</p>
    </div>
  );
};

const Container = styled.div`
  width: 100%;
  height: auto;
  background: #fff;
  padding: 1rem;
  ${mediaQuery.minTablet} {
    padding: 1rem 5rem;
  }

  .content-items {
    padding: 3rem 0;
    .title {
      color: rgba(0, 0, 0, 0.54);
      font-weight: 400;
      margin: 2rem 0;
      font-size: 2rem;
      text-align: center;
    }
    .content-img {
      display: flex;
      justify-content: space-evenly;
      gap: 1rem;
      flex-wrap: wrap;

      .item-img p {
        margin-top: 0.8rem;
        color: #000;
        text-align: center;
        text-transform: uppercase;
        font-size: 1.5rem;
      }
    }
    .button {
      width: 100%;
      display: flex;
      justify-content: center;
    }
  }
`;
