import React from "react";
import styled, { css } from "styled-components";
import { classNames, keyframes } from "../../styles";
import { ComponentContainer, RadioAntd } from "./index";

export const RadioGroup = ({
  value,
  required = false,
  hidden = false,
  isMobile = false,
  error,
  label,
  variant = "outlined",
  disabled,
  animation = true,
  bgColor,
  onChange,
  dataTestId,
  options = [],
  children,
}) => {
  const Container = ComponentContainer[variant];

  return (
    <Container
      value={value}
      required={required}
      hidden={hidden}
      error={error}
      label={label}
      disabled={disabled}
      animation={animation}
      bgColor={bgColor}
    >
      <RadioAntdStyled
        name={name}
        className={classNames({ "scroll-error-anchor": error })}
        onChange={(e) => onChange && onChange(e.target.value)}
        error={error}
        hidden={hidden}
        required={required}
        data-testid={dataTestId}
      >
        {children
          ? children
          : options.map((option) => (
              <RadioAntd value={option.value}>{option.label}</RadioAntd>
            ))}
      </RadioAntdStyled>
    </Container>
  );
};

const RadioAntdStyled = styled(RadioAntd.Group)`
  ${({ error, theme, hidden, required }) =>
    css`
      width: 100%;
      font-size: ${theme.font_sizes.x_small};
      display: ${hidden && "none"};
      color: ${error ? theme.colors.error : theme.colors.font2};
      animation: ${error && keyframes.shake} 340ms
        cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
      margin: 0.8em 0.5em 0.5em 0.5em;

      ${error &&
      css`
        .ant-radio {
          .ant-radio-inner {
            border-color: ${theme.colors.error};
          }
        }

        .ant-radio-checked {
          .ant-radio-inner {
            border-color: ${theme.colors.error};
            background-color: ${theme.colors.error};
          }

          ::after {
            border-color: ${theme.colors.error};
          }
        }
      `}

      ${required &&
      css`
        .radio-content {
          ::before {
            display: inline-block;
            margin-right: 0.2rem;
            color: ${error ? theme.colors.error : "inherit"};
            font-size: ${theme.font_sizes.small};
            line-height: 1;
            content: "*";
          }
        }
      `}
    `}
`;
