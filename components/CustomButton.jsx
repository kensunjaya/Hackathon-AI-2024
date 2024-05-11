import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native";
import React from "react";
import { isLoading } from "../constants";

const CustomButton = (props) => {
  return (
    <TouchableOpacity
      onPress={props.handlePress}
      activeOpacity={1}
      className={`rounded-full min-h-[62px] justify-center items-center ${
        props.containerStyles
      } ${isLoading ? "opacity-50" : ""}`}
      disabled={isLoading}
    >
      <Text
        className={`font-psemibold text-lg ${props.textStyles}`}
      >
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
