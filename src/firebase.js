// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDF_PI-koLwjlZmcaJr4dB0eVnaOOuW4gQ",
  authDomain: "portfolio-perch.firebaseapp.com",
  projectId: "portfolio-perch",
  storageBucket: "portfolio-perch.firebasestorage.app",
  messagingSenderId: "79374864984",
  appId: "1:79374864984:web:4ae8af9738b1d427f7702d",
  measurementId: "G-44X316CRND"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);