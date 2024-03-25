import React from "react";
import styled from "styled-components";
import { PrincipalSection } from "./PrincipalSection";
import { SimplePlans } from "../../components";
import { Requirements } from "./Requirements";
import { FrequentlyQuestions } from "./FrequentlyQuestions";
import { SummaryApp } from "./SummaryApp";

export const Home = () => {
  return (
    <Container>
      <PrincipalSection />
      <Requirements />
      <SimplePlans />
      <SummaryApp />
      <FrequentlyQuestions />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: auto;
`;
