import {FastifyInstance} from "fastify";
import { Habits } from "./habits.routes";


export async function AppRoutes( app: FastifyInstance ){
  app.register(Habits, { prefix: '/habits' })
}