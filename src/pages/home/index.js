import React from "react";
import styled from "styled-components";
import { PrincipalSection } from "./PrincipalSection";
import { HomePagePlans } from "./HomePagePlans";
import { Requirements } from "./Requirements";
import { FrequentlyQuestions } from "./FrequentlyQuestions";
import { SummaryApp } from "./SummaryApp";

export const Home = () => {
  return (
    <Container>
      <PrincipalSection />
      <SummaryApp />
      <Requirements />
      <HomePagePlans />
      <FrequentlyQuestions />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: auto;
`;
