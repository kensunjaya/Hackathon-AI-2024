import { View, Text, Image, ImageBackground, FlatList, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images, icons } from "../../constants";
import { StatusBar } from "expo-status-bar";
import { CustomCardHistory } from "../../components/CustomCard";

const History = () => {
  let id = 0;
  const cardData = [{ // dummy data
    date: "27 April 2024",
    title: "Permohonan pembuatan kartu kredit",
    cabang: "Kantor Pusat",
    logo: images.fuzebank,
    id: id++,
  },
  {
    date: "15 Maret 2024",
    title: "Permohonan withdrawal dana",
    cabang: "KCP Andromeda",
    logo: images.beanbank,
    id: id++,
  }]
  // const cardData = []
  return (
    <View>
      <Image
          source={images.historybg}
          className="w-full h-[21vh] bg-beige flex flex-end justify-end align-top"
          resizeMode="covern" />
        <View className="h-full bg-beige">
          <SafeAreaView className="pt-[1rem] relative h-full bg-primary rounded-t-[40px]">
              <Text className="text-2xl text-center font-psemibold pb-5">Riwayat Kegiatan Anda</Text>
              <View className="px-[3vh]">
                <Text className="text-sm font-pregular mt-[1vh] mb-3">Past 3 months</Text>
                <FlatList
                  // className="border"
                  data={cardData}
                  keyExtractor={(item) => {return item.id}}
                  renderItem={({ item }) => (
                    <CustomCardHistory 
                      title={item.title}
                      subtitle={item.cabang}
                      logo={item.logo}
                      date={item.date}
                    />
                  )}
                  // refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>}
                />
              </View>
          </SafeAreaView>
        </View>
        <StatusBar hidden={false} />
    </View>
    
  );
};

export default History;
