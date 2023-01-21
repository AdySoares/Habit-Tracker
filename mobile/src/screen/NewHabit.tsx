import { useState } from 'react';
import { View, TouchableOpacity, Text, ScrollView, TextInput } from "react-native";
import { Entypo } from '@expo/vector-icons';
import color from 'tailwindcss/colors';

import { GoBackButton } from "../components/GoBackButton";
import { CheckBox } from "../components/CheckBox";

const possibleWeekDays = ['Domingo', 'Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sábado']

export function NewHabit(){

  const [weekDays, setWeekdays] = useState<number[]>([])

  function handleToggleWeekDays(weekDaysIndex : number){
    if(weekDays.includes(weekDaysIndex)){
      setWeekdays( previousState => previousState.filter(weekDays => weekDays !== weekDaysIndex))
    } else{
      setWeekdays( previousState => [...previousState, weekDaysIndex ])
    }

  }

  return(
    <View className='flex-1 bg-background px-8 pt-16'>

      <GoBackButton/>

      <ScrollView className="mt-4 pb-5" showsVerticalScrollIndicator={false}>

      <Text className='font-extrabold text-white text-4xl'>
        Criar habito
      </Text>

      <View className="w-full my-3">

        <Text className="font-semibold text-white">
          Qual o seu comprometimento ?
        </Text>

        <TextInput className="bg-zinc-900 border border-zinc-800 mt-2 rounded-lg p-3 text-white focus:border-zinc-400"
        placeholder="Ex.: Exercícios, dormir bem, etc..."
        placeholderTextColor={color.zinc[400]}
        />

      </View>

      <View>

        <Text className="font-semibold text-white">
          Qual a recorrência ? 
        </Text>

        {
          possibleWeekDays.map((weekDay, i) => {
            return(
              <CheckBox
               key={weekDay} 
               title={weekDay}
               checked={weekDays.includes(i)}
               onPress={() => handleToggleWeekDays(i)}/>
            )
          })
        }

      </View>

      <TouchableOpacity className='w-full h-14 my-5 bg-green-600 rounded-xl flex flex-row items-center justify-center'>
        <Entypo
        name='check'
        size={20}
        color='white'
        />

        <Text className='ml-3 font-semibold text-white text-base'>
          Confirmar
        </Text>
      </TouchableOpacity>

      </ScrollView>

      <TouchableOpacity></TouchableOpacity>
    </View>
  )
}