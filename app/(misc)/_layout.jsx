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
        <Stack.Screen name="problem" options={{ headerShown: false }} />
        <Stack.Screen name="editProfile" options={{ headerShown: false }} />
        <Stack.Screen name="tellerpage" options={{ headerShown: false }} />
        <Stack.Screen name="sendProblemResponse" options={{ headerShown: false }} />
        <Stack.Screen name="problemdetail" options={{ headerShown: false }} />
      </Stack>
      <StatusBar backgroundColor="rgba(238, 245, 255, 1)" style="dark" />
    </>
  );
};

export default MiscLayout;
