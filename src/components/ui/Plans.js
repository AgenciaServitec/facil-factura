import React from "react";
import { PlanCard } from "./PlanCard";
import styled from "styled-components";

export const Plans = ({ plans = [] }) => {
  return (
    <Container>
      {plans.map((plan, index) => (
        <li key={index} className="li-item">
          <PlanCard plan={plan} />
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
