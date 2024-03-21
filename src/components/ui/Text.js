import React from "react";
import styled from "styled-components";
import { Typography } from "antd";

const LEVELS = {
  1: "15px",
  2: "13px",
  3: "10px",
};

export const Text = ({ children, level = 1, ...props }) => {
  return (
    <TextAntd level={level} {...props}>
      {children}
    </TextAntd>
  );
};

const TextAntd = styled(Typography.Text)`
  font-size: ${({ level }) => LEVELS[level || 1]};
  color: ${({ color }) => color};
`;
