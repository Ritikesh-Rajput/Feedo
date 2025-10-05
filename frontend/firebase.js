// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "vingo-food-delivery-c5471.firebaseapp.com",
  projectId: "vingo-food-delivery-c5471",
  storageBucket: "vingo-food-delivery-c5471.firebasestorage.app",
  messagingSenderId: "218626819702",
  appId: "1:218626819702:web:c1d9fb7298d16255748157"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export { app, auth }