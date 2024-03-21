import React from "react";
import styled from "styled-components";
import { mediaQuery } from "../../styles/constants/mediaQuery";
import { Button } from "../ui";

export const ItemCarousel = ({
  bgColor,
  image,
  description,
  title,
  onClickVisibleFormContact,
  onEventGaClickButton,
}) => {
  return (
    <Container bgColor={bgColor}>
      <div className="content-item">
        <div className="first-content">
          <div className="txt-items">
            <h2>{title}</h2>
            <span>{description}</span>
            <br />
          </div>
          <div
            className="btn-item"
            onClick={() => {
              onClickVisibleFormContact(true);
              onEventGaClickButton(
                "click-boton-cotizar",
                "Click boton cotizar"
              );
            }}
          >
            <Button type="primary" size="large">
              Cotiza ahora
            </Button>
          </div>
        </div>
        <div className="second-content">
          <img
            src={image}
            alt="Slider Servitec"
            width="100%"
            height="100%"
            title="Slider Servitec"
          />
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  background: ${({ bgColor }) => bgColor};
  width: 100vw;
  height: 85vh;

  .content-item {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
    grid-gap: 1rem;
    box-sizing: border-box;
    width: 100%;
    max-width: 1250px;
    height: 100%;
    margin: auto;
    padding: 1rem;
    ${mediaQuery.minTablet} {
      grid-template-columns: 45% 1fr;
      grid-template-rows: 1fr;
      grid-gap: 1.7rem;
      padding: 1.7rem 2rem;
    }
  }

  .first-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    ${mediaQuery.minTablet} {
      padding-top: 1rem;
    }

    .txt-items {
      width: 100%;
      color: #000;
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: start;

      h2 {
        font-weight: 900;
        font-size: 2.3rem;
        line-height: 2.2rem;
        color: #000;
        ${mediaQuery.minTablet} {
          font-size: 3.6rem;
          line-height: 3rem;
        }
      }

      span {
        font-size: 1.3em;
        line-height: 1.5rem;
        color: #000;
        ${mediaQuery.minTablet} {
          font-size: 1.5rem;
          line-height: 2rem;
        }
      }
    }

    .btn-item {
      width: 100%;
      display: flex;
      justify-content: start;
    }
  }

  .second-content {
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 90%;
      max-width: 26rem;
      object-fit: contain;
      ${mediaQuery.minTablet} {
        width: 90%;
      }
    }
  }
`;
