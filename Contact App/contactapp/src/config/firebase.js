// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAbj9AxV0Hv2-Ziz7aF-APSGFHmBuiXkZs",
  authDomain: "vite-contact-fd8a5.firebaseapp.com",
  projectId: "vite-contact-fd8a5",
  storageBucket: "vite-contact-fd8a5.appspot.com",
  messagingSenderId: "967553375663",
  appId: "1:967553375663:web:6882d5983c3eb902dfe35a",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
