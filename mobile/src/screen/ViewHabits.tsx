import { useRoute } from "@react-navigation/native";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { Alert, ScrollView, Text, View } from "react-native";
import { GoBackButton } from "../components/GoBackButton";
import { Loading } from "../components/Loading";
import { ProgressiveBar } from "../components/ProgressiveBar";
import { api } from "../libs/axios";
import { CheckBox } from "../components/CheckBox";
import { generateProgressPercentage } from "../utils/generateProgressPercentage";
import { NotHabit } from "../components/NotHabit";


interface HabitProps {
  possibleHabits: {
    id: string
    title: string
  }[];
  completedHabits: string[]
}

interface Params {
  date: string
  summary: {
    id: string,
    date: string,

  }
}

export function ViewHabits() {

  const [loading, setLoading] = useState(true)
  const [habitDayList, setHabitDayList] = useState<HabitProps>()
  const [completedHabits, setCompletedHabits] = useState<string[]>([])

  const { date } = useRoute().params as Params
  const isPastDate = dayjs(date).endOf('day').isBefore(new Date())
  const weekDay = dayjs(date).format('dddd')
  const dayAndMonth = dayjs(date).format('DD/MM')

  const habitProgress = habitDayList?.possibleHabits.length ? generateProgressPercentage(completedHabits.length, habitDayList.possibleHabits.length) : 0

  async function fetchHabites() {
    try {
      setLoading(true)

      const response = await api.get('days', {
        params: {
          date
        }
      })

      setHabitDayList(response.data)
      setCompletedHabits(response.data.completedHabits)

    } catch (error) {
      console.log(error)
      Alert.alert('Opss', 'Não foi possível carregar os hábitos do dia')
    } finally {
      setLoading(false)
    }
  }

  async function handleToggleHabit(habitId: string) {
    try {

      await api.patch(`habits/${habitId}/toggle`)

      if (completedHabits.includes(habitId)) {
        setCompletedHabits(previousState => previousState.filter(id => id !== habitId))
      } else {
        setCompletedHabits(previousState => [...previousState, habitId])
      }
    } catch (error) {
      Alert.alert('Opss', 'Não foi possível marcar ou desmarcar o habito como concluído')
      console.log(error)
    }
  }

  useEffect(() => {
    fetchHabites()
  }, [])

  if (loading) {
    return (<Loading />)
  }

  return (
    <View className='flex-1 bg-background px-8 pt-16'>
      <GoBackButton />
      <ScrollView className="h-full"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      >


        <Text className="text-zinc-500 text-base my-2">
          {weekDay}
        </Text>

        <Text className="text-white text-4xl font-extrabold">
          {dayAndMonth}
        </Text>

        <ProgressiveBar progress={habitProgress} />

        <View className="w-full mt-3">
          {
            habitDayList!.possibleHabits.length > 0
              ?
              habitDayList?.possibleHabits.map(habit => (
                <CheckBox
                  key={habit.id}
                  title={habit.title}
                  checked={completedHabits.includes(habit.id)}
                  disabled={isPastDate}
                  onPress={() => handleToggleHabit(habit.id)}
                />
              ))
              :
              <NotHabit />
          }
        </View>

        {
          isPastDate &&
          <Text className="text-zinc-500 text-center mt-4">
            Você não pode altear hábitos dos dias anteriores ao atual
          </Text>
        }

      </ScrollView>
    </View>
  )
}