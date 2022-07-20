import React from "react";
import styled from "styled-components";
import { mediaQuery } from "../../styles/constants/mediaQuery";
import { Button } from "../ui";

export const VideoSection = ({
  onClickVisibleFormContact,
  onEventGaClickButton,
  onEventGaClickVideos,
}) => (
  <Container id="video-section">
    <div className="content-video">
      <iframe
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/ZXLsloLkXPI?autoplay=1"
        title="Publicidad digital"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        onClick={() =>
          onEventGaClickVideos(
            "click-video-publicidad-google",
            "Click video publicidad google"
          )
        }
      />
    </div>
    <div className="content-items">
      <div className="txt-item">
        <h2>Mira nuestro video</h2>
        <p>
          Somos una empresa que brinda servicios informáticos de forma integral
          en la asesoría y consultoría en hardware y software, tanto para
          usuarios domésticos, negocios y empresas corporativas. Prestamos
          nuestros servicios en forma altamente personalizada, comprendiendo que
          cada empresa es única, creando una solución a la medida de tus
          necesidades. Logrando identificar y entender las necesidades de
          nuestros clientes para ofrecerle la mejor solución.
        </p>
      </div>
      <div className="btn-item">
        <Button
          text="Contactanos"
          type="secondary"
          onClick={() => {
            onClickVisibleFormContact(true);
            onEventGaClickButton(
              "click-boton-contactanos",
              "Click boton contactanos"
            );
          }}
        />
      </div>
    </div>
  </Container>
);

const Container = styled.div`
  width: 100%;
  height: auto;
  background: #f2f2f2;
  padding: 1.2rem;
  color: #000;
  display: grid;
  grid-gap: 1.7rem;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto;
  ${mediaQuery.minTablet} {
    padding: 3rem 4rem;
    grid-template-rows: 1fr;
    grid-template-columns: 45% 1fr;
  }

  .content-items {
    display: flex;
    flex-direction: column;
    ${mediaQuery.minTablet} {
    }
    .txt-item {
      h2 {
        color: rgba(0, 0, 0, 0.54);
        font-weight: 400;
        margin-bottom: 2rem;
        font-size: 2rem;
      }
      p {
        color: #2f2c2c;
        max-width: 40rem;
        font-weight: 500;
      }
    }
    .btn-item {
      width: 100%;
      display: flex;
      justify-content: start;
    }
  }
`;
