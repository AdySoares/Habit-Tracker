import { Text, TouchableOpacity, TouchableOpacityProps, View } from 'react-native'
import { Entypo } from '@expo/vector-icons'
import Animated, { RotateInUpLeft, ZoomOut } from 'react-native-reanimated'

interface CheckedProps extends TouchableOpacityProps {
  checked?: boolean,
  title: string,
}

export function CheckBox({ checked = false, title, ...rest }: CheckedProps) {
  return (
    <TouchableOpacity
      className='flex flex-row gap-3 align-center my-2'
      activeOpacity={0.5}
      {...rest}
    >
      {
        checked
          ?
          <Animated.View
            className='w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center'
            entering={RotateInUpLeft}
            exiting={ZoomOut}
          >
            <Entypo
              name="check"
              size={24}
              color='white'
            />
          </Animated.View>
          :
          <View className='w-8 h-8 bg-zinc-900 border border-zinc-700 rounded-lg' />
      }

      <Text className='text-white text-base'>
        {title}
      </Text>

    </TouchableOpacity>
  )
}