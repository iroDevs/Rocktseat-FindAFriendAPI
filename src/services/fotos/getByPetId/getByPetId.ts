import { Foto } from "@prisma/client";
import { IFotoRepository } from "../../../repositories/interface/ifoto-repository";




export class FotoGetByPetIdService {
    constructor(private fotoRepository: IFotoRepository) {}

    async getByPetId(id: string): Promise<Foto[]> {
        return await this.fotoRepository.getByPetId(id);
    }
}