import { Organizacao } from "@prisma/client";
import { IOrgRepository } from "../../../repositories/interface/iorg-repository";



export class OrgGetOneService {
    constructor(private petRepository: IOrgRepository) {}

    async getOne(id: string): Promise<Organizacao | null> {
        const pet = await this.petRepository.getById(id);
        return pet;
    }
}