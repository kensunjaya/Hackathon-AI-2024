import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../constants";
import { Image } from "react-native";
import SearchInput from "../../components/SearchInput";
import { useUser } from "../hooks/Context";

const profile = () => {
  const user = useUser();
  return (
    <SafeAreaView className="bg-primary h-full">
      <Text>{user.namaLengkap}</Text>
    </SafeAreaView>
  );
};

export default profile;

const styles = StyleSheet.create({});
