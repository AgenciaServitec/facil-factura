import { css, createGlobalStyle } from "styled-components";
import { mediaQuery } from "../constants/mediaQuery";

const global = css`
  @import url("https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap");

  * {
    font-family: "Lato", sans-serif !important;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    overflow-x: hidden;
    background: #fff;
  }

  .strong {
    font-weight: bold;
    &-sm {
      font-weight: 700;
    }
    &-md {
      font-weight: 800;
    }
    &-lg {
      font-weight: 900;
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
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
`;

export const GlobalStyle = createGlobalStyle(global);
