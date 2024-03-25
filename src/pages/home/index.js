import React from "react";
import styled from "styled-components";
import { PrincipalSection } from "./PrincipalSection";
import { HomePagePlans } from "./HomePagePlans";
import { Requirements } from "./Requirements";
import { FrequentlyQuestions } from "./FrequentlyQuestions";

export const Home = () => {
  return (
    <Container>
      <PrincipalSection />
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
