import React, { useEffect } from "react";
import styled from "styled-components";
import { ImgCongratulation } from "../../images";
import { mediaQuery } from "../../styles/constants/mediaQuery";
import { Button } from "../../components/ui";
import { useNavigate } from "react-router";

export const ContactSuccess = ({
  onEventGaClickButton,
  onEventGaClickSuccessful,
}) => {
  const navigate = useNavigate();

  useEffect(() => {
    onEventGaClickSuccessful(
      "successful-user-contact",
      "Successful user contact"
    );
  }, [onEventGaClickSuccessful]);

  return (
    <Container>
      <img
        src={ImgCongratulation}
        className="img-slider"
        alt="Banner Servitec Site"
        width="100%"
        height="100%"
      />
      <div className="content-slide-txt">
        <h1 className="title-banner">GRACIAS POR CONTACTARTE CON NOSOTROS</h1>
        <br />
        <h2>LE RESPONDEREMOS EN BREVE</h2>
        <div className="item-button">
          <Button
            text="Regresar"
            type="tertiary"
            onClick={() => {
              onEventGaClickButton(
                "click-boton-regresar",
                "Click boton regresar"
              );
              navigate("/");
            }}
          />
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  &:after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(#070707fc, rgb(0 0 0 / 8%), #070707e3);
  }
  .img-slider {
    width: 100vw !important;
    height: 40rem !important;
    object-fit: cover;
    ${mediaQuery.minTablet} {
      height: 45rem !important;
    }
  }
  .content-slide-txt {
    position: absolute;
    color: #fff;
    z-index: 500;
    width: 100%;
    bottom: 20%;
    text-align: center;
    ${mediaQuery.minDesktop} {
      bottom: 35%;
    }
    .title-banner {
      margin: auto 2rem;
      font-size: 2rem;
      line-height: 4rem;
      text-shadow: 3px 2px 3px rgba(0, 0, 0, 0.2);
      color: #fff;
      ${mediaQuery.minDesktop} {
        font-size: 4rem;
        bottom: 30%;
      }
    }
    h2 {
      color: #fff;
      text-shadow: 3px 2px 3px rgba(0, 0, 0, 0.2);
      font-size: 1.5rem;
    }
    .item-button {
      margin-top: 2rem;
    }
  }
`;
