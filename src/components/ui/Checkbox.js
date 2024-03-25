import React from "react";
import { Checkbox as CheckboxAntd } from "antd";
import styled, { css } from "styled-components";
import { classNames, keyframes } from "../../styles";

export const Checkbox = ({
  name,
  checked,
  onChange,
  error = false,
  required = false,
  hidden = false,
  children,
  dataTestId,
}) => (
  <CheckBoxAntdStyled
    name={name}
    className={classNames({ "scroll-error-anchor": error })}
    checked={checked}
    onChange={(e) => onChange && onChange(e.target.checked)}
    error={error}
    hidden={hidden}
    required={required}
    data-testid={dataTestId}
  >
    {children && <span className="checkbox-content">{children}</span>}
  </CheckBoxAntdStyled>
);

const CheckBoxAntdStyled = styled(CheckboxAntd)`
  ${({ error, theme, hidden, required }) =>
    css`
      font-size: ${theme.font_sizes.x_small};
      display: ${hidden && "none"};
      color: ${error ? theme.colors.error : theme.colors.font2};
      animation: ${error && keyframes.shake} 340ms
        cubic-bezier(0.36, 0.07, 0.19, 0.97) both;

      ${error &&
      css`
        .ant-checkbox {
          .ant-checkbox-inner {
            border-color: ${theme.colors.error};
          }
        }

        .ant-checkbox-checked {
          .ant-checkbox-inner {
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
        .checkbox-content {
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
