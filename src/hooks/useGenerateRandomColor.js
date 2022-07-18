import { useState } from "react";

export const useGenerateRandomColor = () => {
  const [color, setColor] = useState("");

  const generateColor = () => {
    setColor(Math.random().toString(16).slice(-6));
  };

  !color && generateColor();

  return { color, generateColor };
};
