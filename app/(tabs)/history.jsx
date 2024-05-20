import {
  View,
  Text,
  Image,
  ImageBackground,
  FlatList,
  ScrollView,
  Alert,
  RefreshControl,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images, icons } from "../../constants";
import { StatusBar } from "expo-status-bar";
import { CustomCardHistory } from "../../components/CustomCard";
import { useUser, useUserUpdate } from "../hooks/Context";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../config/firebase";
import { getBank } from "../../utility/backend";

const History = () => {
  const { userData, bankData } = useUser();
  const { updateUserData } = useUserUpdate();
  const data = userData.riwayat;
  const [refreshing, setRefreshing] = useState(false);
  let tempData = data;

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    updateUserData();
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  }, []);

  const handleDelete = async (index) => {
    tempData.splice(index, 1);
    try {
      await updateDoc(doc(db, "users", userData.email), {
        riwayat: tempData,
      }).then(() => {
        updateUserData();
        Alert.alert("Success", "Riwayat berhasil dihapus");
      });
    } catch (e) {
      console.error("Failed to delete inbox: ", e);
      Alert.alert("Error", "Terjadi error saat menghapus riwayat");
    }
  };

  return (
    <View className="h-full flex-1">
      <Image
        source={images.historybg}
        className="w-full h-[21vh] bg-beige flex flex-end justify-end align-top"
        resizeMode="covern"
      />

      <View className="h-full bg-beige flex-1">
        <SafeAreaView className="pt-[1rem] relative h-full bg-primary rounded-t-[40px] flex-1">
          <Text className="text-2xl text-center font-psemibold pb-5 text-gray-800">
            Riwayat Kegiatan Anda
          </Text>
          <View className="px-[3vh] flex-1">
            <FlatList
              // className="border"
              data={data}
              keyExtractor={(item, index) => String(index)}
              renderItem={({ item, index }) => (
                <CustomCardHistory
                  title={item.title}
                  logo={bankData.find((bank) => bank.label === item.bank).value.logo}
                  subtitle={item.bank}
                  date={item.date}
                  handlePress={() => handleDelete(index)}
                />
              )}
              ListEmptyComponent={() => (
                <View>
                  <Text className="text-center font-pregular text-lg mt-10">
                    Tidak ada riwayat kegiatan
                  </Text>
                </View>
              )}
              refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
              // refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>}
            />
          </View>
        </SafeAreaView>
      </View>
      <StatusBar hidden={false} />
    </View>
  );
};

export default History;
