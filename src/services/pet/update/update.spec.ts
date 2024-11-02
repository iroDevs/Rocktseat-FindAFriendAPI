import { it , describe , expect, beforeEach} from "vitest";
import { InMemoryPet } from '../../../repositories/in-memory-database/in-memory-pet'
import  { PetUpdateService }  from "./update";
import { Ambiente, Energia, Idade, Idependencia, Porte } from "@prisma/client";

let repositories: InMemoryPet;
let sut: PetUpdateService;


describe("Testes de update de pet", () => {


    beforeEach(async () => {
        repositories = new InMemoryPet();
        sut = new PetUpdateService(repositories);
    })

    it("Deve atualizar um pet", async () => {

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

        const petUpdate = {
            nome: "Rex Atualizado",
            idade: Idade.ADULTO,
            energia: Energia.ALTA,
            idependencia: Idependencia.MEDIO,
            porte: Porte.GRANDE,
            ambiente: Ambiente.CASA,
            descricao: "Rex é um cachorro muito brincalhão",
            organizacaoId: "1"
        }

        await sut.update('1', petUpdate);

        const petAtualizado = repositories.pets[0];

        expect(petAtualizado.nome).toBe("Rex Atualizado");



    });
})
