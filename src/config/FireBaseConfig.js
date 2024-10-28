// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCloJ3D6JIzAM5hBkPYBZxUDTjjzw9l0iE",
  authDomain: "jarvis-78ed9.firebaseapp.com",
  projectId: "jarvis-78ed9",
  storageBucket: "jarvis-78ed9.appspot.com",
  messagingSenderId: "859871688392",
  appId: "1:859871688392:web:0f76d0c0d1e07f1b1b17fd",
  measurementId: "G-CVELEWWP7P"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);