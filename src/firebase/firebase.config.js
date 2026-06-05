// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD1-20Kw2mgzqW2wGTGbvpMOLkbax30kiA",
  authDomain: "dragon-news-breaking-c1b5b.firebaseapp.com",
  projectId: "dragon-news-breaking-c1b5b",
  storageBucket: "dragon-news-breaking-c1b5b.firebasestorage.app",
  messagingSenderId: "455288826818",
  appId: "1:455288826818:web:5b4744894bb91678c7845b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth