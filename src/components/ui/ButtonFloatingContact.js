import React from "react";
import styled from "styled-components";
import { Button } from "./index";

export const ButtonFloatingContact = ({ onClickVisibleFormContact }) => {
  return (
    <Container>
      <Button type="secondary" onClick={() => onClickVisibleFormContact(true)}>
        Contáctanos
      </Button>
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  z-index: 100;
  top: 35%;
  left: -75px;
  transform: rotate(-90deg);
  button {
    font-size: 1.2em;
    border-radius: 0 0 1em 1em;
    padding: 0.5em 1em;
  }
`;
