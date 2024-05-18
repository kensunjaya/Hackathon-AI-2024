import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../app/config/firebase";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { get } from "firebase/database";
import { Alert } from "react-native";

const getUser = async (email) => {
  try {
    const docRef = doc(db, "users", email);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      console.log("Data does not exist in database!");
      return null;
    }
  } catch (e) {
    console.error("Error getting document:", e);
    return null;
  }
};

const getBank = async () => {
  try {
    const banks = [];
    const collectionRef = collection(db, 'banks')
    const snapshot = await getDocs(collectionRef);
    snapshot.docs.forEach((doc) => {
      banks.push({
        label: doc.id,
        value: { name: doc.data().name, logo: doc.data().logo },
      });
    });

    return banks;
  } catch (e) {
    console.error("Error getting document:", e);
    return null;
  }
};

const getProblem = async() => {
  try {
    const problems = [];
    const collectionRef = collection(db, 'problems')
    const snapshot = await getDocs(collectionRef);
    snapshot.docs.forEach((doc) => {
      problems.push(doc.data());
    });
    return problems;
  } catch (e) {
    console.error("Error getting document:", e);
    return null;
  }
};

export {getUser, getBank, getProblem};
