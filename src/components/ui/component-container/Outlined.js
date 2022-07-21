import React from "react";
import styled, { css } from "styled-components";
import { capitalize, isEmpty, startCase, toString, get } from "lodash";
import { classNames } from "../../../styles";
import { keyframes } from "../../../styles/constants/keyframes";
import Typography from "antd/lib/typography";
import { lighten, tint } from "polished";

const { Text } = Typography;

// interface Props {
//   value?: string | number | boolean | Record<string, unknown> | Moment;
//   required?: boolean;
//   hidden?: boolean;
//   error?: FormError;
//   label?: string;
//   disabled?: boolean;
//   componentId?: string;
//   children?: React.ReactNode;
//   animation?: boolean;
// }

export const Outlined = ({
  value,
  required,
  error,
  hidden = false,
  label,
  children,
  componentId,
  animation,
  disabled = false,
  bgColor,
}) => (
  <>
    <Container
      value={typeof value === "object" ? !isEmpty(value) : !!toString(value)}
      error={error}
      required={required}
      hidden={hidden}
      animation={animation}
      className={classNames({ "scroll-error-anchor": error })}
      disabled={disabled}
      bgColor={bgColor}
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
  padding: 0 5px;
  border-radius: 0.7rem;
  top: -11px;
  left: 6px;
  bottom: auto;
  font-weight: 600;
  font-size: 0.7rem;
  background-color: ${({ theme }) => theme.colors.tertiary};
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
    background: ${bgColor ? bgColor : theme.colors.tertiary};
    border: 1px solid ${
      error ? theme.colors.error : theme.colors.gray
    } !important;
    border-radius: .5rem;
    animation: ${error && keyframes.shake} 340ms
      cubic-bezier(0.36, 0.07, 0.19, 0.97) both;

    &:hover,
    &:focus-within {
      border-color: ${
        error
          ? theme.colors.error
          : disabled
          ? theme.bg.border
          : lighten(0.1, theme.colors.primary)
      };}

    .item-label,
    .item-label:after {
      color: ${
        error
          ? theme.colors.error
          : disabled
          ? theme.color.body
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
      font-size: ${theme.font_sizes.small};
      transition: all ease-in-out 150ms, opacity 150ms;

      ${
        hidden &&
        css`
          display: none;
        `
      }

      ${animation && labelAnimate};

      ${value && labelAnimate};

      ${
        required &&
        css`
          ::after {
            display: inline-block;
            margin-left: 0.2rem;
            color: ${error ? theme.colors.error : theme.colors.body};
            font-size: ${({ theme }) => theme.font_sizes.small};
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

        color: ${
          error ? theme.colors.error : lighten(0.1, theme.colors.primary)
        };

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
  color: ${({ theme }) => theme.colors.error};
  font-size: 0.7rem;
  ${({ error }) =>
    error &&
    css`
      animation: ${keyframes.shake} 340ms;
    `};
`;
