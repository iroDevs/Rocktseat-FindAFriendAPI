import { FactoryCreatePetService } from '../../../services/factories/pet/pet-created-factory';
import { FastifyReply, FastifyRequest } from "fastify";
import petCreatedSchema from '../../../validate/zod/pet-created-schema';

export async function createPet(request: FastifyRequest, reply: FastifyReply) {
    const pet = petCreatedSchema.parse(request.body);

    const petServiceCreated = new FactoryCreatePetService();
    const petCreateService = await petServiceCreated.execute();

    await petCreateService.create(pet);

    reply.code(201).send();
}
