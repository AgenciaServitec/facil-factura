import React from "react";
import styled from "styled-components";
import { Button } from "../../components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export const Complete = ({ onNavigateGoTo }) => {
  return (
    <Container>
      <div className="complete__title">
        <h2>
          !Solicitud completada exitosamente, en breve nos comunicaremos con
          usted!
        </h2>
      </div>
      <div className="btn-wrapper">
        <Button
          type="primary"
          style={{
            padding: "1.5em 2em",
            display: "flex",
            placeItems: "center",
          }}
          icon={<FontAwesomeIcon icon={faArrowRight} size="large" />}
          onClick={() => onNavigateGoTo()}
        >
          Ir a inicio
        </Button>
      </div>
    </Container>
  );
};

const Container = styled.div`
  padding: 2em 1em;
  .complete__title {
    text-align: center;
    margin-bottom: 2em;
    h2 {
      font-weight: 700;
      font-size: 1.8em;
    }
  }
  .btn-wrapper {
    display: flex;
    justify-content: center;
    gap: 1em;
    padding: 1.5em;
  }
`;
