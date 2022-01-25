
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    
  apiKey: "AIzaSyBikKlMz1SNEf-IHZP3scAcUQZ8YDAy6k8",
  authDomain: "tora-ramen.firebaseapp.com",
  projectId: "tora-ramen",
  storageBucket: "tora-ramen.appspot.com",
  messagingSenderId: "23898969888",
  appId: "1:23898969888:web:c82869570bb8a3f7316945"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;