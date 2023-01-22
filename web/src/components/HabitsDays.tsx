import { useState } from 'react'
import { ProgressiveBarCheckedHabits } from './ProgressiveBarCheckedHabits'
import clsx from 'clsx'
import * as Popover from '@radix-ui/react-popover'
import { CheckBoxPopover } from './CheckBoxPopover'

interface HabitsProps {
  completed?: number,
  amount: number
}


export function HabitsDays({ completed, amount }: HabitsProps) {
  
  const habitDayList = ['Comer', 'Correr', 'Beber 2l de Água']
  
  const[ checkedHabitsDay, setHabitDayChecked ] = useState<string[]>([])
  
  function checkedHabit( habitDayChecked: string){
    if(checkedHabitsDay.includes(habitDayChecked)){
      setHabitDayChecked(previousState => previousState.filter(habits => habits !== habitDayChecked))
    }else{
      console.log(habitDayChecked)
      setHabitDayChecked(previousState => [...previousState, habitDayChecked])
    }
    
  }



  const CompiledHabitPercent = Math.round((checkedHabitsDay.length / amount) * 100)

  
  return (
    <Popover.Root>
      <Popover.Trigger className={clsx("h-10 w-10 border-2 rounded-lg", {
        'bg-zinc-900  border-zinc-800': CompiledHabitPercent <= 0,
        'bg-violet-800 border-violet-500': CompiledHabitPercent > 0 && CompiledHabitPercent <= 20,
        'bg-violet-700 border-violet-600': CompiledHabitPercent >= 20 && CompiledHabitPercent <= 40,
        'bg-violet-600 border-violet-500': CompiledHabitPercent >= 40 && CompiledHabitPercent <= 60,
        'bg-violet-500 border-violet-400': CompiledHabitPercent >= 60 && CompiledHabitPercent <= 80,
        'bg-violet-400 border-violet-300': CompiledHabitPercent === 100,
      })} />

      <Popover.Portal>

        <Popover.Content className='min-w-[320px] bg-zinc-900 p-6 rounded-lg flex flex-col'>
          <span className='text-zinc-400'>Sexta-Feira</span>
          <span className='font-extrabold text-3xl'>20/01</span>

          <ProgressiveBarCheckedHabits progress={CompiledHabitPercent} />

          <div className='mt-6'>
            {
              habitDayList.map(habit => {
                return (
                  <CheckBoxPopover
                    key={habit}
                    title={habit}
                    onCheckedChange={() => checkedHabit(habit)}
                  />
                )
              })
            }
          </div>

          <Popover.Arrow className='fill-zinc-900 w-6 h-3' />
        </Popover.Content>

      </Popover.Portal>
    </Popover.Root>
  )
}