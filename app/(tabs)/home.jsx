import { View, Text, Image, ImageBackground, FlatList, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images, icons } from "../../constants";
import { StatusBar } from "expo-status-bar";
import { CustomCardHome }  from "../../components/CustomCard";

const Home = () => {
  let id = 0;
  const cardData = [{ // dummy data
    title: "Bank Fuze",
    cabang: "Kantor Pusat",
    logo: images.fuzebank,
    id: id++,
  },
  {
    title: "Bean Bank",
    cabang: "KCP Andromeda",
    logo: images.beanbank,
    id: id++,
  }]
  // const cardData = []
  return (
    <View>
      <Image
          source={images.img1}
          className="w-full h-[23vh] bg-beige flex flex-end justify-end align-top"
          resizeMode="covern" />
        <View className="h-full bg-bluesk">
          <SafeAreaView className="pt-[1rem] relative h-full bg-primary rounded-t-[40px]">
            <ScrollView>
              <Text className="text-2xl text-center font-psemibold">Selamat Siang, Hanseu</Text>
              <Text className="text-sm text-center font-pregular mt-[1vh]">Silakan pilih cabang bank yang ingin Anda tuju</Text>
              <View className="flex-row">
                <FlatList
                  // className="border"
                  data={cardData}
                  keyExtractor={(item) => {return item.id}}
                  renderItem={({ item }) => (
                    <CustomCardHome 
                      title={item.title}
                      subtitle={item.cabang}
                      logo={item.logo}
                    />
                  )}
                  horizontal
                  // refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>}
                />
                <View className="h-[20vh] w-[12.5vh] bg-white rounded-[20px] ml-[2.5vh] mr-[2.5vh] mt-[3vh] flex justify-end">
                  <View className="pb-[4vh]">
                    <Text className="font-pregular text-gray-200 text-sm text-center">Tambah</Text>
                    <Text className="font-pregular text-gray-200 text-sm text-center">bank lain</Text>
                  </View>
                  <View className="pb-[3vh] items-center">
                    <Image 
                      source={icons.plus}
                      className="w-[6vh] h-[6vh]"
                      resizeMode="contain"
                    />
                  </View>
                </View>
              </View>
            </ScrollView>
          </SafeAreaView>
        </View>
        <StatusBar hidden={false} />
    </View>
    
  );
};

export default Home;
