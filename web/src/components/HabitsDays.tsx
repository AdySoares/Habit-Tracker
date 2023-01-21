import * as Popover from '@radix-ui/react-popover'
import { ProgressiveBarCheckedHabits } from './ProgressiveBarCheckedHabits'
import clsx from 'clsx'

interface HabitsProps {
  completed: number,
  amount: number
}

export function HabitsDays({ completed, amount }: HabitsProps){


  const CompiledHabitPercent = Math.round(( completed / amount ) * 100)


  return(
    <Popover.Root>
      <Popover.Trigger className={clsx("h-10 w-10 border-2 rounded-lg", {
        'bg-zinc-900  border-zinc-800': CompiledHabitPercent <= 0,
        'bg-violet-800 border-violet-500': CompiledHabitPercent > 0 && CompiledHabitPercent <= 20,
        'bg-violet-700 border-violet-600': CompiledHabitPercent >= 20 && CompiledHabitPercent <= 40,
        'bg-violet-600 border-violet-500': CompiledHabitPercent >= 40 && CompiledHabitPercent <= 60,
        'bg-violet-500 border-violet-400': CompiledHabitPercent >= 60 && CompiledHabitPercent <= 80,
        'bg-violet-400 border-violet-300': CompiledHabitPercent === 100,
      })}/>

      <Popover.Portal>

        <Popover.Content className='min-w-[320px] bg-zinc-900 p-6 rounded-lg flex flex-col'>
          <span className='text-zinc-400'>Sexta-Feira</span>
          <span className='font-extrabold text-3xl'>20/01</span>

          <ProgressiveBarCheckedHabits progress={CompiledHabitPercent}/>

          <Popover.Arrow className='fill-zinc-900 w-6 h-3'/>
        </Popover.Content>

      </Popover.Portal>
    </Popover.Root>
  )
}