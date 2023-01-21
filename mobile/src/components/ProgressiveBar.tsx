import { View } from "react-native";

interface Props{
  progress?: number,
}

export function ProgressiveBar({ progress = 0 }: Props){
  return(
    <View className="w-full h-3 rounded-xl bg-zinc-600">
      <View className="h-3 rounded-xl  bg-violet-500" style={{ width: `${progress}%`}}/>
    </View>
  )
}