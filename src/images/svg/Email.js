import * as React from "react";

export const SvgEmail = (props) => (
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
      d="M54 17 32 36 10 17M10.9 48 26 36"
    />
    <path
      d="M32.7 49H13c-2.2 0-4-1.8-4-4V19c0-2.2 1.8-4 4-4h38c2.2 0 4 1.8 4 4v15.5"
      fill="none"
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={2}
      style={{
        strokeDasharray: "118.04,118.04",
        strokeDashoffset: 0,
      }}
    />
    <circle
      cx={44.9}
      cy={43.1}
      fill="none"
      r={10.1}
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={2}
    />
    <path
      d="M44 41.4s-1.3 3.4-.9 5.1c.4 1.7 2.6 2.1 3.7 1.1"
      fill="none"
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={2}
      style={{
        strokeDasharray: "9.82995,9.82995",
        strokeDashoffset: 0,
      }}
    />
    <circle cx={45.4} cy={38.3} fill="#DCE9EE" r={0.9} />
    <path
      d="M45.4 37.3c-.5 0-.9.4-.9.9s.4.9.9.9.9-.4.9-.9c.1-.4-.3-.9-.9-.9z"
      fill="#f15b26"
      style={{
        strokeDasharray: "5.69581,5.69581",
        strokeDashoffset: 0,
      }}
    />
  </svg>
);
