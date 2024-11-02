import { Organizacao, Prisma } from "@prisma/client";

export interface IOrgRepository {
    create(org: Prisma.OrganizacaoUncheckedCreateInput): Promise<void>;
    get(): Promise<Organizacao[]>;
    getById(id: string): Promise<Organizacao | null>;
    delete(id: string): Promise<void>;
    update(id: string, pet: Prisma.OrganizacaoUncheckedUpdateInput): Promise<void>;
}