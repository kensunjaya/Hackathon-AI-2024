import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images, icons } from "../../constants";
import { Image } from "react-native";
import SearchInput from "../../components/SearchInput";
import { useUser } from "../hooks/Context";
import { router } from "expo-router";
import InfoBox from "../../components/InfoBox";
import InfoBar from "../../components/InfoBar";
import firebase from "firebase/app";
import { signOut } from "firebase/auth";
import { auth } from "../config/firebase";
import CustomButton from "../../components/CustomButton";

const profile = () => {
  const user = useUser();
  const logout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error signing out: ", error);
    } finally {
      router.navigate("/sign-in");
    }
  };
  return (
    <SafeAreaView className="bg-primary h-full flex-1">
      <View className="w-full justify-center items-center mt-6 mb-6 px-4">
        <TouchableOpacity className="w-full items-end mb-10" onPress={logout}>
          <Image
            source={icons.logout}
            className="w-6 h-6"
            resizeMode="contain"
          />
        </TouchableOpacity>
        <View className="flex items-end">
          <TouchableOpacity className="px-3 w-full h-16 flex flex-row justify-center items-center">
            <View className="flex-row flex-1">            
              <Image
                source={icons.ellipseProfile}
                className="w-[8vh] h-[8vh] rounded-lg"
                resizeMode="contain"
              />
              <View className="pl-5 justify-center">
                <Text className="font-psemibold text-xl">{user.namaLengkap}</Text>
                <Text className="font-pregular text-sm text-gray-500">{user.noTelp}</Text>
                <Text className="font-pregular text-sm text-gray-500">{user.email}</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <InfoBar title="Account" />
      <TouchableOpacity className="w-full h-16 flex px-5 border border-bluesk" onPress={() => {router.push('/changepassword')}}>
        <View className="flex-row items-center w-full h-full flex">
          <Image
            source={icons.lock}
            className="w-6 h-6"
            resizeMode="contain"
          />
          <Text className="font-pregular text-lg pl-5 text-gray-500">Ubah Kata Sandi</Text>
        </View>
      </TouchableOpacity>
      
      <CustomButton 
        title="Tambah rekening lain" // nanti button ini akan dipindah ke tab profile
        handlePress={() => {router.push('/addbank')}}
        containerStyles="bg-btn_primary mx-3 my-5"
        textStyles="text-white font-pregular"
        isLoading={false}
      />
    </SafeAreaView>
  );
};

export default profile;

const styles = StyleSheet.create({});
