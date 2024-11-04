import { PrismaPet } from '../../../repositories/prisma/prisma-pet'
import { PetUpdateService } from '../../pet/update/update';

export class FactoryUpdatePetService {


    async execute(): Promise<PetUpdateService> {
        const prisma = new PrismaPet();
        const petCreateService = new PetUpdateService(prisma);
        return petCreateService;
    }
}