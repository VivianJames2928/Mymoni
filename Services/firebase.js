// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { firebaseApiKey } from "../secrets/apiKey";
import {getFireStore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: firebaseApiKey,
  authDomain: "mymoni-4f0b7.firebaseapp.com",
  projectId: "mymoni-4f0b7",
  storageBucket: "mymoni-4f0b7.appspot.com",
  messagingSenderId: "80267831488",
  appId: "1:80267831488:web:496de348faab9a13882525"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFireStore(app);
export const authentication = getAuth(app);