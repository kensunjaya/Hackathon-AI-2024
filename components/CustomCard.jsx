import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { icons } from "../constants";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../constants";

const CustomCardHistory = (props) => {
  const date = new Date(props.date.seconds * 1000);
  const stringDate = date.toString();
  return (
    <View className="bg-white rounded-[20px] mb-[3vh] flex p-5">
      <View className="flex-row">
        <View>
          <Text className="font-psemibold text-gray-200 text-sm mb-3">
            {stringDate.slice(4, 16)}
          </Text>
          <Text className="font-pregular text-gray-200 text-s ">
            {props.title}
          </Text>
        </View>
        <TouchableOpacity className="ml-auto" onPress={props.handlePress}>
          <Image
            source={icons.trash}
            className="w-4 h-4"
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
      <View className="items-end flex-row h-fit">
        <Text className="text-gray-200 text-s">{props.subtitle} Bank</Text>
        <View className="ml-auto">
          <Image
            src={props.logo}
            className="w-[6vh] h-[6vh]"
            resizeMode="contain"
          />
        </View>
      </View>
    </View>
  );
};

const CustomCardRekening = (props) => {
  return (
    <TouchableOpacity
      className="bg-white rounded-[20px] mb-[3vh] flex p-5"
      onPress={props.handlePress}
      activeOpacity={0.7}
    >
      <View className="items-end flex-row">
        <View>
          <Text className="font-psemibold text-gray-200 text-sm mb-3">
            Rekening {props.namabank}
          </Text>
          <Text className="text-gray-200 text-xl">{props.norek}</Text>
        </View>
        <View className="ml-auto">
          <Image
            src={props.logo}
            className="w-[6vh] h-[6vh]"
            resizeMode="contain"
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const CustomCardTeller = (props) => {
  return (
    <TouchableOpacity
      className="bg-white rounded-[20px] mb-[3vh] flex p-5"
      onPress={props.handlePress}
      activeOpacity={0.7}
    >
      <View className="items-end flex-row">
        <View className="w-full">
          <Text className="font-psemibold text-gray-200 text-sm">
            {props.email}
          </Text>
          <Text className="text-gray-200 text-sm my-2 font-pregular">
            {props.description}
          </Text>
          <View className="flex-row w-full">
            <Text className="text-gray-200 text-sm font-psemibold">Bank {props.bank}</Text>
            <Text className="text-gray-200 text-sm font-pregular ml-auto">
              {props.norek}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const CustomCardInbox = (props) => {
  return (
    <TouchableOpacity
      className="bg-white rounded-[20px] mb-[3vh] flex p-5"
      onPress={props.handlePress}
      activeOpacity={0.7}
    >
      <View className="items-end flex-row">
        <View className="w-full">
          <View className="flex-row">
            <Text className="font-psemibold text-gray-200 text-sm mb-3">
              Rekening {props.bank}
            </Text>
            <Text className="text-gray-200 text-sm font-pregular ml-auto mr-3">
              {props.norek}
            </Text>
            <TouchableOpacity onPress={props.handlePress}>
              <Image
                source={icons.trash}
                className="w-4 h-4 ml-auto"
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
          <Text className="text-gray-200 text-sm font-pregular">
            {props.title}
          </Text>
        </View>
        <View className="ml-auto"></View>
      </View>
    </TouchableOpacity>
  );
};

export {
  CustomCardHistory,
  CustomCardRekening,
  CustomCardInbox,
  CustomCardTeller,
};
