import { css, createGlobalStyle } from "styled-components";
import { mediaQuery } from "../constants/mediaQuery";

const global = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    overflow-x: hidden;
    font-size: 16px;
    background: #fff;
    font-family: "MontserratRegular", serif;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "MontserratRegular", serif;
    line-height: 2.3rem;
  }

  h1 {
    font-size: 2.2rem;
    font-weight: bold;
  }

  ${mediaQuery.minTablet} {
    font-size: 2.5rem;
  }

  h2 {
    font-size: 1.8rem;
    font-weight: bold;

    ${mediaQuery.minTablet} {
      font-size: 2rem;
    }
  }

  h3 {
    font-size: 1.5rem;
    font-weight: bold;
  }

  h4 {
    font-size: 1.2rem;
    font-weight: bold;
  }

  h5 {
    font-size: 1.1rem;
    font-weight: bold;
  }

  h5 {
    font-size: 1rem;
    font-weight: bold;
  }

  h1,
  h2,
  h3 {
    line-height: 2.7rem;
  }
`;

export const GlobalStyles = createGlobalStyle(global);
