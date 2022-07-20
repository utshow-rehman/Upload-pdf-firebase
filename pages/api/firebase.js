import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyBon6i_Q-UqoD6LKthsqMm-IlXKIN8Fbcg",
  authDomain: "react-firebase-storage-7b846.firebaseapp.com",
  projectId: "react-firebase-storage-7b846",
  storageBucket: "react-firebase-storage-7b846.appspot.com",
  messagingSenderId: "613099577641",
  appId: "1:613099577641:web:1f6d3b7ab0e5a2353b9738"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);