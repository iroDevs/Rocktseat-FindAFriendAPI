import { Pet, Prisma } from "@prisma/client";

export interface IPetRepository {
    create(pet: Prisma.PetUncheckedCreateInput): Promise<void>;
    get(): Promise<Pet[]>;
    getById(id: string): Promise<Pet | null>;
    delete(id: string): Promise<void>;
    update(id: string, pet: Prisma.PetUncheckedUpdateInput): Promise<void>;
}