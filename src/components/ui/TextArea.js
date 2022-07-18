import React from "react";
import InputAntd from "antd/lib/input";
import { ComponentContainer } from "./component-container";

// interface Props {
//   value?: string | number;
//   required?: boolean;
//   error?: FormError;
//   label?: string;
//   variant?: "outlined" | "filled";
//   disabled?: boolean;
// }

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
      animation={false}
    >
      <InputAntd.TextArea
        bordered={false}
        value={value}
        disabled={disabled}
        autoComplete="chrome-off"
        size={isMobile ? "middle" : "large"}
        {...props}
      />
    </Container>
  );
};
