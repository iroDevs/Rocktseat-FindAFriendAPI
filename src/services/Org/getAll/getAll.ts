import { Organizacao } from "@prisma/client";
import { IOrgRepository } from "../../../repositories/interface/iorg-repository";



export class OrgGetAllService {
    constructor(private orgRepositories: IOrgRepository) {}

    async getAll(): Promise<Organizacao[]> {
        const orgs = await this.orgRepositories.get();
        return orgs;
    }
}