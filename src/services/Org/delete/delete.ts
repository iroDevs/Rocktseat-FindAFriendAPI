import { IOrgRepository } from "../../../repositories/interface/iorg-repository";




export class OrgDeleteService {
    constructor(private orgRepository: IOrgRepository) {}

    async delete(id: string): Promise<void> {
        await this.orgRepository.delete(id);
    }
}