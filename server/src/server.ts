import cors from '@fastify/cors';
import Fastify from 'fastify';
import { AppRoutes } from './routes';

const app = Fastify();

app.register(cors)
app.register(AppRoutes)

app.listen({
  port: 3333,
  host: '0.0.0.0',
}).then(() => console.log(`Server is running in http://localhost:3333 or http://0.0.0.0:3333`))