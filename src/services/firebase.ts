import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBG4VGOGrfhUYtOzad15nunXvRpam95ZaM",
  authDomain: "teste-241a2.firebaseapp.com",
  projectId: "teste-241a2",
  storageBucket: "teste-241a2.appspot.com",
  messagingSenderId: "980540030025",
  appId: "1:980540030025:web:45a31139879d50446f1398",
  measurementId: "G-R39QPEB0WH"
};

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)