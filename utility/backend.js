import { signInWithEmailAndPassword } from "firebase/auth";
import {auth, db} from "../app/config/firebase";
import { doc, getDoc } from "firebase/firestore";
import { get } from "firebase/database";
import { Alert } from "react-native";

const getUser = async (email) => {
  try {
    const docRef = doc(db, "users", email)
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      console.log("Data does not exist in database!");
      return null;
    }
  }
  catch (e) {
    console.error("Error getting document:", e);
    return null;
  }  
}

export default getUser;