import fastify from "fastify";
import {PetsRoutes} from "./http/routes/pet-route";

const app = fastify();

app.register(PetsRoutes, { prefix: '/pet' });



export default app;