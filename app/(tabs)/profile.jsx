import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../constants";
import { Image } from "react-native";
import SearchInput from "../../components/SearchInput";

const profile = () => {
  return (
    <SafeAreaView className="bg-primary h-full">
      <FlatList />
    </SafeAreaView>
  );
};

export default profile;

const styles = StyleSheet.create({});
