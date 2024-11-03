import { IFotoRepository } from "../../../repositories/interface/ifoto-repository";




export class FotoDeleteService {
    constructor(private fotoRepository: IFotoRepository) {}

    async delete(id: string): Promise<void> {
        await this.fotoRepository.delete(id);
    }
}