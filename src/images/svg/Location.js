import * as React from "react";

export const SvgLocation = (props) => (
  <svg
    width={props.width || "90px"}
    viewBox="0 0 64 64"
    xmlSpace="preserve"
    xmlns="http://www.w3.org/2000/svg"
    className="drawsvg-initialized"
    {...props}
  >
    <path
      fill="none"
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={2}
      d="M38.7 36.4 56 32l-17.3-4.4L42 22l-5.6 3.3L32 8l-4.4 17.3L22 22l3.3 5.6L8 32l17.3 4.4L22 42l5.6-3.3L32 56l4.4-17.3L42 42z"
    />
    <circle
      cx={32}
      cy={32}
      fill="none"
      r={4}
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={2}
    />
    <path
      d="M26.1 53.2c-7.9-2.2-13.9-8.6-15.6-16.7"
      fill="none"
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={2}
      style={{
        strokeDasharray: "24.0354,24.0354",
        strokeDashoffset: 0,
      }}
    />
    <path
      d="M53.5 36.9c-1.8 8.1-8.2 14.6-16.3 16.5"
      fill="none"
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={2}
      style={{
        strokeDasharray: "24.4411,24.4411",
        strokeDashoffset: 0,
      }}
    />
    <path
      d="M36.9 10.5c8.2 1.9 14.7 8.3 16.6 16.6"
      fill="none"
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={2}
      style={{
        strokeDasharray: "24.7444,24.7444",
        strokeDashoffset: 0,
      }}
    />
    <path
      d="M10.5 27.1c1.9-8.2 8.3-14.6 16.4-16.5"
      fill="none"
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={2}
      style={{
        strokeDasharray: "24.505,24.505",
        strokeDashoffset: 0,
      }}
    />
  </svg>
);
