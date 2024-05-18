import { View, Text, ScrollView, Alert, FlatList } from "react-native";
import React, { useState } from "react";
import { Image } from "react-native";
import { images } from "../../constants";
import { StatusBar } from "expo-status-bar";
import FormField from "../../components/FormField";
import CustomButton from "../../components/CustomButton";
import { Link, router } from "expo-router";
import DropDownPicker from 'react-native-dropdown-picker';
import { doc, updateDoc } from "firebase/firestore";
import { auth, db } from "../config/firebase";
import { useUser, useUserUpdate } from "../hooks/Context";
import { updatePassword } from "firebase/auth";
import { SafeAreaView } from "react-native-safe-area-context";
import { CustomCardTeller } from "../../components/CustomCard";

const TellerPage = () => {
  const { problemData } = useUser();
  const { updateSelectedProblem } = useUserUpdate();
  console.log(problemData);

  return (
    <SafeAreaView className="flex-1 bg-primary">
      <View className="h-full bg-beige flex-1">
        <View className="bg-primary h-full w-full px-4 py-5 flex-1">
          <Text className="text-center p-5 font-psemibold text-xl text-gray-500">Daftar permasalahan</Text>
          <FlatList
            // className="border"
            data={problemData}
            keyExtractor={(item, index) => {return index}}
            renderItem={({ item }) => (
              <CustomCardTeller 
                bank={item.bank}
                description={item.description}
                email={item.email}
                norek={item.norek}
                handlePress={() => {
                  updateSelectedProblem(item);
                  router.push('/problemdetail')}}
              />
            )}
            ListEmptyComponent={() => (
              <Text className="text-gray-500 text-sm font-pregular text-center">Tidak ada permasalahan yang dilaporkan oleh nasabah</Text>
            )}
            vertical
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
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

export default TellerPage;
