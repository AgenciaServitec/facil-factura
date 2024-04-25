import React from "react";
import { ComponentContainer } from "./component-container";
import { DatePickerAntd } from "./index";
import styled from "styled-components";

export const DatePicker = ({
  value,
  required = false,
  hidden = false,
  isMobile = false,
  error,
  label,
  format = "DD/MM/YYYY",
  variant = "outlined",
  placeholder = "",
  disabled,
  animation,
  bgColor,
  size = null,
  onChange,
  ...props
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
      <WrapperItem>
        {isMobile ? (
          <input
            type="date"
            className="datepicker-mobile"
            placeholder={placeholder}
            autoComplete="chrome-off"
            value={value}
            disabled={disabled}
            onChange={(e) => onChange(e.target.value)}
            required={required}
          />
        ) : (
          <DatePickerAntd
            variant="borderless"
            autoComplete="chrome-off"
            placeholder={placeholder}
            format={format}
            size={size ? size : isMobile ? "middle" : "large"}
            value={value}
            disabled={disabled}
            allowClear={!disabled}
            onChange={onChange}
            {...props}
          />
        )}
      </WrapperItem>
    </Container>
  );
};

const WrapperItem = styled.div`
  width: 100%;
  height: auto;
  .datepicker-mobile {
    background: #fff;
    width: 100%;
    height: 2.3em;
    border: none;
    margin: 0.1em 0;
    padding: 0 0.69em;
    outline: none;
  }
`;
