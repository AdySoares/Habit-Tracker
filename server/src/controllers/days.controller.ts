import dayjs from "dayjs";
import { z } from 'zod';
import { prisma } from "../libs/prisma";

export class DaysControllers{
  async index(request : any) {
    const getDaysParams = z.object({
      date: z.coerce.date()
    })

    const { date } = getDaysParams.parse(request.query)

    const weekDay = dayjs(date)

    const possibleHabits = await prisma.habit.findMany({
      where: {
        created_at: {
          lte: date,
        },
        WeekDays: {
          some: {
            week_day: weekDay.get('day'),
          }
        }
      }
    })

    const day = await prisma.day.findUnique({
      where: {
        date: weekDay.startOf('day').toDate(),
      },
      include: {
        DayHabits: true
      }
    })

    const completedHabits = day?.DayHabits.map( dayHabit => dayHabit.habitId) ?? []

    return {
      possibleHabits,
      completedHabits
    }

  }
}