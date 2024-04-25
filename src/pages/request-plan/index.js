import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Steps, WrapperComponent } from "../../components";
import {
  faCheckCircle,
  faFileLines,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";
import { PlanSelect } from "./PlanSelect";
import { ContactInfo } from "./ContactInfo";
import { mediaQuery } from "../../styles";
import { useNavigate } from "react-router";
import { Complete } from "./Complete";
import { useQueryString } from "../../hooks";
import { ourPlans } from "../../data-list";
import { applyDiscount } from "../../utils";

export const RequestPlanIntegration = () => {
  const navigate = useNavigate();
  const [planType, setPlanType] = useQueryString("planType", "");

  const [stepNumber, setStepNumber] = useState(0);
  const [selectedPlan, setSelectedPlan] = useState(null);

  const ourPlansWithApplyDiscount = ourPlans.map((plan) => ({
    ...plan,
    totalNeto: applyDiscount({ plan }),
  }));

  useEffect(() => {
    const _plan =
      ourPlansWithApplyDiscount.find((plan) => plan.id === planType) || null;

    if (_plan) {
      setSelectedPlan(_plan);
    }
  }, [planType]);

  const onNavigateGoTo = (pathname = "/") => navigate(pathname);
  const onSetStepNumber = (number = 0) => setStepNumber(number);
  const onSetPlanType = (planType) => setPlanType(planType);

  const showByTypeStep = () => {
    switch (stepNumber) {
      case 0:
        return (
          <PlanSelect
            planType={planType}
            onSetPlanType={onSetPlanType}
            onSetStepNumber={onSetStepNumber}
          />
        );
      case 1:
        return (
          <ContactInfo
            selectedPlan={selectedPlan}
            onSetStepNumber={onSetStepNumber}
          />
        );
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
