import { prisma } from "../libs/prisma";

export class SummaryControllers{
  async index(){
    const summary = await prisma.$queryRaw`
    SELECT D.id, D.date,
      (
        SELECT CAST(count(*) as float ) 
        FROM day_habits DH 
        WHERE DH.dayId = D.id
      )as completed,
      (
        SELECT CAST(count(*) as float ) 
        FROM habit_week_days HWD
        JOIN habits H
          ON H.id = HWD.habitId
        WHERE HWD.week_day = cast(strftime('%w', D.date/1000, 'unixepoch') as int) AND H.created_at <= D.date
      ) as amount
    FROM days D 
    `
    return summary
  }
}