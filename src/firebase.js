import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCjciVRKqcTNDwqR8slwhElLQeJfMafSrc",
  authDomain: "hackaton-azamaterbol.firebaseapp.com",
  databaseURL: "https://hackaton-azamaterbol-default-rtdb.firebaseio.com",
  projectId: "hackaton-azamaterbol",
  storageBucket: "hackaton-azamaterbol.appspot.com",
  messagingSenderId: "880643172559",
  appId: "1:880643172559:web:2b1f3ea4b2622375d56fba",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
