// src/components/firebase.ts
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, push } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWngCptGi4rjP0c8eqX4sN6DSzWyTF_wE",
  authDomain: "pawar-technology-services.firebaseapp.com",
  databaseURL: "https://console.firebase.google.com/u/0/project/pawar-technology-services/database/pawar-technology-services-default-rtdb/data/~2F", // Use this exact URL
  projectId: "pawar-technology-services",
  storageBucket: "pawar-technology-services.firebasestorage.app",
  messagingSenderId: "84892611955",
  appId: "1:84892611955:web:2305f7b8a99ddb2eebc106",
  measurementId: "G-QN68CPBPL5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);

export { database, ref, push };