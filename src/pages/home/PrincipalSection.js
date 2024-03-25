import styled from "styled-components";
import { CurvedLineBackground, BannerPhones } from "../../images";
import { mediaQuery } from "../../styles/mediaQuery";
import { Button } from "../../components";
import { useNavigate } from "react-router";

export const PrincipalSection = () => {
  const navigate = useNavigate();

  const onNavigateGoTo = (pathname = "/") => navigate(pathname);

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
          <h1>Facturación Electrónica para negocios desde S/50</h1>
          <p>
            Dile adiós a los talonarios y a la complicada web SUNAT, solo con un
            par de clics podrás emitir los comprobantes más solicitados.
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
            <Button shape="round" size="large" style={{ padding: "0 3em" }}>
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
  ${mediaQuery.minTablet} {
    min-height: 48rem;
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
      gap: 1.2em;
      text-align: center;
      padding: 6.7em 0 0 0;
      z-index: 400;
      ${mediaQuery.minDesktop} {
        padding: 2em 0 0;
      }
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
    margin-top: .9em;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
`;
