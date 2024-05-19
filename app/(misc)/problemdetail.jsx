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
import { deleteDocument } from "../../utility/backend";

const ProblemDetail = () => {
  const { selectedProblem } = useUser();
  const { updateProblemData } = useUserUpdate();
  console.log(selectedProblem);

  const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <SafeAreaView className="flex-1 bg-primary">
      <View className="h-full bg-beige flex-1">
        <View className="bg-primary h-full w-full py-5 flex-1">
          <Text className="text-center pt-5 font-psemibold text-xl text-gray-500">Detil Permasalahan</Text>
          <View className="my-3 border border-bluesk">          
            <View className="px-3">
              <View className="flex-row py-1">
                <Text className="text-gray-500 font-psemibold text-sm">Email: </Text>
                <Text className="text-gray-500 font-pregular text-sm">{selectedProblem.email}</Text>
              </View>
              <View className="flex-row py-1">
                <Text className="text-gray-500 font-psemibold text-sm">Bank: </Text>
                <Text className="text-gray-500 font-pregular text-sm">{selectedProblem.bank}</Text>
              </View>
              <View className="flex-row py-1">
                <Text className="text-gray-500 font-psemibold text-sm">Nomor rekening: </Text>
                <Text className="text-gray-500 font-pregular text-sm">{selectedProblem.norek}</Text>   
              </View>
              <View className="flex-row py-1">
                <Text className="text-gray-500 font-psemibold text-sm">Deskripsi: </Text>
                <Text className="text-gray-500 font-pregular text-sm">{selectedProblem.description}</Text>
              </View>
            </View>
          </View>
          
          <View className="mx-3 flex-1">
            <FlatList
              // className="border"
              data={selectedProblem.berkas}
              keyExtractor={(item, index) => String(index)}
              renderItem={({ item }) => (
                <View className="py-2">
                  <Text className="text-gray-500 font-psemibold text-sm">{item.title}</Text>
                  <Text className="text-gray-500 font-pregular text-sm">{item.value}</Text>
                </View>
              )}
              ListEmptyComponent={() => (
                <Text className="text-gray-500 text-sm font-pregular text-center">User tidak melampirkan berkas tambahan</Text>
              )}
              vertical
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </View>
      </View>
      <View className="flex-row w-full justify-center">
        <CustomButton
          title="Hapus"
          handlePress={() => {
            deleteDocument('problems', selectedProblem.id);
            updateProblemData();
            Alert.alert("Success", "Permasalahan berhasil dihapus");
            router.push('/tellerpage');
          }}
          containerStyles="mt-7 bg-lightred ml-5 mr-2.5 my-5 flex-1"
          textStyles="text-white"
          isLoading={isSubmitting}
        />
        <CustomButton
          title="Proses"
          handlePress={() => router.push('/sendProblemResponse')}
          containerStyles="mt-7 bg-btn_primary mr-5 ml-2.5 my-5 flex-1"
          textStyles="text-white"
          isLoading={isSubmitting}
        />
      </View>
      <View className="flex-row justify-center">
        <Text className="text-gray-500 text-sm font-pregular pb-5">Akun Teller @BAITS | </Text>
        <Link className="text-sm text-btn_primary font-psemibold pb-5" href="/sign-in">Logout</Link>
      </View>
      <StatusBar hidden={false} />
    </SafeAreaView>
  );
};

export default ProblemDetail;
