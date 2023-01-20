import { View, Text, TouchableOpacity } from "react-native";
import { Entypo } from '@expo/vector-icons';
import color from 'tailwindcss/colors'

import LogoImage from '../../assets/logo.svg';

export function Header(){
  return(
    <View className="w-full flex-row items-center justify-between">
      <LogoImage/>
      
      <TouchableOpacity 
        className="flex flex-row border border-violet-500 w-26 h-11 align-center justify-center px-4 py-3 rounded-lg"
        activeOpacity={0.5}
      > 

        <Entypo name="plus" color={color.violet[500]} size={20}/>
        <Text className="text-white ml-2 font-bold">Novo</Text>

      </TouchableOpacity>
    </View>
  )
}