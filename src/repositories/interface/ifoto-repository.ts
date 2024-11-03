import { Foto, Prisma } from "@prisma/client";

export interface IFotoRepository {
    create(org: Prisma.FotoUncheckedCreateInput): Promise<void>;
    get(): Promise<Foto[]>;
    getById(id: string): Promise<Foto | null>;
    delete(id: string): Promise<void>;
    update(id: string, pet: Prisma.FotoUncheckedUpdateInput): Promise<void>;
    getByPetId(petId: string): Promise<Foto[]>;
}