import { Pet } from "@prisma/client";
import { IPetRepository } from "../../../repositories/interface/ipet-repository";
import { Filtro } from "../../../interfaces/Filtro";
import { CityNotInformed } from "../../../erro/errors/city-not-informed";



export class PetGetAllService {
    constructor(private petRepository: IPetRepository) {}

    async getAll(filtro: Filtro): Promise<Pet[]> {

        if (!filtro.cidade) {
            throw new CityNotInformed();
        }

        const pets = await this.petRepository.get(filtro);
        return pets;
    }
}