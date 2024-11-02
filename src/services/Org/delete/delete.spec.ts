import { it , describe , expect, beforeEach} from "vitest";
import { InMemoryPet } from '../../../repositories/in-memory-database/in-memory-pet'
import  { OrgDeleteService }  from "./delete";
import { Ambiente, Energia, Idade, Idependencia, Porte } from "@prisma/client";

let repositories: InMemoryPet;
let sut: OrgDeleteService;


describe("Testes de update de pet", () => {


    beforeEach(async () => {
        repositories = new InMemoryPet();
        sut = new OrgDeleteService(repositories);
    })

    it("Deve deletar um pet", async () => {

        const pet = {
            id: '1',
            nome: "Rex",
            idade: Idade.ADULTO,
            energia: Energia.ALTA,
            idependencia: Idependencia.MEDIO,
            porte: Porte.GRANDE,
            ambiente: Ambiente.CASA,
            descricao: "Rex é um cachorro muito brincalhão",
            organizacaoId: "1"
        }

        repositories.pets.push(pet);
        await sut.delete('1');
        expect(repositories.pets.length).toBe(0);
    });
})
