import { useNavigation } from "@react-navigation/native";
import { ScrollView, Text, View, Alert } from "react-native";
import { HabitDays, squareHabitsDaySize } from "../components/HabitDays";
import { Header } from "../components/Header";
import { generateAllDaysFromYear } from "../utils/generateAllDatesFromYears";
import { api } from "../libs/axios";
import { useEffect, useState } from "react";
import { Loading } from "../components/Loading";
import dayjs from "dayjs";


const WeekDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']
const generateSquareHabit = generateAllDaysFromYear()
const minimalDays = 91 - generateSquareHabit.length

type SummaryProps = {
  id: string
  date: string
  amount: number
  completed: number
}[]

export function Home() {

  const [loading, setLoading] = useState(true)
  const [summary, setSummary] = useState<SummaryProps>([])

  const { navigate } = useNavigation()


  async function fetchData() {
    try {
      setLoading(true)
      const response = await api.get('summary')
      setSummary(response.data)
    } catch (error) {
      Alert.alert('Opss', 'Não foi possível carregar os seus hábitos.')
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  if (loading) {
    return (
      <Loading />
    )
  }


  return (
    <View className='flex-1 bg-background px-8 pt-16'>
      <Header />

      <View className="flex flex-row">
        {
          WeekDays.map((days, i) => {

            return (
              <Text key={`${days + i}`}
                className="font-bold text-zinc-400 flex text-center m-1 py-2"
                style={{ width: squareHabitsDaySize, height: squareHabitsDaySize }}
              >
                {days}
              </Text>
            )
          })
        }
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 50 }}
      >

        {summary.length > 0 &&
          <View className="flex flex-row flex-wrap">
            {
              generateSquareHabit.map((date) => {

                const checkSummary = summary.find(day => {
                  return dayjs(date).isSame(day.date, 'date')
                })



                return (
                  <HabitDays
                    key={date.toISOString()}
                    date={date}
                    completed={checkSummary?.completed}
                    amount={checkSummary?.amount}
                    onPress={() => navigate('ViewHabits', { date: date.toISOString() })}
                  />
                )
              })
            }
            {
              minimalDays > 0 && Array.from({ length: minimalDays }).map((_, i) => {
                return (
                  <View
                    key={i}
                    className='bg-zinc-900 border-2 rounded-lg m-1 border-zinc-800 opacity-30'
                    style={{ width: squareHabitsDaySize, height: squareHabitsDaySize }}
                  />
                )
              })
            }
          </View>
        }


      </ScrollView>

    </View>
  )
}