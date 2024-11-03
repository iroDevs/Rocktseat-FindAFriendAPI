import { Foto, Pet } from '@prisma/client';
import { IFotoRepository } from '../interface/ifoto-repository';

export class InMemoryFoto implements IFotoRepository {
    public fotos: Foto[] = [];
    public Pets: Pet[] = [];

    async create(foto: Foto) {
        this.fotos.push(foto);
    }

    async getByPetId(petId: string): Promise<Foto[]> {
        return this.fotos.filter((foto) => foto.petId === petId);
    }

    async get() {
        return this.fotos;
    }

    async getById(id: string) {
        const foto = this.fotos.find((foto) => foto.id === id);

        if (foto) {
            return foto;
        }

        return null;
    }

    async delete(id: string) {
        this.fotos = this.fotos.filter((foto) => foto.id !== id);
    }

    async update(id: string, foto: Foto) {
        this.fotos = this.fotos.map((p) => (p.id === id ? foto : p));
    }

}
