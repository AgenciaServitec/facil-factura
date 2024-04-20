import React from "react";
import styled, { css } from "styled-components";
import { capitalize, startCase, get } from "lodash";
import { keyframes } from "../../../styles";
import { Text, Space } from "../index";

// interface Props {
//   required?: boolean;
//   name?: string;
//   error?: FormError;
//   label?: string;
//   children?: React.ReactNode;
// }

export const Group = ({ label, required, error, children }) => (
  <>
    <Container error={error}>
      <Legend required={required} error={error}>
        {label}
      </Legend>
      <SpaceStyled size="middle" direction="vertical">
        {children}
      </SpaceStyled>
    </Container>
    {error && (
      <Error error={error}>
        {capitalize(startCase(get(error, "message")))}
      </Error>
    )}
  </>
);

const Container = styled.fieldset`
  width: 96%;
  border-radius: ${({ theme }) => theme.border_radius.x_small};
  border: solid 1px
    ${({ error, theme }) =>
      error ? theme.colors.error : theme.colors.tertiary};
  padding: 1rem;
  margin: auto;
`;

const Legend = styled.legend`
  ${({ error, theme, required }) => css`
    background: ${theme.colors.quaternary};
    color: ${error ? theme.colors.error : theme.colors.font2};
    border-radius: ${theme.border_radius.x_small};
    font-size: ${theme.font_sizes.x_small};
    padding: 0.1rem 0.5rem;
    width: auto;
    margin-bottom: 0;

    ${required &&
    css`
      ::after {
        display: inline-block;
        margin-left: 0.2rem;
        color: ${error ? theme.colors.error : theme.colors.error};
        font-size: ${theme.font_sizes.small};
        line-height: 1;
        content: "*";
      }
    `}
  `}
`;

const SpaceStyled = styled(Space)`
  width: 100%;
`;

const Error = styled(Text)`
  color: ${({ theme }) => theme.colors.error};
  font-size: 0.7rem;
  ${({ error }) =>
    error &&
    css`
      animation: ${keyframes.shake} 340ms;
    `};
`;
