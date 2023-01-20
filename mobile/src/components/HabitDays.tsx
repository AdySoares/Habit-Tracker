import { TouchableOpacity, Dimensions } from 'react-native'


const paddingWidth = (32 * 2)

export const squareHabitsDaySize = (((Dimensions.get('screen').width) - paddingWidth) / 7 /* dias da semana */ ) - 8 //testei até chegar nesse número

export function HabitDays(){
  return(
    <TouchableOpacity
    className='bg-zinc-900 border-2 rounded-lg m-1 border-zinc-800'
    style={{ width: squareHabitsDaySize, height: squareHabitsDaySize }}
    activeOpacity={0.5}
    /> 
  )
}