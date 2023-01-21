import { createNativeStackNavigator } from '@react-navigation/native-stack'

const { Navigator, Screen } = createNativeStackNavigator()


import { Home } from '../screen/Home'
import { ViewHabits } from '../screen/ViewHabits'
import { NewHabit } from '../screen/NewHabit'

export function AppRoutes(){
  return(
    <Navigator screenOptions={{ headerShown: false}}>
      <Screen
      name='Home'
      component={Home}
      />

      <Screen
      name='NewHabit'
      component={NewHabit}
      />

      <Screen
      name='ViewHabits'
      component={ViewHabits}
      />

    </Navigator>
  )
}