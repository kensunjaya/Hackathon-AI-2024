import { View, Text, Image, ImageBackground, FlatList, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images, icons } from "../../constants";
import { StatusBar } from "expo-status-bar";
import { CustomCardHome }  from "../../components/CustomCard";
import { router } from "expo-router";

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
  },
  {
    title: "Seidel Bank",
    cabang: "KCP Galaxy",
    logo: images.seidelbank,
    id: id++,
  },
  {
    title: "",
    id: id++,
  }
]
  // const cardData = []
  return (
    <View>
      <Image
          source={images.img1}
          className="w-full h-[23vh] bg-beige flex flex-end justify-end align-top"
          resizeMode="covern" />
        <View className="h-full bg-bluesk">
          <SafeAreaView className="pt-[1rem] relative h-full bg-primary rounded-t-[40px]">
              <Text className="text-2xl text-center font-psemibold">Selamat Siang, User</Text>
              <Text className="text-xs text-center font-pregular mt-[1vh]">Silakan pilih cabang bank yang ingin Anda tuju</Text>
              <View className="flex-row mx-5">
                <FlatList
                  // className="border"
                  data={cardData}
                  keyExtractor={(item) => {return item.id}}
                  renderItem={({ item }) => (
                    <CustomCardHome 
                      title={item.title}
                      subtitle={item.cabang}
                      logo={item.logo}
                      handlePress={item.title === "" ? () => {router.push('/addbank')} : () => {}}
                    />
                  )}
                  horizontal
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
