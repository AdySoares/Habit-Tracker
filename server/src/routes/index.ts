import {FastifyInstance} from "fastify";
import { Habits } from "./habits.routes";
import { Days } from "./days.routes";


export async function AppRoutes( app: FastifyInstance ){
  app.register(Habits, { prefix: '/habits' })
  app.register(Days, { prefix: '/days' })
}