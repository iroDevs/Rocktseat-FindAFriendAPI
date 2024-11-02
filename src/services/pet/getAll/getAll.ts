import { Pet } from "@prisma/client";
import { IPetRepository } from "../../../repositories/interface/ipet-repository";



export class PetGetAllService {
    constructor(private petRepository: IPetRepository) {}

    async getAll(): Promise<Pet[]> {
        const pets = await this.petRepository.get();
        return pets;
    }
}