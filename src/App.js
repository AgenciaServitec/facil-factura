import React, { useEffect } from "react";
import { Router } from "./router";
import { yup } from "./config";
import { setLocale } from "yup";
import { currentConfig } from "./config";
import * as ReactGA from "react-ga";

export const App = () => {
  const firebaseApp = currentConfig.firebaseApp;

  useEffect(() => {
    ReactGA.initialize(firebaseApp.measurementId);
    ReactGA.pageview(window.location.pathname + window.location.search);
    setLocale(yup["es"]);
  }, [firebaseApp.measurementId]);

  return <Router />;
};
