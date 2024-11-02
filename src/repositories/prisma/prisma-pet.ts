import prisma from "../../lib/prisma";
import { IPetRepository } from "../interface/ipet-repository";
import { Prisma } from "@prisma/client";

export class PrismaPet implements IPetRepository {

    async create(pet: Prisma.PetUncheckedCreateInput): Promise<void> {
        await prisma.pet.create({
            data: pet
        });
    }

    async get() {
        const pets = await prisma.pet.findMany();
        return pets;
    }

    async getById(id: string){
        return await prisma.pet.findUnique({
            where: {
                id
            }
        });
    }

    async delete(id: string) {
        await prisma.pet.delete({
            where: {
                id
            }
        });
    }

    async update(id: string, pet: Prisma.PetUncheckedUpdateInput) {
        await prisma.pet.update({
            where: {
                id
            },
            data: pet
        });
    }
}
