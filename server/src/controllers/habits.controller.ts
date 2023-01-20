import { prisma } from "../libs/prisma";
import { date, z } from 'zod';
import dayjs from "dayjs";

export class HabitsControllers{

  async index( request: any){
  
    const createdHabitBody = z.object({
      title: z.string(),
      WeekDays: z.array(z.number().min(0).max(6))
    })

    const { title, WeekDays } = createdHabitBody.parse(request.body)

    const today = dayjs().startOf('day').toDate()

    await prisma.habit.create({
      data:{
        title: title,
        created_at: today,
        WeekDays:{
          create: WeekDays.map(WeekDays => {
          return { week_day: WeekDays}
          })
        }
      }
    })
  }

  async toggle( request: any){
    const toggleHabitsDayParams = z.object({
      id: z.string().uuid()
    })

    const { id } = toggleHabitsDayParams.parse(request.params)

    const today = dayjs().startOf('day').toDate()

    let day = await prisma.day.findUnique({
      where: {
        date: today
      }
    })

    if(!day){
      day = await prisma.day.create({
        data: {
          date: today
        }
      })
    }

    const dayHabitToggleChecker = await prisma.dayHabit.findUnique({
      where: {
        dayId_habitId:{
          dayId: day.id,
          habitId: id
        }
      }
    })

    if(dayHabitToggleChecker){
      await prisma.dayHabit.delete({
        where: {
          id: dayHabitToggleChecker.id
        }
      })
    }
    else{

      await prisma.dayHabit.create({
        data: {
          dayId: day.id,
          habitId: id
        }
      })
    }
  }
}