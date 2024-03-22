import React from "react";
import styled from "styled-components";
import { PrincipalSection } from "./PrincipalSection";
import { SimplePlans } from "../../components";
import { Requirements } from "./Requirements";
import { FrequentlyQuestions } from "./FrequentlyQuestions";

export const Home = () => {
  return (
    <Container>
      <PrincipalSection />
      <Requirements />
      <SimplePlans />
        <FrequentlyQuestions />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: auto;
`;
