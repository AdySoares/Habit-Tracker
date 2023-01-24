import { FastifyInstance } from "fastify";
import { Days } from "./days.routes";
import { Habits } from "./habits.routes";
import { Summary } from "./summary.routes";


export async function AppRoutes( app: FastifyInstance ){
  app.register(Habits, { prefix: '/habits' })
  app.register(Days, { prefix: '/days' })
  app.register(Summary, { prefix: '/summary' })
}