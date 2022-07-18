// import { auth, firebase } from "../config";
// import { toLower, trim } from "lodash";
//
// const logIn = async (email, password) => {
//   await auth.setPersistence(firebase.auth.Auth.Persistence.SESSION);
//
//   return await auth.signInWithEmailAndPassword(toLower(trim(email)), password);
// };
//
// const logOut = () => {
//   sessionStorage.clear();
//   localStorage.clear();
//
//   return auth.signOut();
// };
//
// export const authEmail = { logIn, logOut };
