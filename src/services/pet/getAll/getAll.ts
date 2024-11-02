import { Pet } from "@prisma/client";
import { IPetRepository } from "../../../repositories/interface/ipet-repository";
import { Filtro } from "../../../interfaces/Filtro";



export class PetGetAllService {
    constructor(private petRepository: IPetRepository) {}

    async getAll(filtro: Filtro): Promise<Pet[]> {
        const pets = await this.petRepository.get(filtro);
        return pets;
    }
}