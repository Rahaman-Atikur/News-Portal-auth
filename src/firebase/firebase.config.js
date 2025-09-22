// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3x_SJ18AG5qjmHPgFMIEuTnVrGg_16e8",
  authDomain: "news-portal-auth-f5cdd.firebaseapp.com",
  projectId: "news-portal-auth-f5cdd",
  storageBucket: "news-portal-auth-f5cdd.firebasestorage.app",
  messagingSenderId: "473952128719",
  appId: "1:473952128719:web:e6e67daab7836acfe471ba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;