import { it , describe , expect, beforeEach} from "vitest";
import { InMemoryOrg } from '../../../repositories/in-memory-database/in-memory-org'
import  { OrgUpdateService }  from "./update";
import { randomUUID } from "crypto";

let repositories: InMemoryOrg;
let sut: OrgUpdateService;


describe("Testes de atualização de org", () => {


    beforeEach(async () => {
        repositories = new InMemoryOrg();
        sut = new OrgUpdateService(repositories);
    })

    it("Deve ser possivel atualizar uma org", async () => {

        const org = {
            id: '1',
            nome: "nova org",
            cidade: 'Belo Horizonte',
            uf: "MG",
            telefone: "9932359393",
            email: 'email@email.com',
            password: randomUUID()
        }

        repositories.orgs.push(org);

        await sut.update('1',org);
        expect(repositories.orgs.length).toEqual(1);

    });
})
