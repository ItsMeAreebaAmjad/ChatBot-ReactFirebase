// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore, collection, addDoc } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCz2ZA1hW95-kSmnDT-K0C6kSU3HO4OTGc",
  authDomain: "chatbot-9515a.firebaseapp.com",
  projectId: "chatbot-9515a",
  storageBucket: "chatbot-9515a.firebasestorage.app",
  messagingSenderId: "282225809870",
  appId: "1:282225809870:web:4cbcb04504a2a6e42b739f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);