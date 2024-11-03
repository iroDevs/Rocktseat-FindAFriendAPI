import { Organizacao } from "@prisma/client";

type dataLoginRequest = {
    email: string;
    senha: string;
}

export interface IloginRepository {
    login(data: dataLoginRequest): Promise<Organizacao>;
}