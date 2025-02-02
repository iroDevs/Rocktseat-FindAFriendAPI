import { Foto } from "@prisma/client";
import { IFotoRepository } from "../../../repositories/interface/ifoto-repository";




export class FotoGetByIdService {
    constructor(private fotoRepository: IFotoRepository) {}

    async getById(id: string): Promise<Foto | null> {
        return await this.fotoRepository.getById(id);
    }
}