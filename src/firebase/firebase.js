// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyABFXZDbMU5BVtkJW6FVrUEFCiLRNt_Gvs",
  authDomain: "trelloclone-5c5e2.firebaseapp.com",
  projectId: "trelloclone-5c5e2",
  storageBucket: "trelloclone-5c5e2.appspot.com",
  messagingSenderId: "163759463955",
  appId: "1:163759463955:web:93e39e1b73b34346d9e9e6",
  measurementId: "G-LV9D0S4EW9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app)