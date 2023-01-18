import {FastifyInstance} from "fastify";
import { prisma } from '../libs/prisma';
import { z } from 'zod'
import dayjs from "dayjs";

export async function Habits( app: FastifyInstance) {
  app.post('/', async (request) => {

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

  })
}