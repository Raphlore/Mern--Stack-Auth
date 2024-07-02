// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-stack-auth-bcf54.firebaseapp.com",
  projectId: "mern-stack-auth-bcf54",
  storageBucket: "mern-stack-auth-bcf54.appspot.com",
  messagingSenderId: "135601468169",
  appId: "1:135601468169:web:76e0c7ba8f7fdefc0d99d8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);