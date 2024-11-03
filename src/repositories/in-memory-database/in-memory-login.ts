import { Organizacao } from '@prisma/client';
import { IloginRepository } from '../interface/ilogin-repository';
import { LoginFail } from '../../erro/errors/login-fail';

export class InMemoryLogin implements IloginRepository  {
    public org:Organizacao[] = [];

    async login(data: { email: string; senha: string; }): Promise<Organizacao> {
        const org = this.org.find((org) => org.email === data.email && org.password === data.senha);
        if (!org) {
            throw new LoginFail();
        }

        return org;
    }
}
