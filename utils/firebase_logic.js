// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCGN_NgmbyyrBjGh1CbTFiH5Fbp_0UlWYg",
  authDomain: "geminiai-7aa83.firebaseapp.com",
  projectId: "geminiai-7aa83",
  storageBucket: "geminiai-7aa83.appspot.com",
  messagingSenderId: "753049806025",
  appId: "1:753049806025:web:c4061436534867c50e5918",
  measurementId: "G-07T5ZZVDDK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();