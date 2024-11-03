import { Pet } from "@prisma/client";
import { IPetRepository } from "../../../repositories/interface/ipet-repository";
import { ResourceNotFound } from "../../../erro/errors/resource-not-found";



export class PetGetOneService {
    constructor(private petRepository: IPetRepository) {}

    async getOne(id: string): Promise<Pet | null> {


        const pet = await this.petRepository.getById(id);

        if (pet === null) {
            throw new ResourceNotFound();
        }

        return pet;
    }
}