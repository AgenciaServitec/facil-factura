import React from "react";
import styled from "styled-components";
import { PrincipalSection } from "./PrincipalSection";
import { SimplePlans, WrapperComponent } from "../../components";

export const Home = () => {
  return (
    <Container>
      <PrincipalSection />
      <WrapperComponent>
        <SimplePlans />
      </WrapperComponent>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: auto;
`;
