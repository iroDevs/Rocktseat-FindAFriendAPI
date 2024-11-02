
import { IOrgRepository } from "../../../repositories/interface/iorg-repository";



interface OrgRequest {
    nome: string
    cidade: string
    uf: string
    telefone: string
    email: string
    password: string
}

export class OrgUpdateService {
    constructor(private petRepository: IOrgRepository) {}

    async update(id: string, org: OrgRequest): Promise<void> {
        await this.petRepository.update(id, org);
    }
}