import React from "react";
import styled from "styled-components";

export const WrapperComponent = ({ children }) => (
  <WrapperComponentContainer>{children}</WrapperComponentContainer>
);

const WrapperComponentContainer = styled.div`
  width: 100%;
  max-width: 1250px;
  height: auto;
  margin: auto;
`;
