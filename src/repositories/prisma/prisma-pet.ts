import { Filtro } from "../../interfaces/Filtro";
import prisma from "../../lib/prisma";
import { IPetRepository } from "../interface/ipet-repository";
import { Prisma } from "@prisma/client";

export class PrismaPet implements IPetRepository {

    async create(pet: Prisma.PetUncheckedCreateInput): Promise<void> {
        await prisma.pet.create({
            data: pet
        });
    }

     makeWhere(filtro:Filtro): Prisma.PetWhereInput {
        const where: Prisma.PetWhereInput = {
            organizacao: {
                cidade: filtro.cidade
            },
            ...(filtro.nome && { nome: { contains: filtro.nome } }),
            ...(filtro.idade && { idade: filtro.idade }),
            ...(filtro.porte && { porte: filtro.porte }),
            ...(filtro.ambiente && { ambiente: filtro.ambiente }),
            ...(filtro.idependencia && { idependencia: filtro.idependencia }),
        };
        return where;

    }

    async get(filtro: Filtro) {
        const where: Prisma.PetWhereInput = this.makeWhere(filtro);

        const pets = await prisma.pet.findMany({
            include: {
                organizacao: true
            },
            where
        });

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
