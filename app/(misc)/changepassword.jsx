import { View, Text, ScrollView, Alert } from "react-native";
import React, { useState } from "react";
import { Image } from "react-native";
import { images } from "../../constants";
import { StatusBar } from "expo-status-bar";
import FormField from "../../components/FormField";
import CustomButton from "../../components/CustomButton";
import { router } from "expo-router";
import DropDownPicker from 'react-native-dropdown-picker';
import { doc, updateDoc } from "firebase/firestore";
import { auth, db } from "../config/firebase";
import { useUser, useUserUpdate } from "../hooks/Context";
import { updatePassword } from "firebase/auth";

const AddBank = () => {
  const userData = useUser();
  const updateUserDataContext = useUserUpdate();
  
  const [newPassword, setNewPassword] = useState("");
  const [oldPassword, setOldPassword] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = async () => {
    if (oldPassword === "" || newPassword === "") {
      Alert.alert("Error", "Mohon isi semua field yang tersedia");
    }
    else if (oldPassword !== userData.password) {
      Alert.alert("Invalid Credential", "Password lama tidak valid");
    }
    else {
      try {
        setIsSubmitting(true);
        await updateDoc(doc(db, "users", userData.email), {
          password: newPassword,
        }).then(() => {updatePassword(auth.currentUser, newPassword)});
        Alert.alert("Success", "Password berhasil diubah");
        router.push("/profile");
      }
      catch(e) {
        console.error("Failed to update password: ", e);
      }
      finally {
        setIsSubmitting(false);
        updateUserDataContext();
      }
    }
  };
  return (
    <View className="flex-1">
      <View className="h-full bg-beige flex-1">
        <View className="bg-primary h-full w-full px-4 flex-1">
          <FormField
            title="Old Password"
            value={oldPassword}
            handleChangeText={(e) => setOldPassword(e)}
            otherStyles="mt-7"
            placeholder="Kata Sandi Lama"
          />
          <FormField
            title="New Password"
            value={newPassword}
            handleChangeText={(e) => setNewPassword(e)}
            otherStyles="mt-7"
            placeholder="Kata Sandi Baru"
          />
          <CustomButton
            title="Ubah Kata Sandi"
            handlePress={submit}
            containerStyles="w-full mt-7 bg-btn_primary"
            textStyles="text-white"
            isLoading={isSubmitting}
          />
        </View>
      </View>
      <StatusBar hidden={false} />
    </View>
  );
};

export default AddBank;
