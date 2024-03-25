import React from "react";
import styled from "styled-components";
import { Button, notification, Plans } from "../../components";
import { ourPlans } from "../../data-list";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export const PlanSelect = ({ planType, onSetPlanType, onSetStepNumber }) => {
  const onRequestContinue = () => {
    if (!planType)
      return notification({
        type: "warning",
        title: "Para continuar",
        description: "Seleciona tu PLAN ideal",
      });

    onSetStepNumber(1);
  };

  return (
    <Container>
      <div className="request-plan__title">
        <h2>Selecciona tu PLAN ideal</h2>
      </div>
      <div className="request-plan__plans">
        <Plans
          type="selection"
          plans={ourPlans}
          planType={planType}
          onSetPlanType={onSetPlanType}
        />
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
          onClick={() => onRequestContinue()}
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
