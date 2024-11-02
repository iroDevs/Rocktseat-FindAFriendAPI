import { IPetRepository } from "../../../repositories/interface/ipet-repository";




export class PetDeleteService {
    constructor(private petRepository: IPetRepository) {}

    async delete(id: string): Promise<void> {
        await this.petRepository.delete(id);
    }
}