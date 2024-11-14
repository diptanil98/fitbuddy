import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
    apiKey: "AIzaSyDzP-Bid_XLPptLi_v_5_QAgWCXd1xR_sU",
    authDomain: "fitbuddy-81017.firebaseapp.com",
    projectId: "fitbuddy-81017",
    storageBucket: "fitbuddy-81017.firebasestorage.app",
    messagingSenderId: "781316976668",
    appId: "1:781316976668:web:28c0ee580816a0d398efd9",
    measurementId: "G-WH4C6PCLG5",
    databaseURL:"https://console.firebase.google.com/u/0/project/fitbuddy-81017/database/fitbuddy-81017-default-rtdb/data/~2F"
  };

  export const app = initializeApp(firebaseConfig); 