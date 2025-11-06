// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAsY4OxM_n4SZZqevLtR7dO-dI1k0Rzzfs",
  authDomain: "note-194e9.firebaseapp.com",
  projectId: "note-194e9",
  storageBucket: "note-194e9.firebasestorage.app",
  messagingSenderId: "483516685101",
  appId: "1:483516685101:web:e0a55b89937a5203b991a4",
  measurementId: "G-L2V3L59SK2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
