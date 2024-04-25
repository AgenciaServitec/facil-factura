import styled from "styled-components";
import {
  CurvedLineBackground,
  BannerPhones,
  StarPurple,
  GreenCircle,
} from "../../images";
import { mediaQuery } from "../../styles";
import { Button } from "../../components";
import { useNavigate } from "react-router";
import { ourPlans } from "../../data-list";

export const PrincipalSection = () => {
  const navigate = useNavigate();

  const onNavigateGoTo = (pathname = "/") => navigate(pathname);

  const onNavigateGoToDemoLink = () =>
    window.open("https://facilfactura.pe/facturacion/registro", "_blank");

  return (
    <Container>
      <img src={StarPurple} alt="star - facil factura" className="star-item" />
      <img
        src={GreenCircle}
        alt="circulo - facil factura"
        className="circle-item"
      />
      <CurvedLineBackground
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      />
      <div className="banner">
        <div className="banner__text">
          <h1>
            Facturación Electrónica para negocios desde S/{" "}
            {ourPlans[0].prices.value.toFixed(2)} por comprobante
          </h1>
          <p>
            Genera comprobantes con unos clics, adiós a talonarios y web
            complicada de SUNAT
          </p>
          <div className="button_wrapper">
            <Button
              type="primary"
              shape="round"
              size="large"
              style={{ padding: "0 3em" }}
              onClick={() => onNavigateGoTo("/request-plan")}
            >
              COMENZAR
            </Button>
            <Button
              shape="round"
              size="large"
              style={{ padding: "0 3em" }}
              onClick={() => onNavigateGoToDemoLink()}
            >
              Ver Demo
            </Button>
          </div>
        </div>
        <img
          src={BannerPhones}
          alt="facil factura en celular"
          className="bannerPhones"
        />
      </div>
    </Container>
  );
};

const Container = styled.section`
  width: 100%;
  min-height: 85vh;
  height: auto;
  position: relative;

  ${mediaQuery.maxMobile} {
    min-height: 40rem;
  }

  ${mediaQuery.minTablet} {
    min-height: 50rem;
  }

  .star-item,
  .circle-item {
    width: 1.1em;
    height: 1.1em;
    position: absolute;
    z-index: 200;
    ${mediaQuery.minTablet} {
      width: 1.5em;
      height: 1.5em;
    }
  }

  .star-item {
    top: 20%;
    right: 7%;

    ${mediaQuery.minTablet} {
      top: 23%;
      right: 20%;
    }
  }
  .circle-item {
    top: 39%;
    left: 7%;

    ${mediaQuery.minTablet} {
      top: 36%;
      left: 20%;
    }
  }

  &::after {
    content: "";
    width: 100%;
    height: 100%;
    background-image: linear-gradient(to bottom, transparent 25%, #fff);
    position: absolute;
    top: 0;
    left: 0;
    z-index: 100;
  }

  .banner {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 0 1em;
    display: flex;
    justify-content: center;
    z-index: 200;

    ${mediaQuery.minDesktop} {
      padding-top: 6.5em;
    }

    &__text {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.8em;
      text-align: center;
      padding: 6.7em 0 0 0;
      z-index: 400;
      ${mediaQuery.minDesktop} {
        padding: 2em 0 0;
      }
      h1 {
        max-width: 90%;
        font-size: 1.8em;
        line-height: 1.1;
        margin: 0;
        ${mediaQuery.minDesktop} {
          max-width: 60%;
          font-size: 3.5em;
        }
      }
      p {
        font-size: 1.1em;
        font-weight: 300;
        width: 80%;
        margin: 0 auto;
        ${mediaQuery.minTablet} {
          width: 60%;
        }
      }

      div {
        display: flex;
        justify-content: center;
        gap: 0.625em;
      }
    }
    img {
      width: 90%;
      max-width: 45rem;
      position: absolute;
      left: 50%;
      bottom: 0;
      transform: translateX(-50%);
      z-index: 200;
    }
  }

  .button_wrapper {
    margin-top: 0.9em;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
`;
