import React from "react";
import { PlanCard } from "./PlanCard";
import styled from "styled-components";
import { useNavigate } from "react-router";
import { mediaQuery } from "../../styles";
import { useDevice } from "../../hooks";

export const Plans = ({
  type = "info",
  plans = [],
  planType,
  onSetPlanType,
  onSetStepNumber,
}) => {
  const navigate = useNavigate();
  const { isMobile } = useDevice();

  const onNavigateGoTo = (pathname = "/") => navigate(pathname);

  return (
    <Container>
      {plans.map((plan, index) => (
        <li key={index} className="li-item">
          <PlanCard
            type={type}
            plan={plan}
            planType={planType}
            onSetPlanType={onSetPlanType}
            onNavigateGoTo={onNavigateGoTo}
            onSetStepNumber={onSetStepNumber}
            isMobile={isMobile}
          />
        </li>
      ))}
    </Container>
  );
};

const Container = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 95%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15em, 1fr));
  ${mediaQuery.minDesktop} {
    width: 60%;
  }
  gap: 1.5em;
  .li-item {
    display: grid;
    place-items: center;
  }
`;
