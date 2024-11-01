import { Pet } from '@prisma/client';
import { IPetRepository } from '../interface/ipet-repository';

export class InMemoryPet implements IPetRepository {
    public pets: Pet[] = [];

    async create(pet: Pet) {
        this.pets.push(pet);
    }

    async get() {
        return this.pets;
    }

    async getById(id: string) {
        const pet = this.pets.find((pet) => pet.id === id);

        if (pet) {
            return pet;
        }

        return null;
    }

    async delete(id: string) {
        this.pets = this.pets.filter((pet) => pet.id !== id);
    }

    async update(id: string, pet: Pet) {
        this.pets = this.pets.map((p) => (p.id === id ? pet : p));
    }
}
