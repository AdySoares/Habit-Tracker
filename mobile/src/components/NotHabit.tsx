import { useNavigation } from "@react-navigation/native"
import { Text, View } from "react-native"

export function NotHabit() {

  const { navigate } = useNavigation()

  return (

    <View>
      <Text className="w-full text-zinc-400 text-base">
        Você não tem nenhum habito para esse dia cadastre um { }
        <Text
          className="text-violet-500 text-base underline"
          onPress={() => navigate('NewHabit')}>
          novo habito
        </Text>
      </Text>
    </View>
  )
}