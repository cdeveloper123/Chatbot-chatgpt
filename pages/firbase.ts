// Import the functions you need from the SDKs you need

import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore,  } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB09WczCxqVZw8Fvs4zOhFAO17fwgalXms",
  authDomain: "vercel-ui.firebaseapp.com",
  projectId: "vercel-ui",
  storageBucket: "vercel-ui.appspot.com",
  messagingSenderId: "882217977280",
  appId: "1:882217977280:web:f12761efaf33e306323425",
  measurementId: "G-117HYRJ1DP"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();


export { app, db, auth }