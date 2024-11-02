import { it , describe , expect, beforeEach} from "vitest";
import { InMemoryPet } from '../../../repositories/in-memory-database/in-memory-pet'
import  { PetGetAllService }  from "./getAll";
import { Ambiente, Energia, Idade, Idependencia, Porte } from "@prisma/client";

let repositories: InMemoryPet;
let sut: PetGetAllService;


describe("Deve se buscar todos os pet", () => {


    beforeEach(async () => {
        repositories = new InMemoryPet();
        sut = new PetGetAllService(repositories);
    })

    it("Deve ser possivel buscar todos os pet", async () => {

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

        const pet2 = {
            ...pet,
            id: '2',
            nome: "Rex2",
        }

        repositories.pets.push(pet);
        repositories.pets.push(pet2);



        await sut.getAll();

        expect(repositories.pets.length).toBe(2);

    });
})
