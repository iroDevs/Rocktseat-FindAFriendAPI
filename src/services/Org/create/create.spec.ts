import { it , describe , expect, beforeEach} from "vitest";
import { InMemoryOrg } from '../../../repositories/in-memory-database/in-memory-org'
import  { OrgCreateService }  from "./create";
import { Ambiente, Energia, Idade, Idependencia, Porte } from "@prisma/client";

let repositories: InMemoryOrg;
let sut: OrgCreateService;


describe("Testes de criação de pet", () => {


    beforeEach(async () => {
        repositories = new InMemoryOrg();
        sut = new OrgCreateService(repositories);
    })

    it("Deve criar um pet", async () => {

        const pet = {
            nome: "Rex",
            idade: Idade.ADULTO,
            energia: Energia.ALTA,
            idependencia: Idependencia.MEDIO,
            porte: Porte.GRANDE,
            ambiente: Ambiente.CASA,
            descricao: "Rex é um cachorro muito brincalhão",
            organizacaoId: "1"
        }

        await sut.create(pet);
        expect(repositories.pets.length).toEqual(1);



    });
})
