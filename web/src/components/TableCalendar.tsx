import { generateAllDaysFromYear } from "../utils/generateAllDatesFromYears"
import { HabitsDays } from "./HabitsDays"

const weekDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']

const summaryDays = generateAllDaysFromYear()

const summaryMinimalSize = 1266 - summaryDays.length

export function TableCalendar(){
  return(
    <div className="w-full flex">
      <div className="grid grid-rows-7 grid-flow-col gap-3">
        {weekDays.map( (weekDay, i) => {
            return(
              <div key={`${weekDay}${i}`} className="text-zinc-400 text-xl h-10 w-10 font-bold flex items-center justify-center">
              {weekDay}
              </div>
            )
          })}

        </div>

        <div className="grid grid-rows-7 grid-flow-col gap-3 overflow-y-auto">
           {summaryDays.map( (days, i) => {
              return(
                <HabitsDays key={`${days.toString}`}/>
              )
            })}

            { summaryMinimalSize > 0 && Array.from({ length: summaryMinimalSize }).map((_, i) => {
                return(
                  <div key={i} className="h-10 w-10 bg-zinc-900 border-2 border-zinc-800 rounded-lg opacity-40 cursor-not-allowed"/>  
                )
              })
            }

        </div>

    </div>
  )
}