
import { IloginRepository } from "../../repositories/interface/ilogin-repository";
import { Organizacao } from "@prisma/client";



interface dataRequest {
    email: string;
    senha: string;
}



export class LoginService {
    constructor(private loginRepository: IloginRepository) {}

    async login(data: dataRequest): Promise<Organizacao> {
        const org = await this.loginRepository.login(data);

        return org;
    }
}