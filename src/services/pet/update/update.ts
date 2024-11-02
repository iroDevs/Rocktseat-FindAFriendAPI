import { $Enums } from "@prisma/client";
import { IPetRepository } from "../../../repositories/interface/ipet-repository";



interface PetCreateRequest {
    nome: string
    idade: $Enums.Idade
    energia: $Enums.Energia
    idependencia: $Enums.Idependencia
    porte: $Enums.Porte
    ambiente: $Enums.Ambiente
    descricao: string
    organizacaoId: string
}

export class PetUpdateService {
    constructor(private petRepository: IPetRepository) {}

    async update(id: string, pet: PetCreateRequest): Promise<void> {
        await this.petRepository.update(id, pet);
    }
}