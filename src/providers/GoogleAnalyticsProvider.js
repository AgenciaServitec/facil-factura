import React, { createContext, useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { googleAnalytics, currentEnvironment } from "../config";
import ReactGA from "react-ga4";

// interface Context {
//   gaClientId: string;
// }
//
// interface Props {
//   children: JSX.Element;
// }

export const GoogleAnalyticsContext = createContext({
  gaClientId: "",
});

export const GoogleAnalyticsProvider = ({ children }) => {
  const gaClientId = getGaClientId();

  console.log({ googleAnalytics });

  ReactGA.initialize(googleAnalytics.measurementId, {
    gaOptions: {
      clientId: gaClientId,
      ...(currentEnvironment === "development" && {
        debug_mode: true,
      }),
    },
  });

  return (
    <GoogleAnalyticsContext.Provider value={{ gaClientId }}>
      {children}
    </GoogleAnalyticsContext.Provider>
  );
};
export const useGoogleAnalytics = () => useContext(GoogleAnalyticsContext);

const getGaClientId = () => {
  const storageKey = "gaClientId";

  const gaClientIdFromStorage = localStorage.getItem(storageKey);

  if (gaClientIdFromStorage) return gaClientIdFromStorage;

  const newGaClientId = uuidv4();

  localStorage.setItem(storageKey, newGaClientId);

  return newGaClientId;
};
