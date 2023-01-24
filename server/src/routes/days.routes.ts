import { FastifyInstance } from "fastify";
import { DaysControllers } from "../controllers/days.controller";

const daysControllers = new DaysControllers
export async function Days( app: FastifyInstance ) {
  app.get('/', daysControllers.index)
}