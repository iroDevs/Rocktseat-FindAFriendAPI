import { PrismaPet } from '../../../repositories/prisma/prisma-pet'
import { PetGetOneService } from '../../pet/getOne/getOne';

export class FactoryGetOnePetService {


    async execute(): Promise<PetGetOneService> {
        const prisma = new PrismaPet();
        const petCreateService = new PetGetOneService(prisma);
        return petCreateService;
    }
}