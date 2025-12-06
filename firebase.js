import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDpCeir7xV4-5caRRDVuyTWdQYD77e-bkE",
  authDomain: "lab-6-b2970.firebaseapp.com",
  projectId: "lab-6-b2970",
  storageBucket: "lab-6-b2970.firebasestorage.app",
  messagingSenderId: "572379910408",
  appId: "1:572379910408:web:4452806c6930f38e681cbd",
  measurementId: "G-P0W8Q7C8PD"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
