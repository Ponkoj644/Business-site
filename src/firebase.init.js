// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDoSk8RvVkal2Oe5WvjVpN5eCjKbipQXmY",
  authDomain: "business-site-e274b.firebaseapp.com",
  projectId: "business-site-e274b",
  storageBucket: "business-site-e274b.appspot.com",
  messagingSenderId: "70125170604",
  appId: "1:70125170604:web:88c791a4a3a83b83449409",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
 