import { useEffect } from "react";
import { View } from "react-native";
import Animated, { useAnimatedStyle, useSharedValue, withDelay, withTiming } from "react-native-reanimated";

interface Props{
  progress: number,
}

export function ProgressiveBar({ progress = 0 }: Props){

  const sharedProgress = useSharedValue(progress)

  const style = useAnimatedStyle(() => {
    return {
      width: `${sharedProgress.value}%`
    }
  })

  useEffect(() => {
    sharedProgress.value = withDelay(200, withTiming(progress))
  }, [progress])

  return(
    <View className="w-full h-3 rounded-xl bg-zinc-600">
      <Animated.View className="h-3 rounded-xl  bg-violet-500 "
      style={style} />
    </View>
  )
}