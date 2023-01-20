import {FastifyInstance} from "fastify";
import { SummaryControllers } from "../controllers/summary.controller";

const summaryControllers = new SummaryControllers

export async function Summary( app: FastifyInstance ) {
  app.get('/', summaryControllers.index)
}