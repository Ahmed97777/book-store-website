// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD0RaIDVLfAIexrX4V_A-E4Qg-2_HgXP5g",
  authDomain: "aop-project-auth.firebaseapp.com",
  projectId: "aop-project-auth",
  storageBucket: "aop-project-auth.appspot.com",
  messagingSenderId: "127880725885",
  appId: "1:127880725885:web:5776f5530070b5cfd77814",
  measurementId: "G-PZK5BEPLSS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

const analytics = getAnalytics(app);