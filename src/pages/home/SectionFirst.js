import styled from "styled-components";
import { CurvedLineBackground, BannerPhones } from "../../images";
import { mediaQuery } from "../../styles/constants/mediaQuery";
import { Button } from "../../components";

export const SectionFirst = () => {
  return (
    <Container>
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
          <h1>Facturación Electrónica para emprendedores, desde S/50,00</h1>
          <p>
            Servitec te ayudara a facturar, controlar tu inventario y ventas
            minuto a minuto, de forma ilimitada.
          </p>
          <div className="button_wrapper">
            <Button
              type="primary"
              shape="round"
              size="large"
              style={{ padding: "0 2em" }}
            >
              Planes
            </Button>
            <Button shape="round" size="large" style={{ padding: "0 2em" }}>
              Demo
            </Button>
          </div>
        </div>
        <img src={BannerPhones} alt="" className="bannerPhones" />
      </div>
    </Container>
  );
};

const Container = styled.section`
  width: 100%;
  min-height: 70vh;
  position: relative;

  ${mediaQuery.minTablet} {
    min-height: 80vh;
  }

  ${mediaQuery.minDesktop} {
    min-height: 100vh;
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
      gap: 1em;
      text-align: center;
      padding: 2em 0 0;
      z-index: 400;
      h1 {
        max-width: 90%;
        font-size: 1.8em;
        line-height: 1.2;
        margin: 0;
        ${mediaQuery.minDesktop} {
          max-width: 60%;
          font-size: 3.5em;
        }
      }
      p {
        margin: 0;
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
    margin-top: 1em;
  }
`;