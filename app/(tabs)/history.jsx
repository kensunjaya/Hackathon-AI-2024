import {
  View,
  Text,
  Image,
  ImageBackground,
  FlatList,
  ScrollView,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images, icons } from "../../constants";
import { StatusBar } from "expo-status-bar";
import { CustomCardHistory } from "../../components/CustomCard";
import { useUser, useUserUpdate } from "../hooks/Context";

const History = () => {
  const { userData } = useUser();
  const { updateUserData } = useUserUpdate();
  const [refreshing, setRefreshing] = React.useState(false);
  const data = userData.riwayat;
  let tempData = data;

  // const cardData = [
  //   {
  //     // dummy data
  //     date: "6 Mei 2024",
  //     title: "Permohonan pembuatan kartu kredit",
  //     cabang: "Kantor Pusat",
  //     logo: images.fuzebank,
  //     id: id++,
  //   },
  //   {
  //     date: "27 April 2024",
  //     title: "Pembuatan rekening baru",
  //     cabang: "KCP Galaxy",
  //     logo: images.seidelbank,
  //     id: id++,
  //   },
  //   {
  //     date: "20 April 2024",
  //     title: "Pendaftaran NPWP",
  //     cabang: "Kantor Pusat",
  //     logo: images.fuzebank,
  //     id: id++,
  //   },
  //   {
  //     date: "15 Maret 2024",
  //     title: "Permohonan withdrawal dana",
  //     cabang: "KCP Andromeda",
  //     logo: images.beanbank,
  //     id: id++,
  //   },
  //   {
  //     date: "11 Februari 2024",
  //     title: "Pembuatan rekening baru",
  //     cabang: "KCP Andromeda",
  //     logo: images.beanbank,
  //     id: id++,
  //   },
  // ];
  // const cardData = []
  return (
    <View className="h-full flex-1">
      <Image
        source={images.historybg}
        className="w-full h-[21vh] bg-beige flex flex-end justify-end align-top"
        resizeMode="covern"
      />

      <View className="h-full bg-beige flex-1">
        <SafeAreaView className="pt-[1rem] relative h-full bg-primary rounded-t-[40px] flex-1">
          <Text className="text-2xl text-center font-psemibold pb-5">
            Riwayat Kegiatan Anda
          </Text>
          <View className="px-[3vh] flex-1">
            <Text className="text-sm font-pregular mt-[1vh] mb-3">
              Past 3 months
            </Text>
            <FlatList
              // className="border"
              data={data}
              keyExtractor={(item, index) => String(index)}
              renderItem={({ item }) => (
                <CustomCardHistory
                  title={item.title}
                  subtitle={item.bank}
                  // logo={item.logo}
                  date={item.date}
                />
              )}
              ListEmptyComponent={() => (
                <View>
                  <Text className="text-center font-psemibold text-lg mt-5">
                    Tidak ada riwayat kegiatan
                  </Text>
                </View>
              )}
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

export default History;
