// lib/firebase.ts
import { initializeApp } from "firebase/app";
import { getDatabase, ref, push } from "firebase/database";
import { getStorage, ref as storageRef, uploadBytes, getDownloadURL } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCpq7l7eLVYgs6WuOT5gbWTKxtTPq38uU8",
  authDomain: "pts-website-3a668.firebaseapp.com",
  databaseURL: "https://pts-website-3a668-default-rtdb.firebaseio.com",
  projectId: "pts-website-3a668",
  storageBucket: "pts-website-3a668.appspot.com",
  messagingSenderId: "874199175912",
  appId: "1:874199175912:web:3c3ca4c294a1c8c48aef5d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);

// Initialize Cloud Storage and get a reference to the service
const storage = getStorage(app);

export { database, storage, ref, push, storageRef, uploadBytes, getDownloadURL };