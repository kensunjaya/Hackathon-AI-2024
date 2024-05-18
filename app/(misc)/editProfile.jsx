import { View, Text } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity } from "react-native";
import { Image } from "react-native";
import { icons } from "../../constants";
import { router } from "expo-router";
import InfoBar from "../../components/InfoBar";
import FormField from "../../components/FormField";

const editProfile = () => {
  const [form, setForm] = useState({
    nik: "",
    namaLengkap: "",
    noTelp: "",
    email: "",
    namabank: "",
    noRekening: "",
    password: "",
  });

  const backButton = () => {
    try {
      router.push("/profile");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <SafeAreaView className="bg-primary h-full flex-1">
      <View className="justify-center items-center mt-6 mb-4">
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
      <View className="">
        <Text className="space-y-2 text-base font-pmedium mt-7 mr-4">
          Email
        </Text>
        <FormField
          title="Email"
          value={form.email}
          handleChangeText={(e) => setForm({ ...form, nik: e })}
          otherStyles="mt-7 mr-4 ml-4 rounded-full"
          placeholder="Email"
        />
        <FormField
          title="Nama Lengkap"
          value={form.namaLengkap}
          handleChangeText={(e) => setForm({ ...form, nik: e })}
          otherStyles="mt-7 mr-4 ml-4 rounded-full"
          placeholder="Nama Lengkap"
        />
        <FormField
          title="NIK"
          value={form.nik}
          handleChangeText={(e) => setForm({ ...form, nik: e })}
          otherStyles="mt-7 mr-4 ml-4 rounded-full"
          placeholder="NIK"
        />
        <FormField
          title="No Telp"
          value={form.noTelp}
          handleChangeText={(e) => setForm({ ...form, nik: e })}
          otherStyles="mt-7 mr-4 ml-4 rounded-full"
          placeholder="No Telp"
        />
      </View>
    </SafeAreaView>
  );
};

export default editProfile;
