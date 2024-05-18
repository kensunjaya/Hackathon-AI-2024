import { View, Text, ScrollView, Alert } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity } from "react-native";
import { Image } from "react-native";
import { icons } from "../../constants";
import { router } from "expo-router";
import InfoBar from "../../components/InfoBar";
import FilledFormField from "../../components/FilledFormField";
import { useUser } from "../hooks/Context";
import CustomButton from "../../components/CustomButton";

const editProfile = () => {
  const { userData } = useUser();
  const [form, setForm] = useState({
    nik: userData.nik,
    namaLengkap: userData.namaLengkap,
    noTelp: userData.noTelp,
    email: userData.email,
  });

  const backButton = () => {
    try {
      router.push("/profile");
    } catch (e) {
      console.log(e);
    }
  };

  const saveChanges = () => {
    // Langsung simpan ke database
  };

  return (
    <SafeAreaView className="bg-primary h-full flex-1">
      <View className="justify-center items-center mt-6 ">
        <TouchableOpacity
          className="w-full items-start mb-2 ml-4"
          onPress={backButton}
        >
          <Image
            source={icons.backButton}
            className="w-10 h-10"
            resizeMode="contain"
          />
        </TouchableOpacity>
        <Text className="items-start w-full mt-2 font-psemibold ml-10 text-lg">
          Edit Profile
        </Text>
        <TouchableOpacity className="w-16 h-16 bg-btn_primary rounded-full mb-7">
          <Image
            source={icons.ellipseProfile}
            className="w-16 h-16 rounded-full"
            resizeMode="contain"
          />
        </TouchableOpacity>
        <InfoBar title="Info Kontak" />
      </View>
      <View>
        <ScrollView>
          <View className="w-full justify-center px-4">
            <FilledFormField
              title="Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e })}
              otherStyles="mt-7"
              keyboardType="email-address"
              placeholder="Email"
            />
            <FilledFormField
              title="Nama Lengkap"
              value={form.namaLengkap}
              onChange={(e) => setForm({ ...form, namaLengkap: e })}
              otherStyles="mt-7"
              placeholder="Nama Lengkap"
            />
            <FilledFormField
              title="NIK"
              value={form.nik}
              onChange={(e) => setForm({ ...form, nik: e })}
              otherStyles="mt-7"
              placeholder="NIK"
            />
            <FilledFormField
              title="No. Telp"
              value={form.noTelp}
              onChange={(e) => setForm({ ...form, noTelp: e })}
              otherStyles="mt-7"
              keyboardType="phone-pad"
              placeholder="No. Telp"
            />
            <CustomButton
              title="Simpan Perubahan"
              handlePress={saveChanges}
              containerStyles="bg-btn_primary mx-3 my-5 mt-7"
              textStyles="text-white font-pregular"
              isLoading={false}
            />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default editProfile;
