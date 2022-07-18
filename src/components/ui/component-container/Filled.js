import React from "react";
import styled, { css } from "styled-components";
import { capitalize, get, isEmpty, startCase, toString } from "lodash";
import { classNames } from "../../../styles";
import { keyframes } from "../../../styles/constants/keyframes";
import Typography from "antd/lib/typography";
import { lighten, tint } from "polished";

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
}) => (
  <>
    <Container
      value={typeof value === "object" ? !isEmpty(value) : !!toString(value)}
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
    {error && (
      <Error error={error}>
        {capitalize(startCase(get(error, "message")))}
      </Error>
    )}
  </>
);

const labelAnimate = css`
  padding: 2px 0 0 5px;
  top: 4px;
  left: 6px;
  bottom: auto;
  text-transform: capitalize;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.font2};
  font-size: 0.8em;
  letter-spacing: 0.01em;
  font-family: inherit;
`;

const Container = styled.div`
  ${({
    theme,
    error,
    required,
    disabled,
    value,
    animation,
    hidden,
    bgColor,
  }) => css`
  position: relative;
  width: inherit;
  border-radius: .7rem;
  background: ${disabled ? theme.colors.gray2 : bgColor || theme.colors.white};
  border: 1px solid
    ${error ? theme.colors.error : theme.colors.gray};
  animation: ${error && keyframes.shake} 340ms
    cubic-bezier(0.36, 0.07, 0.19, 0.97) both;

  &:hover,
  &:focus-within {
    border-color: ${
      error
        ? theme.colors.error
        : disabled
        ? theme.colors.gray
        : lighten(0.1, theme.colors.primary)
    };}

    .item-label,
    .item-label:after {
      color: ${
        error
          ? theme.colors.error
          : disabled
          ? theme.colors.gray
          : lighten(0.1, theme.colors.primary)
      };
    }
  }

  &:focus-within {
    ${
      error
        ? css`
            border-color: ${theme.colors.error};
            box-shadow: 0 0 0 2px ${tint(0.85, theme.colors.error)};
          `
        : css`
            border-color: ${lighten(0.1, theme.colors.primary)};
            box-shadow: 0 0 0 2px ${tint(0.85, theme.colors.primary)};
          `
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
    color: ${error ? theme.colors.error : theme.colors.body};
    font-size: 1rem;
    transition: all ease-in-out 150ms, opacity 150ms;

    ${
      hidden &&
      css`
        display: none;
      `
    }

    ${!animation && labelAnimate};

    ${value && labelAnimate};
    
    ${
      required &&
      css`
        ::after {
          display: inline-block;
          margin-left: 0.2rem;
          color: ${error ? theme.colors.error : theme.colors.body};
          font-size: 1rem;
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
          ? theme.colors.body
          : lighten(0.1, theme.colors.primary)
      };
    }
    
    &:focus-within + .item-label,
    &:-webkit-autofill + .item-label {
      ${labelAnimate};
      
      color: ${error ? theme.colors.error : lighten(0.1, theme.colors.primary)};

      ${
        error &&
        css`
          color: ${theme.colors.error};
        `
      }

      &:after {
        color: ${
          error ? theme.colors.error : lighten(0.1, theme.colors.primary)
        };
      }
    }

    input:-webkit-autofill {
      -webkit-text-fill-color: #fff;
      ${
        value &&
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
    font-size: 0.7rem;
    ${error &&
    css`
      animation: ${keyframes.shake} 340ms;
    `};
  `}
`;
