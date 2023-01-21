import { TouchableOpacity, View } from "react-native";
import { AntDesign } from '@expo/vector-icons'; 
import color from 'tailwindcss/colors';
import { useNavigation } from '@react-navigation/native'

export function GoBackButton(){
  
  const { goBack } = useNavigation()

  return(
    <View>
      <TouchableOpacity
      className="w-8 h-8 flex items-center justify-center"
      activeOpacity={0.5}
      onPress={ goBack }>

        <AntDesign className="w-full h-full" name="arrowleft" size={24} color={color.zinc[400]} />
        
      </TouchableOpacity>
    </View>
  )
}