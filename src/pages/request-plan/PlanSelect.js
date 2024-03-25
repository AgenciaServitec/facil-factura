import React from "react";
import styled from "styled-components";
import { Button, Plans } from "../../components";
import { ourPlans } from "../../data-list";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export const PlanSelect = ({ onSetStepNumber }) => {
  return (
    <Container>
      <div className="request-plan__title">
        <h2>Solicitar mi PLAN</h2>
      </div>
      <div className="request-plan__plans">
        <Plans plans={ourPlans} />
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
          onClick={() => onSetStepNumber(1)}
        >
          Continuar
        </Button>
      </div>
    </Container>
  );
};

const Container = styled.div`
  .request-plan__title {
    text-align: center;
    margin-bottom: 2em;
    h2 {
      font-weight: 700;
      font-size: 1.8em;
    }
  }
  .request-plan__plans {
    display: grid;
    place-items: center;
  }
  .btn-wrapper {
    display: flex;
    justify-content: center;
    gap: 1em;
    padding: 1.5em;
  }
`;
