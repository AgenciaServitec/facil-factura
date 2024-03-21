import * as React from "react";

export const CurvedLineBackground = (props) => (
  <svg
    id="patternId"
    width="100%"
    height="100%"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <defs>
      <pattern
        id="a"
        patternUnits="userSpaceOnUse"
        width="30"
        height="30"
        patternTransform="scale(1) rotate(0)"
      >
        <rect x="0" y="0" width="100%" height="100%" fill="hsla(0,0%,100%,1)" />
        <path
          d="M3.25 10h13.5M10 3.25v13.5"
          transform="translate(5,0)"
          stroke-linecap="square"
          stroke-width="0.5"
          stroke="hsla(189, 62%, 82%, 1)"
          fill="none"
        />
      </pattern>
    </defs>
    <rect
      width="800%"
      height="800%"
      transform="translate(0,0)"
      fill="url(#a)"
    />
  </svg>
);
