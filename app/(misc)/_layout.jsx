import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

const MiscLayout = () => {
  return (
    <>
      <Stack>
        <Stack.Screen name="addbank" options={{ headerShown: false }} />
        <Stack.Screen name="changepassword" options={{ headerShown: false }} />
      </Stack>
      <StatusBar backgroundColor="rgba(238, 245, 255, 1)" style="dark" />
    </>
  );
};

export default MiscLayout;
