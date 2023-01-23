import * as Popover from '@radix-ui/react-popover'
import clsx from 'clsx'
import dayjs from 'dayjs'
import { useState } from 'react'
import { HabitDayList } from './HabitDayList'
import { ProgressiveBarCheckedHabits } from './ProgressiveBarCheckedHabits'

interface HabitsProps {
  defaultCompleted?: number,
  amount?: number,
  date: Date,
}


export function HabitsDays({ defaultCompleted = 0, amount = 0, date }: HabitsProps) {

  const [completed, setCompleted] = useState(defaultCompleted)

  const CompiledHabitPercent = amount > 0 ? Math.round((completed / amount) * 100) : 0

  function handleCompletedChanged(completed: number){
    setCompleted(completed)
  }


  return (
    <Popover.Root>
      <Popover.Trigger className={clsx("h-10 w-10 border-2 rounded-lg transition-colors", {
        'bg-zinc-900  border-zinc-800': CompiledHabitPercent <= 0,
        'bg-violet-800 border-violet-500': CompiledHabitPercent > 0 && CompiledHabitPercent <= 20,
        'bg-violet-700 border-violet-600': CompiledHabitPercent >= 20 && CompiledHabitPercent <= 40,
        'bg-violet-600 border-violet-500': CompiledHabitPercent >= 40 && CompiledHabitPercent <= 60,
        'bg-violet-500 border-violet-400': CompiledHabitPercent >= 60 && CompiledHabitPercent <= 80,
        'bg-violet-400 border-violet-300': CompiledHabitPercent > 80,
      })} />

      <Popover.Portal>

        <Popover.Content className='min-w-[320px] bg-zinc-900 p-6 rounded-lg flex flex-col'>
          <span
            className='text-zinc-400'
          >
            {
              dayjs(date).format('dddd')
            }
          </span>

          <span
            className='font-extrabold text-3xl mb-3'
          >
            {
              dayjs(date).format('DD/MM')
            }
          </span>

          <ProgressiveBarCheckedHabits progress={CompiledHabitPercent} />

            <HabitDayList date={date} onCompletedChange={handleCompletedChanged}/>

          <Popover.Arrow className='fill-zinc-900 w-6 h-3' />
        </Popover.Content>

      </Popover.Portal>
    </Popover.Root>
  )
}