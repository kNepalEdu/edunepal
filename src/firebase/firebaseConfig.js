// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA4yNTKdsb28luVXfsAHLtQwSvUtm6mBFY",
  authDomain: "knepaledu-22cde.firebaseapp.com",
  projectId: "knepaledu-22cde",
  storageBucket: "knepaledu-22cde.appspot.com",
  messagingSenderId: "878988402383",
  appId: "1:878988402383:web:0600b6f5b47487597f21ba",
  measurementId: "G-GLDLL454NH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);