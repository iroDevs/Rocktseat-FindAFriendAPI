import { Organizacao } from '@prisma/client';
import { IOrgRepository } from '../interface/iorg-repository';

export class InMemoryOrg implements IOrgRepository {
    public pets: Organizacao[] = [];

    async create(org: Organizacao) {
        this.pets.push(org);
    }

    async get() {
        return this.pets;
    }

    async getById(id: string) {
        const org = this.pets.find((org) => org.id === id);

        if (org) {
            return org;
        }

        return null;
    }

    async delete(id: string) {
        this.pets = this.pets.filter((org) => org.id !== id);
    }

    async update(id: string, org: Organizacao) {
        this.pets = this.pets.map((p) => (p.id === id ? org : p));
    }

    async getByName(name: string) {
        const org = this.pets.find((org) => org.nome === name);

        if (org) {
            return org;
        }

        return null;
    }
}
