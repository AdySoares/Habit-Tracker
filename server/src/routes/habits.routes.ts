import {FastifyInstance} from "fastify";
import { HabitsControllers } from "../controllers/habits.controller";

const habitsControllers = new HabitsControllers

export async function Habits( app: FastifyInstance) {
  app.post('/', habitsControllers.index)
}