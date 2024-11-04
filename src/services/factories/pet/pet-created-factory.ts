import { PrismaPet } from '../../../repositories/prisma/prisma-pet'
import { PetCreateService } from '../../pet/create/create';

export class FactoryCreatePetService {
    async execute(): Promise<PetCreateService> {
        const prisma = new PrismaPet();
        const petCreateService = new PetCreateService(prisma);
        return petCreateService;
    }
}