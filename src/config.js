import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDFANqbG54aX_h6m0AvQdmlEPV0Ygf0_-4",
  authDomain: "bank-767f4.firebaseapp.com",
  projectId: "bank-767f4",
  storageBucket: "bank-767f4.appspot.com",
  messagingSenderId: "118620506762",
  appId: "1:118620506762:web:16a3d007605f5ebfda3b73"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)