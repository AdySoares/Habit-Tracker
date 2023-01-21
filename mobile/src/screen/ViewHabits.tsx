import { ScrollView, Text, View } from "react-native";
import { useRoute } from "@react-navigation/native";
import { GoBackButton } from "../components/GoBackButton";
import dayjs from "dayjs";
import { ProgressiveBar } from "../components/ProgressiveBar";

interface Params {
  date: string
}

export function ViewHabits(){

  const { date } = useRoute().params as Params
  const weekDay = dayjs(date).format('dddd')
  const dayAndMonth = dayjs(date).format('DD/MM')

  return(
    <View className='flex-1 bg-background px-8 pt-16'>
      <GoBackButton/>
      <ScrollView>
        <View>

          <Text className="text-zinc-500 text-base my-2">
            {weekDay}
          </Text>

          <Text className="text-white text-4xl font-extrabold">
            {dayAndMonth}
          </Text>

          <ProgressiveBar />

        </View>
      </ScrollView>
    </View>
  )
}