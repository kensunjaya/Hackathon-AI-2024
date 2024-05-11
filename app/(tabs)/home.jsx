import { View, Text, Image, ImageBackground } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../constants";
import { StatusBar } from "expo-status-bar";

const Home = () => {
  return (
    <View>
      <Image
          source={images.img1}
          className="w-full h-[23vh] bg-beige flex flex-end justify-end align-top"
          resizeMode="covern" />
        <View className="h-full bg-bluesk">
          <SafeAreaView className="pt-[1rem] relative h-full bg-primary rounded-t-[40px]">
            <Text className="text-2xl text-center font-psemibold">Selamat Siang, Kenneth</Text>
            <Text className="text-sm text-center font-pregular mt-[1vh]">Silakan pilih cabang bank yang ingin Anda tuju</Text>
          </SafeAreaView>
        </View>
        <StatusBar />
    </View>
    
  );
};

export default Home;
