import { View, Text, Image } from 'react-native'
import React from 'react'

const CustomCardHome = (props) => {
  return (
    <View className="h-[20vh] w-[12.5vh] bg-white rounded-[20px] ml-[2.5vh] mt-[3vh] flex justify-end">
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

const CustomCardHistory = (props) => {
  return (
    <View className="h-[20vh] bg-white rounded-[20px] mb-[3vh] flex">
      <View className="pt-[2.5vh] px-[2.5vh]">
        <Text className="font-psemibold text-gray-200 text-[16px] pb-3">{props.date}</Text>
        <Text className="font-pregular text-gray-200 text-base">{props.title}</Text>
      </View>
      <View className="my-[2vh] items-end pr-[2.5vh] flex-row">
        <Text className="pl-5 text-gray-200 ">{props.subtitle}</Text>
        <View className="ml-auto">
        <Image 
          source={props.logo}
          className="w-[6vh] h-[6vh]"
          resizeMode="contain"
        />
        </View>
        
      </View>
      
    </View>
  )
}

export { CustomCardHome, CustomCardHistory }