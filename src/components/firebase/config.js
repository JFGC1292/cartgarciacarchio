// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite"

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyByW4aaJEr962QEIoxPi_w4jmaJyIPmkcQ",
    authDomain: "cartgarciacarchio.firebaseapp.com",
    projectId: "cartgarciacarchio",
    storageBucket: "cartgarciacarchio.appspot.com",
    messagingSenderId: "324668829533",
    appId: "1:324668829533:web:3b70f2e1d6a578134102b4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);