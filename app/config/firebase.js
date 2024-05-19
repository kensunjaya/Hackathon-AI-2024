// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Your web app's Firebase configuration
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

// Optionally initialize Analytics if needed
// const analytics = getAnalytics(app);

// Initialize Auth with React Native Persistence
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});

// Initialize Firestore
const db = getFirestore(app);

// Export necessary functions and constants
export { app, auth, db, collection, addDoc };
