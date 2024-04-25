import React from "react";
import { ComponentContainer } from "./component-container";
import { InputAntd } from "./index";

export const TextArea = ({
  value,
  required,
  disabled,
  error,
  label,
  variant = "outlined",
  isMobile = false,
  ...props
}) => {
  const Container = ComponentContainer[variant];

  return (
    <Container
      value={value}
      required={required}
      disabled={disabled}
      error={error}
      label={label}
      animation={true}
    >
      <InputAntd.TextArea
        value={value}
        disabled={disabled}
        autoComplete="chrome-off"
        size={isMobile ? "middle" : "large"}
        {...props}
      />
    </Container>
  );
};
