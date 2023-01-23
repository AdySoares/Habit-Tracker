import { TouchableOpacity, TouchableOpacityProps, Dimensions } from 'react-native'
import { generateProgressPercentage } from '../utils/generateProgressPercentage'
import clsx from 'clsx'
import dayjs from 'dayjs'


const paddingWidth = (32 * 2)

export const squareHabitsDaySize = (((Dimensions.get('screen').width) - paddingWidth) / 7 /* dias da semana */ ) - 8 //testei até chegar nesse número

interface HabitDaysProps extends TouchableOpacityProps{
  amount?: number,
  completed?: number,
  date: Date
}

export function HabitDays({ amount = 0 , completed = 0, date, ...rest }: HabitDaysProps){

  const percentageProgress = amount > 0 ? generateProgressPercentage(completed, amount) : 0
  const todayStyle = dayjs(date).isSame(new Date(), 'day')

  console.log(todayStyle)

  return(
    <TouchableOpacity
    className={clsx('bg-zinc-900 border-2 rounded-lg m-1 border-zinc-800',{
         'bg-zinc-900  border-zinc-800': percentageProgress <= 0, 
         'bg-violet-800 border-violet-500': percentageProgress > 0 && percentageProgress <= 20, 
         'bg-violet-700 border-violet-600': percentageProgress >= 20 && percentageProgress <= 40, 
         'bg-violet-600 border-violet-500': percentageProgress >= 40 && percentageProgress <= 60, 
         'bg-violet-500 border-violet-400': percentageProgress >= 60 && percentageProgress <= 80, 
         'bg-violet-400 border-violet-300': percentageProgress > 80,
         'border-2 border-white': todayStyle === true
    })}
    style={{ width: squareHabitsDaySize, height: squareHabitsDaySize }}
    activeOpacity={0.5}
    {...rest}
    /> 
  )
}