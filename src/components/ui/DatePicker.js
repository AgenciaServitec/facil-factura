import React from "react";
import { ComponentContainer } from "./component-container";
import { DatePickerAntd } from "./index";

export const DatePicker = ({
  value,
  required = false,
  hidden = false,
  isMobile = false,
  error,
  label,
  format = "DD/MM/YYYY",
  variant = "outlined",
  disabled,
  animation,
  bgColor,
  size = null,
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
      <DatePickerAntd
        bordered={false}
        autoComplete="chrome-off"
        format={format}
        size={size ? size : isMobile ? "middle" : "large"}
        placeholder=""
        value={value}
        disabled={disabled}
        allowClear={!disabled}
        {...props}
      />
    </Container>
  );
};
