import React from "react";
import styled from "styled-components";
import SpaceAntd from "antd/lib/space";

export const Form = ({ children, ...props }) => (
  <form noValidate autoComplete="off" {...props}>
    <SpaceStyled size="large" direction="vertical">
      {children}
    </SpaceStyled>
  </form>
);

const SpaceStyled = styled(SpaceAntd)`
  width: 100%;
  margin-top: 1rem;
`;
