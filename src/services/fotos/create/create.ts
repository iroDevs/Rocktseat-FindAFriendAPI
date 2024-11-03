import { IFotoRepository } from "../../../repositories/interface/ifoto-repository";



interface FotoRequest {
    url: string
    petId: string
}

export class FotoCreateService {
    constructor(private fotoRepository: IFotoRepository) {}

    async create(foto: FotoRequest): Promise<void> {
        await this.fotoRepository.create(foto);
    }
}