// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_EfcT3xu4XB-JJlT-3dZDQ7oo-hcle6U",
  authDomain: "task-master-28474.firebaseapp.com",
  projectId: "task-master-28474",
  storageBucket: "task-master-28474.appspot.com",
  messagingSenderId: "1088138822242",
  appId: "1:1088138822242:web:d86155982bb7ed811dc73b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);