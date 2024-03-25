import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage";
import {
  currentConfig,
  common,
  contactData,
  currentEnvironment,
} from "../config";

firebase.initializeApp(currentConfig.firebaseApp);

// const auth = firebase.auth();
const firestore = firebase.firestore();
// const storage = firebase.storage();

const { apiUrl, servitecSalesApiUrl } = currentConfig;

console.log(currentEnvironment, ":", currentConfig.version);

export {
  currentConfig,
  firebase,
  common,
  contactData,
  firestore,
  apiUrl,
  servitecSalesApiUrl,
};
