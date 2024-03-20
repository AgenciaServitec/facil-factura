import styled from "styled-components";
import { CurvedLineBackground, BannerPhones } from "../../images";
import { mediaQuery } from "../../styles/constants/mediaQuery";

export const SectionFirst = () => {
  return (
    <Container>
      <CurvedLineBackground />
      <div className="banner">
        <div className="banner__text">
          <h1>Mejora tu facturación de tu empresa</h1>
          <p>
            Servitec te ayudara a facturar, controlar tu inventario y ventas
            minuto a minuto, de forma ilimitada.
          </p>
          <div>
            <button>Planes</button>
            <button>Demo</button>
          </div>
        </div>
        <img src={BannerPhones} alt="" className="bannerPhones" />
      </div>
    </Container>
  );
};

const Container = styled.section`
  width: 100%;
  min-height: 60vh;
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
        font-size: 1.8em;
        line-height: 1.2;
        margin: 0;
        ${mediaQuery.minDesktop} {
          font-size: 4em;
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
      max-width: 850px;
      position: absolute;
      left: 50%;
      bottom: 0;
      transform: translateX(-50%);
      z-index: 200;
    }
  }

  button {
    padding: 0.625em 3.5em;
    border-radius: 2em;
    border: none;
    &:first-child {
      background-image: linear-gradient(to right, #23d3f9 100%, #23d3f9);
      color: #fff;
      &:hover {
        background-image: linear-gradient(120deg, #02578b 25%, #23d3f9);
      }
    }
    &:last-child {
      background-color: #fff;
      border: 1px solid #000;
    }
    &:hover {
      cursor: pointer;
    }
  }
`;
