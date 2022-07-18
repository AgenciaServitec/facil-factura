import React from "react";
import AntSelect from "antd/lib/select";
import { ComponentContainer } from "./component-container";
import { defaultTo } from "lodash";
import { SelectOption } from "./SelectOption";
import { lighten } from "polished";
import styled, { css } from "styled-components";

// export type SelectValue = string;
//
// type SelectFilterOption = (
//   inputValue: SelectValue,
//   optionLabel: string
// ) => boolean;

// type SelectOnChange = (value?: SelectValue) => void;

// interface Props {
//   name?: string;
//   value?: SelectValue;
//   required?: boolean;
//   error?: FormError;
//   label?: string;
//   variant?: "outlined" | "filled";
//   disabled?: boolean;
//   allowClear?: boolean;
//   children?: JSX.Element[];
//   onChange?: SelectOnChange;
//   filterOption?: SelectFilterOption;
//   mode?: "multiple" | "tags";
// }

const defaultFilterOption = (inputValue, optionLabel) =>
  defaultTo(optionLabel, "").toUpperCase().indexOf(inputValue.toUpperCase()) ===
  0;

export const Select = ({
  value,
  required = false,
  error = false,
  disabled = false,
  animation = false,
  isMobile = false,
  label,
  children,
  variant = "outlined",
  allowClear,
  filterOption = (inputValue, optionLabel) =>
    defaultFilterOption(inputValue, optionLabel),
  options = [],
  placeholder = "",
  onChange = (value) => value,
  ...props
}) => {
  const Container = ComponentContainer[variant];

  return (
    <Container
      required={required}
      value={value}
      error={error}
      disabled={disabled}
      label={label}
      animation={animation}
    >
      {isMobile ? (
        <StyledSelectMobile
          key={value}
          disabled={disabled}
          error={error}
          onChange={(event) => onChange && onChange(event.target.value)}
          value={value}
          defaultValue={value}
          placeholder={placeholder}
        >
          {placeholder && <option hidden>{placeholder}</option>}
          {!value && <option hidden />}
          {options.map((option) => (
            <option key={option.code} value={option.value}>
              {option.label}
            </option>
          ))}
        </StyledSelectMobile>
      ) : (
        <AntSelect
          allowClear={disabled ? false : allowClear}
          bordered={false}
          disabled={disabled}
          value={value}
          onChange={onChange}
          filterOption={(inputValue, option) =>
            filterOption(inputValue, option?.children)
          }
          showSearch
          size="large"
          placeholder=""
          {...props}
        >
          {options.map((option) => (
            <SelectOption key={option.code} value={option.value}>
              {option.label}
            </SelectOption>
          ))}
        </AntSelect>
      )}
    </Container>
  );
};

const StyledSelectMobile = styled.select`
  ${({ theme, error, value, placeholder }) => css`
    width: 100%;
    height: 32px;
    border: none;
    margin: 0 11px 4px 11px;
    font-size: 1rem;
    background-color: ${error
      ? lighten(0.4, theme.colors.error)
      : "transparent"};
    cursor: text;
    border-radius: ${theme.border_radius.xx_small};
    color: ${placeholder && !value ? theme.colors.black60 : theme.colors.font1};
    font-weight: ${theme.font_weight.medium};

    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' fill='#6D8BA1'><polygon points='0,0 100,0 50,50'/></svg>");
    background-repeat: no-repeat;
    background-size: 10px;
    background-position: right center;

    &:focus-within {
      background: ${theme.colors.white};
      outline: none;
    }
  `}
`;
