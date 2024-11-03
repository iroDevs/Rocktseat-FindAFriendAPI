import { Foto, Prisma } from "@prisma/client";
import { IFotoRepository } from "../interface/ifoto-repository";
import  prisma  from "../../lib/prisma";

export class PrismaFotoRepository implements IFotoRepository {
    async update(id: string, data: Prisma.FotoUncheckedUpdateInput): Promise<void> {
        await prisma.foto.update({
            where: { id },
            data,
        });
    }

    async create(foto: Prisma.FotoUncheckedCreateInput): Promise<void> {
         await prisma.foto.create({ data: foto });
    }

    async delete(id: string): Promise<void> {
        await prisma.foto.delete({ where: { id } });
    }

    async getById(id: string): Promise<Foto | null> {
        return await prisma.foto.findUnique({ where: { id } });
    }

    async getByPetId(petId: string): Promise<Foto[]> {
        return await prisma.foto.findMany({ where: { petId } });
    }

    async get(): Promise<Foto[]> {
        return await prisma.foto.findMany();
    }
}
