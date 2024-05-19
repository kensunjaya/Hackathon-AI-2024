import { View, Text, ScrollView, Alert } from "react-native";
import React, { useState } from "react";
import { Image } from "react-native";
import { images } from "../../constants";
import { StatusBar } from "expo-status-bar";
import FormField from "../../components/FormField";
import CustomButton from "../../components/CustomButton";
import { Link, router } from "expo-router";
import DropDownPicker from 'react-native-dropdown-picker';
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../config/firebase";
import { useUser } from "../hooks/Context";
import { SafeAreaView } from "react-native-safe-area-context";
import { getUser } from "../../utility/backend";

const SendProblemResponse = () => {
  const { selectedProblem } = useUser();
  
  const [message, setMessage] = useState("");
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = async () => {
    if (message === "") {
      Alert.alert("Error", "Mohon cantumkan pesan");
    }
    else if (message.length < 4) {
      Alert.alert("Error", "Pesan terlalu pendek")
    }
    else {
      try {
        setIsSubmitting(true);
        const userdata = await getUser(selectedProblem.email);
        userdata.inbox.push({bank: selectedProblem.bank, norek: selectedProblem.norek, title: message});
        const docRef = await updateDoc(doc(db, "users", selectedProblem.email), {
          inbox: userdata.inbox,
        });
        Alert.alert("Success", "Pesan berhasil dikirim ke inbox nasabah")
      }
      catch(e) {
        console.error("Error adding document: ", e);
      }
      finally {
        setIsSubmitting(false);
        router.push("/tellerpage");
      }
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-primary mx-3">
      <View className="h-full bg-primary flex-1">
        <View className="my-10 h-full">
          <Text className="text-gray-500 font-psemibold text-xl text-center mb-5">Cantumkan pesan untuk ditampilkan ke inbox nasabah</Text>
          <Text className="text-gray-500 font-pregular text-sm">{'>'} {selectedProblem.email}</Text>
          <FormField
            title="Pesan"
            value={message}
            handleChangeText={(e) => setMessage(e)}
            otherStyles="mt-7"
            placeholder="Ketik Pesan"
          />
          <CustomButton
            title="Kirim respon"
            handlePress={submit}
            containerStyles="w-full mt-7 bg-btn_primary"
            textStyles="text-white"
            isLoading={isSubmitting}
          />
          
        </View>
        </View>
        <View className="flex-row justify-center">
          <Text className="text-gray-500 text-sm font-pregular pb-5">Akun Teller @BAITS | </Text>
          <Link className="text-sm text-btn_primary font-psemibold pb-5" href="/sign-in">Logout</Link>
        </View>
        
      <StatusBar hidden={false} />
    </SafeAreaView>
  );
};

export default SendProblemResponse;
