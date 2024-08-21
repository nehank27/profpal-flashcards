// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBOqES2D89psfEL3pBq2vzA5j199epxeTY",
  authDomain: "profpalflashcards.firebaseapp.com",
  projectId: "profpalflashcards",
  storageBucket: "profpalflashcards.appspot.com",
  messagingSenderId: "1087347735122",
  appId: "1:1087347735122:web:0ffaa8406abb97b67d7d8b",
  measurementId: "G-0J4MCQD8ZH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);