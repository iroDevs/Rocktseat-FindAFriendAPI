import { it , describe , expect, beforeEach} from "vitest";
import { InMemoryOrg } from '../../../repositories/in-memory-database/in-memory-org'
import  { OrgDeleteService }  from "./delete";
import { randomUUID } from "crypto";

let repositories: InMemoryOrg;
let sut: OrgDeleteService;


describe("Testes de deletar de org", () => {


    beforeEach(async () => {
        repositories = new InMemoryOrg();
        sut = new OrgDeleteService(repositories);
    })

    it("Deve ser possivel deletar uma org", async () => {

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

        await sut.delete('1');

        expect(repositories.orgs.length).toEqual(0);



    });
})
