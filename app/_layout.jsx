import { StyleSheet, Text, View } from "react-native";
import { SplashScreen, Stack } from "expo-router";
import { useFonts } from "expo-font";
import React, { useEffect } from "react";
import { UserProvider } from "./hooks/Context";

SplashScreen.preventAutoHideAsync(); // prevent the splash screen from auto hiding

const RootLayout = () => {
  // console.disableYellowBox = true;
  const [fontsLoaded, error] = useFonts({
    "Poppins-Black": require("../assets/fonts/Poppins-Black.ttf"),
    "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
    "Poppins-ExtraBold": require("../assets/fonts/Poppins-ExtraBold.ttf"),
    "Poppins-ExtraLight": require("../assets/fonts/Poppins-ExtraLight.ttf"),
    "Poppins-Light": require("../assets/fonts/Poppins-Light.ttf"),
    "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Thin": require("../assets/fonts/Poppins-Thin.ttf"),
  });

  useEffect(() => {
    if (error) {
      throw error;
    }
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, error]);

  if (fontsLoaded === false && error === null) {
    return null;
  }
  return (
    <UserProvider>
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="(auth)" options={{ headerShown: false }} />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="(misc)" options={{ headerShown: false }} />
      
      {/* <Stack.Screen name="/search/[query]" options={{ headerShown: false }} /> */}
    </Stack>
    </UserProvider>
  )
};

export default RootLayout;
