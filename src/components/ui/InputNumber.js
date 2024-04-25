import React from "react";
import { ComponentContainer } from "./component-container";
import { InputNumberAntd } from "./index";

export const InputNumber = ({
  value,
  required = false,
  hidden = false,
  isMobile = false,
  error,
  label,
  variant = "outlined",
  disabled,
  animation,
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
    >
      <InputNumberAntd
        bordered={false}
        placeholder=""
        type="number"
        autoComplete="chrome-off"
        size={size ? size : isMobile ? "middle" : "large"}
        value={value}
        disabled={disabled}
        allowClear={!disabled}
        {...props}
      />
    </Container>
  );
};
