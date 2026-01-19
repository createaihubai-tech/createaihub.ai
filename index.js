// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC3RYM58nbXVs2Ny1HhS4ILT1NIXIWeqK4",
  authDomain: "createaihub.firebaseapp.com",
  projectId: "createaihub",
  storageBucket: "createaihub.firebasestorage.app",
  messagingSenderId: "808253173890",
  appId: "1:808253173890:web:46cd29aa93e1b8d45ec49b",
  measurementId: "G-L5ZQ2P84G3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
