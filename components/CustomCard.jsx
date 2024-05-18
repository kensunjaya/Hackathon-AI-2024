import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { icons } from "../constants";
import { SafeAreaView } from "react-native-safe-area-context";

const CustomCardHome = (props) => {
  if (props.title !== "") {
    return (
      <TouchableOpacity
        className="min-h-[20vh] min-w-[12.5vh] bg-white rounded-[20px] mr-[2.5vh] mt-[3vh] flex justify-end"
        onPress={props.handlePress}
        activeOpacity={0.7}
      >
        <View className="pb-[3vh] items-center">
          <Image
            source={props.logo}
            className="w-[8vh] h-[8vh]"
            resizeMode="contain"
          />
        </View>
        <View className="pb-[2vh]">
          <Text className="font-pregular text-gray-200 text-sm text-center">
            {props.title}
          </Text>
          <Text className="font-pregular text-gray-200 text-[10px] text-center">
            {props.subtitle}
          </Text>
        </View>
      </TouchableOpacity>
    );
  } else {
    return (
      <TouchableOpacity
        className="h-[20vh] w-[12.5vh] bg-white rounded-[20px] mt-[3vh] flex justify-end"
        onPress={props.handlePress}
        activeOpacity={0.7}
      >
        <View className="pb-[4vh]">
          <Text className="font-pregular text-gray-200 text-sm text-center">
            Tambah
          </Text>
          <Text className="font-pregular text-gray-200 text-sm text-center">
            bank lain
          </Text>
        </View>
        <View className="pb-[3vh] items-center">
          <Image
            source={icons.plus}
            className="w-[6vh] h-[6vh]"
            resizeMode="contain"
          />
        </View>
      </TouchableOpacity>
    );
  }
};

const CustomCardHistory = (props) => {
  return (
    <View className="bg-white rounded-[20px] mb-[3vh] flex p-5">
      <View>
        <Text className="font-psemibold text-gray-200 text-sm mb-3">
          {props.date}
        </Text>
        <Text className="font-pregular text-gray-200 text-s">
          {props.title}
        </Text>
      </View>
      <SafeAreaView className="items-end flex-row">
        <Text className="text-gray-200 text-s">{props.subtitle}</Text>
        <View className="ml-auto">
          <Image
            source={props.logo}
            className="w-[6vh] h-[6vh]"
            resizeMode="contain"
          />
        </View>
      </SafeAreaView>
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
    <TouchableOpacity className="bg-white rounded-[20px] mb-[3vh] flex p-5" onPress={props.handlePress} activeOpacity={0.7}>
      <View className="items-end flex-row">
        <View className="w-full">
          <Text className="font-psemibold text-gray-200 text-sm">{props.email}</Text>
          <Text className="text-gray-200 text-xl my-1">{props.description}</Text>
          <View className="flex-row w-full">
            <Text className="text-gray-200 text-sm">Bank {props.bank}</Text>
            <Text className="text-gray-200 text-sm ml-auto">Norek: {props.norek}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
}


const CustomCardInbox = (props) => {
  return (
    <TouchableOpacity
      className="bg-white rounded-[20px] mb-[3vh] flex p-5"
      onPress={props.handlePress}
      activeOpacity={0.7}
    >
      <View className="items-end flex-row">
        <View>
          <Text className="font-psemibold text-gray-200 text-lg mb-3">
            Rekening {props.bank}
          </Text>
          <Text className="text-gray-200 text-sm font-psemibold">
            {props.norek}
          </Text>
          <Text className="text-gray-200 text-sm font-psemibold">
            {props.title}
          </Text>
        </View>
        <View className="ml-auto"></View>
      </View>
    </TouchableOpacity>
  );
};

export {
  CustomCardHome,
  CustomCardHistory,
  CustomCardRekening,
  CustomCardInbox,
  CustomCardTeller,
};
