import { View, Text } from "react-native";
import React from "react";

const InfoBar = (props) => {
  return (
    <View className="absolute w-[430px] h-[36px] left-0 top-[235px] bg-btn_secondary">
      <Text className="text-white font-pregular ml-10 mt-1.5">
        {props.title}
      </Text>
    </View>
  );
};

export default InfoBar;
