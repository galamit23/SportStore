 // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBjzUAH74gx7tMNV1D6_uydGYpKX3Eo7q4",
  authDomain: "sport-store-e1365.firebaseapp.com",
  projectId: "sport-store-e1365",
  storageBucket: "sport-store-e1365.appspot.com",
  messagingSenderId: "997495859481",
  appId: "1:997495859481:web:82d3adcfcba33e131d3d88",
  measurementId: "G-577WND176D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db }