import { PrismaPet } from '../../../repositories/prisma/prisma-pet'
import { PetDeleteService } from '../../pet/delete/delete';

export class FactoryDeletePetService {


    async execute(): Promise<PetDeleteService> {
        const prisma = new PrismaPet();
        const petCreateService = new PetDeleteService(prisma);
        return petCreateService;
    }
}