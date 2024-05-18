import { View, Text, TextInput } from "react-native";
import React from "react";

const FilledFormField = (props) => {
  return (
    <View className={` ${props.otherStyles}`}>
      <Text className="text-base text-gray-200 font-pmedium ml-2">
        {props.title}
      </Text>
      <View className="w-full h-16 px-4 bg-white rounded-3xl flex-row items-center">
        <TextInput
          className="flex-1 text-black font-psemibold text-base"
          value={props.value}
          placeholder={props.placeholder}
          placeholderTextColor="#000000"
          onChangeText={props.onChange}
        />
      </View>
    </View>
  );
};

export default FilledFormField;
