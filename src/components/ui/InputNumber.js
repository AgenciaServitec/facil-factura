import React from "react";
import InputNumberAntd from "antd/lib/input-number";
import { ComponentContainer } from "./component-container";

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
        size={isMobile ? "middle" : "large"}
        value={value}
        disabled={disabled}
        allowClear={!disabled}
        {...props}
      />
    </Container>
  );
};
