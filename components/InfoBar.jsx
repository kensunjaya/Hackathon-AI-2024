import { View, Text } from "react-native";
import React from "react";

const InfoBar = (props) => {
  return (
    <View className="w-[430px] h-[36px] bg-bluesk">
      <Text className="text-white font-pregular ml-10 mt-1.5">
        {props.title}
      </Text>
    </View>
  );
};

export default InfoBar;
