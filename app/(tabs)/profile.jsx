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
      <View className="w-full justify-center items-center mt-6 mb-12 px-4">
        <TouchableOpacity className="w-full items-end mb-10" onPress={logout}>
          <Image
            source={icons.logout}
            className="w-6 h-6"
            resizeMode="contain"
          />
        </TouchableOpacity>
        <View className="flex items-end">
          <TouchableOpacity className="w-16 h-16 flex flex-row justify-center items-center">
            <Image
              source={icons.ellipseProfile}
              className="w-[100%] h-[100%] rounded-lg"
              resizeMode="cover"
            />
          </TouchableOpacity>
        </View>
        <InfoBox
          title={user?.namaLengkap}
          containerStyles="mt-5"
          titleStyles="text-lg"
        />
      </View>
      <InfoBar title="Account" />
    </SafeAreaView>
  );
};

export default profile;

const styles = StyleSheet.create({});
