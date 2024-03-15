import { includes } from "lodash";
import config from "./configs.json";

export { default as yup } from "./yup.json";

const hostName = window.location.hostname;

const hostsProduction = ["facturacion-electronica.site"];

const currentEnvironment = includes(hostsProduction, hostName)
  ? "production"
  : "development";

const common = config.common;
const currentConfig = config[currentEnvironment];

const { googleAnalytics, contactData } = config.common;

export {
  common,
  currentEnvironment,
  currentConfig,
  googleAnalytics,
  contactData,
};
