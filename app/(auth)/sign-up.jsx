import { View, Text } from "react-native";
import React from "react";
import { Image } from "react-native";
import { images } from "../../constants";
import { StatusBar } from "expo-status-bar";

const SignUp = () => {
  return (
    <View>
      <Image
        source={images.registerImage}
        className="w-full h-[31vh] justify-end flex flex-end align-top bg-thirdary"
        resizeMode="contain"
      />
      <StatusBar style="auto" />
    </View>
  );
};

export default SignUp;
