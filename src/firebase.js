// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAH1Vzrf86h7q9SgIM9nfQwUZKctz0bf6g",
  authDomain: "webcafelanding-f7e00.firebaseapp.com",
  projectId: "webcafelanding-f7e00",
  storageBucket: "webcafelanding-f7e00.firebasestorage.app",
  messagingSenderId: "922459274693",
  appId: "1:922459274693:web:b547d847f022e7b1211fac",
  measurementId: "G-RNPGP8JYTB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);