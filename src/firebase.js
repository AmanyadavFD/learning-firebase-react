// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyAfEn4kv3ZJjFLkhv4M8SVVp9y_n2q6vuM",
  authDomain: "app-7cb0a.firebaseapp.com",
  projectId: "app-7cb0a",
  storageBucket: "app-7cb0a.firebasestorage.app",
  messagingSenderId: "902994520973",
  appId: "1:902994520973:web:de27f183edb62dd97f2bc4",
  databaseURL: "https://app-7cb0a-default-rtdb.firebaseio.com/",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
