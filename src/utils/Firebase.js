// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDj5lxat9FLIWs1kyaBr5zDcOzZSdJrwMI",
  authDomain: "netflixgpt-41ded.firebaseapp.com",
  projectId: "netflixgpt-41ded",
  storageBucket: "netflixgpt-41ded.appspot.com",
  messagingSenderId: "1010822942393",
  appId: "1:1010822942393:web:729673f9dae2d13e459568",
  measurementId: "G-92WPF75W5C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();