import { randomUUID } from "crypto";
import { IloginRepository } from "../../repositories/interface/ilogin-repository";



interface dataRequest {
    email: string;
    senha: string;
}

interface dataResponse {
    token: string;
}

export class LoginService {
    constructor(private loginRepository: IloginRepository) {}

    async login(data: dataRequest): Promise<dataResponse> {
        const org = await this.loginRepository.login(data);

        //gera um token falso por enquanto
        const orgString = JSON.stringify(org);
        const token = randomUUID()+orgString;

        return {token};
    }
}