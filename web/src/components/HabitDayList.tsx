import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { api } from "../lib/axios";
import { CheckBoxPopover } from "./CheckBoxPopover";

interface Props {
  date: Date;
  onCompletedChange: (completed: number) => void
}

interface HabitsProps {
  possibleHabits: {
    id: string,
    title: string,
    created_at: string
  }[],
  completedHabits: string[]
}


export function HabitDayList({ date, onCompletedChange }: Props) {

  const [habitDayList, setHabitDayList] = useState<HabitsProps>()

  useEffect(() => {
    api.get('days', {
      params: {
        date: date.toISOString(),
      }
    }).then(response => {
      setHabitDayList(response.data)
    })
  }, [])



  async function toggleCheckedHAbit(habitId: string) {

    await api.patch(`habits/${habitId}/toggle`)

    const checkedHabitsDay = habitDayList!.completedHabits.includes(habitId)

    let completedHabits: string[] = []

    if (checkedHabitsDay) {
      completedHabits = habitDayList!.completedHabits.filter(id => id !== habitId)
    } else {
      completedHabits = [...habitDayList!.completedHabits, habitId]
    }

    setHabitDayList({
      possibleHabits: habitDayList!.possibleHabits,
      completedHabits
    })

    onCompletedChange(completedHabits.length)

  }


  const isPassedDate = dayjs(date).endOf('day').isBefore(new Date)

  return (
    <div className='mt-6'>
      {
        habitDayList?.possibleHabits.map((habit) => {



          return (
            <CheckBoxPopover
              title={habit.title}
              key={habit.id}
              disabled={isPassedDate}
              checked={habitDayList.completedHabits.includes(habit.id)}
              onCheckedChange={() => toggleCheckedHAbit(habit.id)}

            />
          )
        })
      }
    </div>
  )
}