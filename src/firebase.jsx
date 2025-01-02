import { initializeApp } from "firebase/app";
 import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyAD2Ccm6nZOsw-zi8YKgqUNpzVLiVR6GYA",
  authDomain: "fit-buddy-b0518.firebaseapp.com",
  projectId: "fit-buddy-b0518",
  storageBucket: "fit-buddy-b0518.firebasestorage.app",
  messagingSenderId: "254737679555",
  appId: "1:254737679555:web:bb9959e8014a7a12a48e76",
  measurementId: "G-MP5Y1MWS0T",
   databaseURL:"https://fit-buddy-b0518-default-rtdb.asia-southeast1.firebasedatabase.app/"
   
  };

  export const app = initializeApp(firebaseConfig); 