import { View, Text } from "react-native";
import React from "react";

const InfoBar = (props) => {
  return (
    <View className="w-full h-fit bg-bluesk">
      <Text className="text-white font-pregular ml-10 my-1.5">
        {props.title}
      </Text>
    </View>
  );
};

export default InfoBar;
