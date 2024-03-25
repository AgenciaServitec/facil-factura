import React, { useState } from "react";
import styled, { css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Steps, WrapperComponent, Button } from "../../components";
import {
  faArrowLeft,
  faArrowRight,
  faCheckCircle,
  faFileLines,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";
import { PlanSelect } from "./PlanSelect";
import { ContactInfo } from "./ContactInfo";
import { mediaQuery } from "../../styles";
import { useNavigate } from "react-router";
import { Complete } from "./Complete";

export const RequestPlanIntegration = () => {
  const navigate = useNavigate();
  const [stepNumber, setStepNumber] = useState(0);

  const onNavigateGoTo = (pathname = "/") => navigate(pathname);
  const onSetStepNumber = (number = 1) => setStepNumber(number);

  const showByTypeStep = () => {
    switch (stepNumber) {
      case 0:
        return <PlanSelect onSetStepNumber={onSetStepNumber} />;
      case 1:
        return <ContactInfo onSetStepNumber={onSetStepNumber} />;
      case 2:
        return <Complete onNavigateGoTo={onNavigateGoTo} />;
      default:
        return <PlanSelect onSetStepNumber={onSetStepNumber} />;
    }
  };

  return (
    <Container>
      <WrapperComponent>
        <div className="steps-wrapper">
          <Steps
            className="steps-wrapper__steps"
            labelPlacement="vertical"
            current={stepNumber}
            items={[
              {
                title: "Tipo de PLAN",
                icon: <FontAwesomeIcon icon={faFileLines} />,
              },
              {
                title: "Contácto",
                icon: <FontAwesomeIcon icon={faPhoneAlt} />,
              },
              {
                title: "Completado",
                icon: <FontAwesomeIcon icon={faCheckCircle} />,
              },
            ]}
          />
        </div>
        {showByTypeStep()}
      </WrapperComponent>
    </Container>
  );
};

const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: auto;
    .steps-wrapper {
      display: grid;
      place-items: center;
      margin-bottom: 2em;
      &__steps {
        width: 95%;
        margin: auto;
        ${mediaQuery.minTablet} {
          width: 70%;
        }
      }
    }
  `}
`;
