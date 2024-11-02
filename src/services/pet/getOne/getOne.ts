import { Pet } from "@prisma/client";
import { IPetRepository } from "../../../repositories/interface/ipet-repository";



export class PetGetOneService {
    constructor(private petRepository: IPetRepository) {}

    async getOne(id: string): Promise<Pet | null> {
        const pet = await this.petRepository.getById(id);
        return pet;
    }
}