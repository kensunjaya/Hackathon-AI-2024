import { View, Text, Image } from 'react-native'
import React from 'react'
import { icons } from "../constants";
import { SafeAreaView } from 'react-native-safe-area-context'

const CustomCardHome = (props) => {

  if (props.title !== "") {
    return (
      <View className="min-h-[20vh] min-w-[12.5vh] bg-white rounded-[20px] mr-[2.5vh] mt-[3vh] flex justify-end">
        <View className="pb-[3vh] items-center">
          <Image 
            source={props.logo}
            className="w-[8vh] h-[8vh]"
            resizeMode="contain"
          />
        </View>
        <View className="pb-[2vh]">
          <Text className="font-pregular text-gray-200 text-sm text-center">{props.title}</Text>
          <Text className="font-pregular text-gray-200 text-[10px] text-center">{props.subtitle}</Text>
        </View>
      </View>
    )
  }
  else {
    return (
      <View className="h-[20vh] w-[12.5vh] bg-white rounded-[20px] mt-[3vh] flex justify-end">
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
    )
  }
  
}

const CustomCardHistory = (props) => {
  return (
    <View className="bg-white rounded-[20px] mb-[3vh] flex p-5">
      <View>
        <Text className="font-psemibold text-gray-200 text-sm mb-3">{props.date}</Text>
        <Text className="font-pregular text-gray-200 text-s">{props.title}</Text>
      </View>
      <SafeAreaView className="items-end flex-row">
        <Text className="text-gray-200 text-s">{props.subtitle}</Text>
        <View className="ml-auto">
        <Image 
          source={props.logo}
          className="w-[6vh] h-[6vh]"
          resizeMode="contain"
        />
        </View>
        
      </SafeAreaView>
      
    </View>
  )
}

export { CustomCardHome, CustomCardHistory }