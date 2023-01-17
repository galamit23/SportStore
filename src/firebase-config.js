 // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBoDxCkKvsvQLTBy8EOaGM_eiwpsRswl4Q",
  authDomain: "sport-store-47748.firebaseapp.com",
  projectId: "sport-store-47748",
  storageBucket: "sport-store-47748.appspot.com",
  messagingSenderId: "894917104922",
  appId: "1:894917104922:web:e07e8eecd3ec60b05548a3",
  measurementId: "G-MYRCDMT8ZV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db }