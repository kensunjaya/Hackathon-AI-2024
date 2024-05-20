import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../app/config/firebase";
import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, updateDoc } from "firebase/firestore";
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

const postProblem = async (bank, berkas, description, email, norek) => {
  try {
    await addDoc(collection(db, "problems"), {
      bank: bank,
      berkas: berkas,
      description: description,
      email: email,
      norek: norek,
    });
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

const postRiwayat = async (bank, title, date, email) => {
  try {
    const userdata = await getUser(email);
    userdata.riwayat.push({bank: bank, title: title, date: date});
    const docRef = await updateDoc(doc(db, "users", email), {
      riwayat: userdata.riwayat,
    });
  }
  catch(e) {
    console.error("Error adding document: ", e);
  }
}

const getProblem = async () => {
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

export { getUser, getBank, getProblem, deleteDocument, postProblem, postRiwayat };
