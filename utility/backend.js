import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../app/config/firebase";
import { collection, deleteDoc, doc, getDoc, getDocs } from "firebase/firestore";
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
      let document = doc.data();
      document.id = doc.id;
      problems.push(document);
    });
    return problems;
  } catch (e) {
    console.error("Error getting document:", e);
    return null;
  }
};

const deleteDocument = async (collectionName, docName) => {
  try {
    await deleteDoc(doc(db, collectionName, docName));
    console.log("Document successfully deleted!");
  } catch (e) {
    console.error("Error removing document: ", e);
  }
};

export { getUser, getBank, getProblem, deleteDocument };
