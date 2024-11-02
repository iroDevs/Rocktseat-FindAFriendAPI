import { Pet, Prisma } from "@prisma/client";
import { Filtro } from "../../interfaces/Filtro";

export interface IPetRepository {
    create(pet: Prisma.PetUncheckedCreateInput): Promise<void>;
    get(filtro: Filtro): Promise<Pet[]>;
    getById(id: string): Promise<Pet | null>;
    delete(id: string): Promise<void>;
    update(id: string, pet: Prisma.PetUncheckedUpdateInput): Promise<void>;
}