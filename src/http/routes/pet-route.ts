import { FastifyInstance } from 'fastify'
import { createPet } from '../controllers/pet/create'


export async function PetsRoutes(app: FastifyInstance) {
    app.post('/', createPet )
}
