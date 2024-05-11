import { View, Text, Image } from 'react-native'
import React from 'react'

const CustomCard = (props) => {
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

export default CustomCard