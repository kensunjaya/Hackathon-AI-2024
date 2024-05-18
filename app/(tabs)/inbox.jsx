import { View, Text, FlatList } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useUser } from "../hooks/Context";
import { CustomCardInbox } from "../../components/CustomCard";

const Inbox = () => {
  const { userData } = useUser();

  const data = userData.inbox;
  return (
    <SafeAreaView className="bg-primary h-full flex-1">
      <View className="flex-row items-center justify-center p-5">
        <Text className="text-black font-bold text-3xl">Inbox</Text>
      </View>
      <View className="flex-1 mx-5">
        <View className="flex-row my-[3vh] flex-1">
          <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <CustomCardInbox
                className="rounded-full w-[12.5vh] h-[20vh] bg-white mr-[2.5vh] mt-[3vh] flex justify-end"
                bank={item.bank}
                norek={item.norek}
                title={item.title}
              />
            )}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Inbox;
