import React from "react";
import styled, { css } from "styled-components";
import { capitalize, isEmpty, startCase, toString } from "lodash";
import { classNames, keyframes } from "../../../styles";
import Typography from "antd/lib/typography";
import { darken, lighten } from "polished";

const { Text } = Typography;

// interface Props {
//   value?: string | number | boolean | Record<string, unknown> | Moment;
//   required?: boolean;
//   error?: FormError;
//   label?: string;
//   disabled?: boolean;
//   componentId?: string;
//   children?: React.ReactNode;
//   animation?: boolean;
// }

export const Filled = ({
  value,
  required,
  error,
  hidden = false,
  label,
  children,
  componentId,
  animation = true,
  disabled = false,
  helperText,
}) => {
  return (
    <>
      <Container
        hasValue={
          typeof value === "object" ? !isEmpty(value) : !!toString(value)
        }
        className={classNames({ "scroll-error-anchor": error })}
        error={error}
        disabled={disabled}
        required={required}
        hidden={hidden}
        animation={animation}
      >
        <div className="item-wrapper">{children}</div>
        <label htmlFor={componentId} className="item-label">
          {label}
        </label>
      </Container>
      {helperText && (
        <Error error={error}>{capitalize(startCase(helperText))}</Error>
      )}
    </>
  );
};

const labelAnimate = css`
  padding: 0 5px;
  border-radius: ${({ theme }) => theme.border_radius.xx_small};
  top: -11px;
  left: 6px;
  bottom: auto;
  font-weight: 600;
  font-size: ${({ theme }) => theme.font_sizes.x_small};
  background-color: ${({ theme }) => theme.colors.white};
`;

const Container = styled.div`
  ${({ theme, error, required, disabled, hasValue, animation, hidden }) => css`
    position: relative;
    width: inherit;
    background: ${disabled ? theme.colors.disabled : theme.colors.white};
    border: ${
      error
        ? `1px solid ${theme.colors.error}`
        : `1px solid ${theme.colors.dark}`
    };
    border-radius: ${theme.border_radius.xx_small};
    animation: ${error && keyframes.shake} 340ms
    cubic-bezier(0.36, 0.07, 0.19, 0.97) both;

    &:hover,
    &:focus-within {
      border-color: ${
        error
          ? theme.colors.error
          : disabled
          ? darken(0.2, theme.colors.disabled)
          : darken(0.1, theme.colors.primary)
      };
    }

    .item-label,
    .item-label:after {
      color: ${
        error
          ? theme.colors.error
          : disabled
          ? lighten(0.3, theme.colors.black)
          : lighten(0.1, theme.colors.black)
      };
    }
  }

  .item-label {
    position: absolute;
    top: 0;
    left: 10px;
    bottom: 0;
    z-index: 100;
    pointer-events: none;
    display: flex;
    align-items: center;
    background-color: transparent;
    color: ${error ? theme.colors.error : theme.colors.font2};
    font-size: ${theme.font_sizes.small};
    transition: all ease-in-out 150ms, opacity 150ms;

    ${
      hidden &&
      css`
        display: none;
      `
    }

    ${!animation && labelAnimate};

    ${hasValue && labelAnimate};

    ${
      required &&
      css`
        ::after {
          display: inline-block;
          margin-left: 0.2rem;
          color: ${error ? theme.colors.error : theme.colors.font2};
          font-size: ${theme.font_sizes.small};
          line-height: 1;
          content: "*";
        }
      `
    }
  }

  .item-wrapper {
    &:hover + .item-label,
    &:hover + .item-label:after {
      color: ${
        error
          ? theme.colors.error
          : disabled
          ? darken(0.2, theme.colors.disabled)
          : darken(0.1, theme.colors.primary)
      };
    }

    &:focus-within + .item-label,
    &:-webkit-autofill + .item-label {
      ${labelAnimate};

      color: ${error ? theme.colors.error : darken(0.1, theme.colors.primary)};

      ${
        error &&
        css`
          color: ${theme.colors.error};
        `
      }

      &:after {
        color: ${
          error ? theme.colors.error : darken(0.1, theme.colors.primary)
        };
      }
    }

    input:-webkit-autofill {
      -webkit-text-fill-color: #fff;
      ${
        hasValue &&
        css`
          -webkit-text-fill-color: ${({ theme }) => theme.colors.primary};
        `
      };

      &:focus {
        -webkit-text-fill-color: ${({ theme }) => theme.colors.primary};
      }
    }

    //Styles default
    .ant-input-number,
    .ant-picker,
    .ant-select {
      width: 100%;
      box-shadow: none;
      outline: none;
    }

    .ant-input-affix-wrapper,
    .ant-input {
      box-shadow: none;
    }

    .ant-input-group-addon {
      border: 0 solid #d9d9d9;
      border-left: 1px solid #d9d9d9;
    }
  }
  `}
`;

const Error = styled(Text)`
  ${({ error, theme }) => css`
    color: ${theme.colors.error};
    font-size: ${({ theme }) => theme.font_sizes.x_small};
    ${error &&
    css`
      animation: ${keyframes.shake} 340ms;
    `};
  `}
`;
