import React, { useEffect } from "react";
import styled from "styled-components";
import { Button } from "../../components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { Step3Complete } from "../../images";
import { mediaQuery } from "../../styles";

export const Complete = ({ onNavigateGoTo }) => {
  useEffect(() => {
    setTimeout(() => {
      onNavigateGoTo("/");
    }, 3000);
  }, []);

  return (
    <Container>
      <div className="complete">
        <div className="complete__title">
          <h2>
            ¡Solicitud completada exitosamente, en breve nos comunicaremos con
            usted!
          </h2>
        </div>
        <div className="complete__image">
          <img src={Step3Complete} alt="Completado exitosamente" width={400} />
        </div>
      </div>
      <div className="btn-wrapper">
        <Button
          type="primary"
          style={{
            padding: "1.5em 2em",
            display: "flex",
            placeItems: "center",
          }}
          icon={<FontAwesomeIcon icon={faHome} size="large" />}
          onClick={() => onNavigateGoTo("/")}
        >
          Ir a inicio
        </Button>
      </div>
    </Container>
  );
};

const Container = styled.div`
  padding: 2em 1em;
  .complete {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1em;
    &__title {
      display: grid;
      place-items: center;
      text-align: center;
      margin-bottom: 2em;
      width: 100%;
      ${mediaQuery.minTablet} {
        width: 25em;
      }
      h2 {
        font-weight: 700;
        font-size: 2em;
      }
    }
    &__image {
      width: 100%;
      display: grid;
      place-items: center;
      ${mediaQuery.minMobile} {
        width: 30em;
      }
      img {
        width: 100%;
        ${mediaQuery.minMobile} {
          width: 23em;
        }
      }
    }
  }
  .btn-wrapper {
    display: flex;
    justify-content: center;
    gap: 1em;
    padding: 1.5em;
  }
`;
