import { Organizacao } from "@prisma/client";
import { IloginRepository } from "../interface/ilogin-repository";
import  prisma  from "../../lib/prisma";
import { LoginFail } from "../../erro/errors/login-fail";

export class PrismaFotoRepository implements IloginRepository {
    async login(data: { email: string; senha: string; }): Promise<Organizacao> {
        const org = await prisma.organizacao.findFirst({
            where: {
                email: data.email,
                password: data.senha
            }
        });
        if (!org) {
            throw new LoginFail();
        }

        return org;
    }

}
