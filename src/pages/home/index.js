import React from "react";
import styled from "styled-components";
import {
  AboutUs,
  Carousel,
  SectionFirst,
  SectionPlans,
  Services,
} from "../../components";
import { FormContact, WrapperComponent } from "../../components/ui";

export const Home = ({}) => {
  return (
    <>
      <Container>
        <SectionFirst />
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 100%;
  height: auto;
  background: #fff;
`;
