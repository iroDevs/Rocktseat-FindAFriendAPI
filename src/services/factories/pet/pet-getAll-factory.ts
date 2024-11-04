import { PrismaPet } from '../../../repositories/prisma/prisma-pet'
import { PetGetAllService } from '../../pet/getAll/getAll';

export class FactoryGetAllPetService {

    async execute(): Promise<PetGetAllService> {
        const prisma = new PrismaPet();
        const petCreateService = new PetGetAllService(prisma);
        return petCreateService;
    }
}