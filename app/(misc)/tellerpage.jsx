import { View, Text, ScrollView, Alert, FlatList, RefreshControl } from "react-native";
import React, { useState } from "react";
import { Image } from "react-native";
import { icons, images } from "../../constants";
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
  const { updateSelectedProblem, updateProblemData } = useUserUpdate();
  console.log(problemData);

  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    updateProblemData();
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  }, []);

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
              <View className="items-center">
                <Image source={icons.EmptyInbox} className="w-40 h-40 m-10" />
                <Text className="text-gray-500 text-sm font-pregular text-center">Tidak ada permasalahan yang dilaporkan oleh nasabah</Text>
              </View>
            )}
            refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
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
