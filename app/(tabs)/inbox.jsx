import {
  View,
  Text,
  FlatList,
  Image,
  RefreshControl,
  Alert,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useUser, useUserUpdate } from "../hooks/Context";
import { CustomCardInbox } from "../../components/CustomCard";
import { icons } from "../../constants";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../config/firebase";

const Inbox = () => {
  const { userData } = useUser();
  const { updateUserData } = useUserUpdate();
  const [refreshing, setRefreshing] = React.useState(false);
  const data = userData.inbox;
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
        inbox: tempData,
      }).then(() => {
        updateUserData();
        Alert.alert("Success", "Inbox berhasil dihapus");
      });
    } catch (e) {
      console.error("Failed to delete inbox: ", e);
      Alert.alert("Error", "Terjadi error saat menghapus inbox");
    }
  };

  return (
    <SafeAreaView className="bg-primary h-full flex-1">
      <View className="flex-row items-center justify-center p-5 pt-10">
        <Text className="text-gray-800 text-3xl font-psemibold">Inbox</Text>
      </View>
      <View className="flex-1 mx-5">
        <View className="flex-row flex-1">
          <FlatList
            data={data}
            keyExtractor={(item, index) => String(index)}
            renderItem={({ item, index }) => (
              <CustomCardInbox
                className="rounded-full w-[12.5vh] h-[20vh] bg-white mr-[2.5vh] mt-[3vh] flex justify-end"
                bank={item.bank}
                norek={
                  item.norek.slice(0, 3) +
                  "-" +
                  item.norek.slice(3, 6) +
                  "-" +
                  item.norek.slice(6)
                }
                title={item.title}
                handlePress={() => handleDelete(index)}
              />
            )}
            ListEmptyComponent={() => (
              <View className="justify-center items-center mx-auto my-auto">
                <Image
                  className=" w-43 h-43 m-10"
                  resizeMode="contain"
                  source={icons.EmptyInbox}
                />
                <Text className="text-gray-500 font-psemibold text-lg text-center">
                  Inbox Anda kosong
                </Text>
              </View>
            )}
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Inbox;
