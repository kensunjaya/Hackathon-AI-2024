import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { icons, images } from "../constants";

const FormField = (props) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <View className={`space-y-2 ${props.otherStyles}`}>
      <View className=" w-full h-16 px-4 bg-white rounded-3xl flex-row items-center">
        <TextInput
          className="flex-1 text-black font-psemibold text-base"
          value={props.value}
          placeholder={props.placeholder}
          placeholderTextColor="#858585"
          onChangeText={props.handleChangeText}
          secureTextEntry={props.title === "Password" && !showPassword}
        />
        {props.title === "Password" && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image
              source={!showPassword ? icons.eye : icons.eyeHide}
              className="w-6 h-6"
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormField;
