import dayjs from "dayjs";

export function generateAllDaysFromYear(){
  const firstDayYear = dayjs().startOf('year')
  const today = new Date()

  const dates = []
  let compareDays = firstDayYear

  while(compareDays.isBefore(today)){
    dates.push(compareDays.toDate())
    compareDays = compareDays.add(1, 'day')
  }
  return dates
}