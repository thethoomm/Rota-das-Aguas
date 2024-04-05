import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDqoUBOhXv7mAExqfmroDhcSuc4M0kRmew",
  authDomain: "rota-do-cap.firebaseapp.com",
  projectId: "rota-do-cap",
  storageBucket: "rota-do-cap.appspot.com",
  messagingSenderId: "921053378070",
  appId: "1:921053378070:web:ce688d16ce5fa7886e6737",
  measurementId: "G-ET9NFFSV2E"
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)