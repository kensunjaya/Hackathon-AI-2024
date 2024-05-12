import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { icons, images } from "../constants";
import { usePathname } from "expo-router";
import { router } from "expo-router";

const SearchInput = (props) => {
  const pathname = usePathname();
  const [query, setQuery] = useState("");
  return (
    <View className={`space-y-2 space-x-4 ${props.otherStyles}`}>
      <View className=" w-full h-16 px-4 bg-white rounded-3xl flex-row items-center">
        <TextInput
          className="flex-1 text-black font-psemibold text-base"
          value={query}
          placeholder={props.placeholder}
          placeholderTextColor="#D1D1D1"
          onChangeText={(e) => setQuery(e)}
        />
        <TouchableOpacity
          onPress={() => {
            if (!query) {
              return Alert.alert(
                "Missing query, Please input something to search"
              );
            }
            if (pathname.startsWith("/search")) {
              router.setParams({ query });
            } else {
              router.push(`/search/${query}`);
            }
          }}
        >
          <Image
            source={icons.search}
            className="w-5 h-5"
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SearchInput;
