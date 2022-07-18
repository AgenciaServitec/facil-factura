import React from "react";
import InputAntd from "antd/lib/input";
import { ComponentContainer } from "./component-container";

// interface Props {
//   value?: string;
//   required?: boolean;
//   hidden?: boolean;
//   error?: FormError;
//   label?: string;
//   variant?: "outlined" | "filled";
//   disabled?: boolean;
// }

export const Input = ({
  value,
  required = false,
  hidden = false,
  isMobile = false,
  error,
  label,
  variant = "outlined",
  disabled,
  animation,
  bgColor,
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
      <InputAntd
        bordered={false}
        autoComplete="chrome-off"
        size={isMobile ? "middle" : "large"}
        placeholder=""
        value={value}
        disabled={disabled}
        allowClear={!disabled}
        {...props}
      />
    </Container>
  );
};
