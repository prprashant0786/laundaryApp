import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCK68mXIxxlFZLQQWm2GY63LiO4Hvo-4QQ",
  authDomain: "pkart-b0794.firebaseapp.com",
  projectId: "pkart-b0794",
  storageBucket: "pkart-b0794.appspot.com",
  messagingSenderId: "1033099229340",
  appId: "1:1033099229340:web:400cb2cc538ae5d5f81559",
  measurementId: "G-KZYQ5TP60L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore();

export { auth, db };
