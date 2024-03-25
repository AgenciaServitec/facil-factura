import React from "react";
import { PlanCard } from "./PlanCard";
import styled from "styled-components";
import { useNavigate } from "react-router";

export const Plans = ({
  type = "info",
  plans = [],
  planType,
  onSetPlanType,
}) => {
  const navigate = useNavigate();

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
  width: 87%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(12em, 1fr));
  gap: 1.5em;
  .li-item {
    display: grid;
    place-items: center;
  }
`;
