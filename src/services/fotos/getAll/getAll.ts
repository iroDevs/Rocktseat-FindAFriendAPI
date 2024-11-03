import { Foto } from "@prisma/client";
import { IFotoRepository } from "../../../repositories/interface/ifoto-repository";




export class FotoGetAllService {
    constructor(private fotoRepository: IFotoRepository) {}

    async getAll(): Promise<Foto[]> {
       return await this.fotoRepository.get();
    }
}