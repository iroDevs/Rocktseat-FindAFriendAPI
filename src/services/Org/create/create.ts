import { IOrgRepository } from "../../../repositories/interface/iorg-repository";



interface OrgRequest {
    nome: string
    cidade: string
    uf: string
    telefone: string
    email: string
    password: string
}

export class OrgCreateService {
    constructor(private orgRepository: IOrgRepository) {}

    async create(org: OrgRequest): Promise<void> {
        await this.orgRepository.create(org);
    }
}