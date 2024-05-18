import { View, Text, FlatList, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useUser } from "../hooks/Context";
import { CustomCardInbox } from "../../components/CustomCard";
import { icons } from "../../constants";

const Inbox = () => {
  const { userData } = useUser();

  const data = userData.inbox;
  return (
    <SafeAreaView className="bg-primary h-full flex-1">
      <View className="flex-row items-center justify-center p-5 pt-10">
        <Text className="text-gray-800 text-3xl font-psemibold">Inbox</Text>
      </View>
      <View className="flex-1 mx-5">
        <View className="flex-row flex-1">
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
            ListEmptyComponent={() => (
              <View className="justify-center items-center mx-auto my-auto">
                <Text className="text-btn_primary font-pbold text-lg text-center">
                  Inbox is Empty {":("}
                </Text>
                <Image
                  className=" w-43 h-43"
                  resizeMode="contain"
                  source={icons.EmptyInbox}
                />
              </View>
            )}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Inbox;
