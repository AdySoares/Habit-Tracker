import { View, Text, ScrollView } from "react-native";
import { Header } from "../components/Header";
import { HabitDays, squareHabitsDaySize } from "../components/HabitDays";
import { generateAllDaysFromYear } from "../utils/generateAllDatesFromYears";

const WeekDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']
const generateSquareHabit = generateAllDaysFromYear()
const minimalDays = 91 - generateSquareHabit.length

export function Home(){
  return(
    <View className='flex-1 bg-background px-8 pt-16'>
      <Header/>

      <View className="flex flex-row">
        { 
          WeekDays.map( (days, i) => {
            return(

              <Text key={`${days + i}`}
                    className="font-bold text-zinc-400 flex text-center m-1 py-2"
                    style={{ width: squareHabitsDaySize, height: squareHabitsDaySize }}
              >
                { days }
              </Text>
            )
          })
        }
      </View>
      
      <ScrollView 
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 50}}
      >

        <View className="flex flex-row flex-wrap">
            {
              generateSquareHabit.map( date => {
                return(
                  <HabitDays key={date.toISOString()}/>
                )
              })
            }
            {
              minimalDays > 0 && Array.from({ length: minimalDays }).map((_,i) => {
                return(
                  <View key={i}className='bg-zinc-900 border-2 rounded-lg m-1 border-zinc-800 opacity-30'
                        style={{ width: squareHabitsDaySize, height: squareHabitsDaySize }}
                  />
                )
              })
            }
            
        </View>

      </ScrollView>

    </View>
  )
}