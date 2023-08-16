// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDYlxxI_CacNryOfLz0z8ahjyDxVNAFJkA",
  authDomain: "yeongmin-employee-management.firebaseapp.com",
  projectId: "yeongmin-employee-management",
  storageBucket: "yeongmin-employee-management.appspot.com",
  messagingSenderId: "55934831754",
  appId: "1:55934831754:web:2446fdfe76ad730581f173",
  measurementId: "G-WLKS18RHPK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);