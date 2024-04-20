import React from "react";
import { ComponentContainer } from "./component-container";
import { TimePickerAntd } from "./index";
import dayjs from "dayjs";

export const TimePicker = ({
  value,
  required = false,
  hidden = false,
  isMobile = false,
  error,
  label,
  format = "HH:mm ss",
  variant = "outlined",
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
      <TimePickerAntd
        bordered={false}
        autoComplete="chrome-off"
        defaultOpenValue={dayjs("00:00:00", "HH:mm:ss")}
        format={format}
        size={size ? size : isMobile ? "middle" : "large"}
        placeholder=""
        value={value}
        disabled={disabled}
        allowClear={!disabled}
        onChange={onChange}
        {...props}
      />
    </Container>
  );
};
