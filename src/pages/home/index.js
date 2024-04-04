import React from "react";
import styled from "styled-components";
import { PrincipalSection } from "./PrincipalSection";
import { HomePagePlans } from "./HomePagePlans";
import { Requirements } from "./Requirements";
import { FrequentlyQuestions } from "./FrequentlyQuestions";
import { SummaryApp } from "./SummaryApp";
import { DesktopSection } from "./DesktopSection";
import { BrandsSection } from "./BrandsSection";
import { VerifiedSection } from "./VerifiedSection";

export const Home = () => {
  return (
    <Container>
      <PrincipalSection />
      <DesktopSection />
      <SummaryApp />
      <Requirements />
      <HomePagePlans />
      <FrequentlyQuestions />
      <VerifiedSection />
      <BrandsSection />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: auto;
`;
