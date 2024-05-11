import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native";
import React from "react";
import { isLoading } from "../constants";

const CustomButton = (props) => {
  return (
    <TouchableOpacity
      onPress={props.handlePress}
      activeOpacity={0.7}
      className={`bg-secondary rounded-xl min-h-[62px] justify-center items-center ${
        props.containerStyles
      } ${isLoading ? "opacity-50" : ""}`}
      disabled={isLoading}
    >
      <Text
        className={"text-primary font-psemibold text-lg ${props.textStyles}"}
      >
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
