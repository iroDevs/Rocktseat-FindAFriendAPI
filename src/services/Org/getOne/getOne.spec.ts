import { it , describe , expect, beforeEach} from "vitest";
import { InMemoryOrg } from '../../../repositories/in-memory-database/in-memory-org'
import  { OrgGetOneService }  from "./getOne";
import { randomUUID } from "crypto";

let repositories: InMemoryOrg;
let sut: OrgGetOneService;


describe("Deve se buscar uma org", () => {


    beforeEach(async () => {
        repositories = new InMemoryOrg();
        sut = new OrgGetOneService(repositories);
    })

    it("Deve ser possivel buscar todas as org", async () => {

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
            nome: "org 2",
        }

        repositories.orgs.push(org);
        repositories.orgs.push(org2);



        const fetchOrg = await sut.getOne('2');

        if (!fetchOrg) {
            expect(false);
            throw new Error('Org não encontrada');
        }

        expect(fetchOrg.nome).toBe('org 2');

    });
})
