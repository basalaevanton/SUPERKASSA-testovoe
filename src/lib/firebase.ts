// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { API } from "../helpers/api";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCpnTYGEL0uzN-FAoRiznMTyIWAZ2EufF0",
  authDomain: "superkassa-testovoe.firebaseapp.com",
  projectId: "superkassa-testovoe",
  storageBucket: "superkassa-testovoe.appspot.com",
  messagingSenderId: "624207773271",
  appId: "1:624207773271:web:6c7cb8f464187f0a002d12",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
