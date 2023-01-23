import dayjs from "dayjs"
import { useEffect, useState } from "react"
import { api } from "../lib/axios"
import { generateAllDaysFromYear } from "../utils/generateAllDatesFromYears"
import { HabitsDays } from "./HabitsDays"

const weekDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']

const summaryDays = generateAllDaysFromYear()
const summaryMinimalSize = 126 - summaryDays.length

type Summary = {
  id: string,
  date: string,
  completed: number,
  amount: number
}[]

export function TableCalendar() {

  const [summary, setSummary] = useState<Summary>([])

  useEffect(() => {
    api.get('summary').then(response => {
      setSummary(() => response.data)
    })
  }, [])

  return (
    <div className="w-full flex">
      <div className="grid grid-rows-7 grid-flow-col gap-3">
        {weekDays.map((weekDay, i) => {
          return (
            <div key={`${weekDay}${i}`} className="text-zinc-400 text-xl h-10 w-10 font-bold flex items-center justify-center">
              {weekDay}
            </div>
          )
        })}

      </div>

      <div className="grid grid-rows-7 grid-flow-col gap-3 overflow-y-auto">
        {summary.length > 0 && summaryDays.map((date, i) => {
          const checkSummary = summary.find( day => {
            return dayjs(date).isSame(day.date, 'day')
          })

          return (
            <HabitsDays
              key={`${date.toString()}`}
              date={date}
              defaultCompleted={checkSummary?.completed}
              amount={checkSummary?.amount}
            />
          )
        })}

        {summaryMinimalSize > 0 && Array.from({ length: summaryMinimalSize }).map((_, i) => {
          return (
            <div
              key={i}
              className="h-10 w-10 bg-zinc-900 border-2 border-zinc-800 rounded-lg opacity-40 cursor-not-allowed"
            />
          )
        })
        }

      </div>

    </div>
  )
}