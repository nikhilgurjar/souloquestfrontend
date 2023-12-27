// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from "firebase/analytics";
// Your web app's Firebase configuration
const firebaseConfig = {
    // Your COnfig Goes Here
    apiKey: "AIzaSyAGDhlFFR92hxuygM_zu-rGTxCvRdL_2MY",
    authDomain: "souloquest-24f86.firebaseapp.com",
    projectId: "souloquest-24f86",
    storageBucket: "souloquest-24f86.appspot.com",
    messagingSenderId: "304679373678",
    appId: "1:304679373678:web:cd9d526d4eadddc4a20f7f",
    measurementId: "G-99LD2EGEQG"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
const analytics = getAnalytics(app);