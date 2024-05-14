// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBw5ttqulLpVntJjNvm-SAGTcmh5infgfI",
  authDomain: "baits-e240c.firebaseapp.com",
  databaseURL: "https://baits-e240c-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "baits-e240c",
  storageBucket: "baits-e240c.appspot.com",
  messagingSenderId: "609311210731",
  appId: "1:609311210731:web:5ba6eb391f556fb75812ae",
  measurementId: "G-J00RLN1W0M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app); 