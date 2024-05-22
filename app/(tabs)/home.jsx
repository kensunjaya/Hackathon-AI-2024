import { View, Text, Image, ImageBackground, FlatList, ScrollView, Alert } from "react-native";
import React, { useContext, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images, icons } from "../../constants";
import { StatusBar } from "expo-status-bar";
import { CustomCardHome, CustomCardRekening }  from "../../components/CustomCard";
import { router } from "expo-router";
import { useUser, useUserUpdate } from "../hooks/Context";
import CustomButton from "../../components/CustomButton";


const Home = () => {
  const { userData } = useUser();
  const { updateUserData, updateSelectedBank } = useUserUpdate();
  useEffect(() => {
    updateUserData();
    console.log("UserDATA", userData);
  }, [])
  const cardData = userData.rekening
  const namaDepan = userData.namaLengkap.split(" ")[0];
  return (
    <View className="flex-1">
      <Image
          source={images.img1}
          className="w-full h-[23vh] bg-beige flex flex-end justify-end align-top"
          resizeMode="covern" />
        <View className="h-full bg-bluesk flex-1">
          <SafeAreaView className="pt-[1rem] relative h-full bg-primary rounded-t-[40px] px-5 flex-1">
              <Text className="text-2xl text-center font-psemibold">Halo, {namaDepan}</Text>
              <Text className="text-xs text-center font-pregular">Silakan pilih rekening Anda yang tersedia</Text>
              <View className="flex-row my-[3vh] flex-1">
                <FlatList
                  // className="border"
                  data={cardData}
                  keyExtractor={(item, index) => String(index)}
                  renderItem={({ item }) => (
                    <CustomCardRekening
                      namabank={item.namabank}
                      norek={item.norek.slice(0, 3) + '-' + item.norek.slice(3, 6) + '-' + item.norek.slice(6)}
                      logo={item.logo}
                      handlePress={() => {
                        updateSelectedBank({bank: item.namabank, norek: item.norek})
                        router.push('/problem');
                      }}
                    />
                  )}
                  vertical
                  showsVerticalScrollIndicator={false}
                  showsHorizontalScrollIndicator={false}
                  // refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>}
                />
                
              </View>
              
              
          </SafeAreaView>
        </View>
        <StatusBar hidden={false} />
    </View>
    
  );
};

export default Home;
