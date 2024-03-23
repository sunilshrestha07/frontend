// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "hantay0.firebaseapp.com",
  projectId: "hantay0",
  storageBucket: "hantay0.appspot.com",
  messagingSenderId: "730597430783",
  appId: "1:730597430783:web:de77bd51f2698403a303ca",
  measurementId: "G-7SNYPJ1T7F"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);