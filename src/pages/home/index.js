import React from "react";
import styled from "styled-components";
import { SectionFirst } from "../../components";
import { SimplePlans, WrapperComponent } from "../../components/ui";

export const Home = () => {
  return (
    <>
      <Container>
        <SectionFirst />
        <WrapperComponent>
          <SimplePlans />
        </WrapperComponent>
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 100%;
  height: auto;
`;
