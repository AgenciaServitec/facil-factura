import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import "antd/dist/reset.css";
import "./styles/fonts/index.css";
import "react-multi-carousel/lib/styles.css";
import { ScrollTop } from "./ScrollTop";
import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyle, theme } from "./styles";
import { ConfigProvider } from "antd";
import { App } from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <ThemeProvider theme={theme}>
    <ConfigProvider
      theme={{
        token: {
          fontSize: 16,
          colorPrimary: theme.colors.primary,
          colorInfo: theme.colors.primary,
          colorTextBase: theme.colors.font2,
        },
        components: {
          Typography: {
            fontSize: 15,
            fontSizeHeading1: 36,
            fontSizeHeading2: 28,
            fontSizeHeading3: 22,
            fontSizeHeading4: 18,
            fontSizeHeading5: 14,
            colorTextHeading: theme.colors.font1,
            colorText: theme.colors.font2,
            algorithm: true,
          },
          Input: {
            controlHeightLG: 53,
            lineHeight: 2.8,
            algorithm: true,
          }
        },
      }}
    >
      <GlobalStyle />
      <BrowserRouter>
        <ScrollTop>
          <App />
        </ScrollTop>
      </BrowserRouter>
    </ConfigProvider>
  </ThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
