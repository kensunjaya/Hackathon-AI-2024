import { doc, getDoc } from "firebase/firestore";
import React, { useState, useContext, useEffect } from "react";
import { auth } from '../config/firebase';
import { db } from "../config/firebase";
import getUser from "../../utility/backend";

const UserContext = React.createContext();
const UserUpdateContext = React.createContext();

export function useUser() {
  return useContext(UserContext);
}

export function useUserUpdate() {
  return useContext(UserUpdateContext);
}

export function UserProvider({ children }) {
  const [userData, setUserData] = useState({
    email: "xyz@gmail.com",
    namaLengkap: "User",
    nik: "0000000000",
    noRekening: "00000000000",
    noTelp: "00000000000",
  });
  const [currentState, setCurrentState] = useState(false);

  async function updateUserData() {
    console.log("Auth", auth);
    const data = await getUser(auth.currentUser.email);
    setUserData(data);
  }

  // const getUser = async (email) => {
  //   try {
  //     const docRef = doc(db, "users", email)
  //     const docSnap = await getDoc(docRef);
  //     if (docSnap.exists()) {
  //       // setUserData(docSnap.data());
  //       return docSnap.data();
  //     } else {
  //       console.log("No such document!");
  //       return null;
  //     }
  //   }
  //   catch (e) {
  //     console.error("Error getting document:", e);
  //     return null;
  //   }  
  // }

  // useEffect(() => {
    
  //   // Clean up the subscription on unmount
  // }, []);

  

  
  return (    
    <UserContext.Provider value={userData}>
      <UserUpdateContext.Provider value={updateUserData}>
        {children}
      </UserUpdateContext.Provider>
    </UserContext.Provider>
  )
}