import prisma from "../../lib/prisma";
import { IOrgRepository } from "../interface/iorg-repository";
import { Prisma } from "@prisma/client";

export class PrismaOrg implements IOrgRepository {

    async create(org: Prisma.OrganizacaoUncheckedCreateInput): Promise<void> {
        await prisma.organizacao.create({
            data: org
        });
    }

    async get() {
        const orgs = await prisma.organizacao.findMany();
        return orgs;
    }

    async getById(id: string){
        return await prisma.organizacao.findUnique({
            where: {
                id
            }
        });
    }

    async delete(id: string) {
        await prisma.organizacao.delete({
            where: {
                id
            }
        });
    }

    async update(id: string, org: Prisma.OrganizacaoUncheckedUpdateInput) {
        await prisma.organizacao.update({
            where: {
                id
            },
            data: org
        });
    }
}
