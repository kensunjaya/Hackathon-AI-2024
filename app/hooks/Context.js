import { doc, getDoc } from "firebase/firestore";
import React, { useState, useContext, useEffect } from "react";
import { auth } from '../config/firebase';
import { db } from "../config/firebase";
import { getBank, getProblem, getUser } from "../../utility/backend";

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
    noRekening: ["00000000000"],
    noTelp: "00000000000",
    password: "default",
    riwayat: [],
    inbox: [],
  });
  const [bankData, setBankData] = useState([{
    label: "Null",
    value: {name: "Null", logo: null},
  }]);
  const [problemData, setProblemData] = useState([])
  const [selectedProblem, setSelectedProblem] = useState({})

  useEffect(() => {
    const fetchBankData = async () => {
      try {
        const data = await getBank(); 
        setBankData(data); 
        return bankData;
      } catch (e) {
        console.error("Error getting bank data:", e);
      }
    };
    fetchBankData();
  }, []);

  async function updateUserData() {
    console.log("Auth", auth);
    try {
      const data = await getUser(auth.currentUser.email);
      setUserData(data);
    } catch (e) {
      console.error("Error getting document:", e);
    }
  }

  async function updateProblemData() {
    try {
      const data = await getProblem();
      setProblemData(data);
    }
    catch (e) {
      Alert.alert("Error", e.message);
    }
  }

  function updateSelectedProblem(problem) {
    setSelectedProblem(problem);
  }
  
  return (    
    <UserContext.Provider value={{ userData, bankData, problemData, selectedProblem }}>
      <UserUpdateContext.Provider value={{ updateUserData, updateProblemData, updateSelectedProblem }}>
        {children}
      </UserUpdateContext.Provider>
    </UserContext.Provider>
  )
}