import { Organizacao } from '@prisma/client';
import { IOrgRepository } from '../interface/iorg-repository';

export class InMemoryOrg implements IOrgRepository {
    public orgs: Organizacao[] = [];

    async create(org: Organizacao) {
        this.orgs.push(org);
    }

    async get() {
        return this.orgs;
    }

    async getById(id: string) {
        const org = this.orgs.find((org) => org.id === id);

        if (org) {
            return org;
        }

        return null;
    }

    async delete(id: string) {
        this.orgs = this.orgs.filter((org) => org.id !== id);
    }

    async update(id: string, org: Organizacao) {
        this.orgs = this.orgs.map((p) => (p.id === id ? org : p));
    }

    async getByName(name: string) {
        const org = this.orgs.find((org) => org.nome === name);

        if (org) {
            return org;
        }

        return null;
    }
}
