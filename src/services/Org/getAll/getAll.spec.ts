import { it , describe , expect, beforeEach} from "vitest";
import { InMemoryOrg } from '../../../repositories/in-memory-database/in-memory-org'
import  { OrgGetAllService }  from "./getAll";
import { randomUUID } from "crypto";

let repositories: InMemoryOrg;
let sut: OrgGetAllService;


describe("Deve se buscar todas as orgs", () => {


    beforeEach(async () => {
        repositories = new InMemoryOrg();
        sut = new OrgGetAllService(repositories);
    })

    it("Deve ser possivel buscar todas as orgs", async () => {

        const org = {
            id: '1',
            nome: "nova org",
            cidade: 'Belo Horizonte',
            uf: "MG",
            telefone: "9932359393",
            email: 'email@email.com',
            password: randomUUID()
        }

        const org2 = {
            ...org,
            id: '2',
            nome: "Rex2",
        }

        repositories.orgs.push(org);
        repositories.orgs.push(org2);



        await sut.getAll();

        expect(repositories.orgs.length).toBe(2);

    });
})
