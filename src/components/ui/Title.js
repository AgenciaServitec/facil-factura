import React from "react";
import styled, { css } from "styled-components";
import { Typography } from "antd";

export const Title = ({ children, align = "left", margin, ...props }) => (
  <TitleAntd align={align} margin={margin} {...props}>
    {children}
  </TitleAntd>
);

const TitleAntd = styled(Typography.Title)`
  ${({ align, color, margin }) => css`
    text-align: ${align};
    color: ${color} !important;
    margin: ${margin} !important;
  `}
`;
