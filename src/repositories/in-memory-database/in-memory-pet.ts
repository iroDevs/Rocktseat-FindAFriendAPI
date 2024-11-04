import { Foto, Organizacao, Pet } from '@prisma/client';
import { IPetRepository } from '../interface/ipet-repository';
import { Filtro } from '../../interfaces/Filtro';

export class InMemoryPet implements IPetRepository {
    public pets: Pet[] = [];
    public organizacoes: Organizacao[] = [];
    public fotos: Foto[] = [];

    async create(pet: Pet) {
        this.pets.push(pet);
    }

    async get(filtro: Filtro) {
        const arrayDePets = this.pets.filter((pet) => {
            const idOrg = pet.organizacaoId
            const organizacaoDoPet = this.organizacoes.find((org) => org.id === idOrg)

            if (organizacaoDoPet === undefined) {
                return false;
            }

            if (filtro.cidade !== organizacaoDoPet.cidade) {
                return false;
            }

            if (filtro.nome && !pet.nome.includes(filtro.nome)) {
                return false;
            }

            if (filtro.idade && pet.idade !== filtro.idade) {
                return false;
            }

            if (filtro.porte && pet.porte !== filtro.porte) {
                return false;
            }

            if (filtro.ambiente && pet.ambiente !== filtro.ambiente) {
                return false;
            }

            if (filtro.idependencia && pet.idependencia !== filtro.idependencia) {
                return false;
            }

            return true;
        })
        return arrayDePets;
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
