import { it , describe , expect, beforeEach} from "vitest";
import { InMemoryOrg } from '../../../repositories/in-memory-database/in-memory-org'
import  { OrgCreateService }  from "./create";
import { randomUUID } from "crypto";

let repositories: InMemoryOrg;
let sut: OrgCreateService;


describe("Testes de criação de org", () => {


    beforeEach(async () => {
        repositories = new InMemoryOrg();
        sut = new OrgCreateService(repositories);
    })

    it("Deve ser possivel criar uma org", async () => {

        const org = {
            nome: "nova org",
            cidade: 'Belo Horizonte',
            uf: "MG",
            telefone: "9932359393",
            email: 'email@email.com',
            password: randomUUID()
        }

        await sut.create(org);
        expect(repositories.orgs.length).toEqual(1);



    });
})
