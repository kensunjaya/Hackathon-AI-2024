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
    console.log("processing");
    // const docRef = doc(db, "banks");
    const collectionRef = collection(db, "banks");
    const snapshot = await getDocs(collectionRef);

    // Process the documents in the snapshot
    snapshot.docs.forEach((doc) => {
      banks.push({
        label: doc.id,
        value: { name: doc.data().name, logo: doc.data().logo },
      });
    });

    // Return the banks array after it is fully populated
    return banks;
  } catch (e) {
    console.error("Error getting document:", e);
    return null;
  }
};

export { getUser, getBank };
