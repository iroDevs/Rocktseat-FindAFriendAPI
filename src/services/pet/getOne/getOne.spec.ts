import { it , describe , expect, beforeEach} from "vitest";
import { InMemoryPet } from '../../../repositories/in-memory-database/in-memory-pet'
import  { PetGetOneService }  from "./getOne";
import { Ambiente, Energia, Idade, Idependencia, Porte } from "@prisma/client";

let repositories: InMemoryPet;
let sut: PetGetOneService;


describe("Deve se buscar um pet", () => {


    beforeEach(async () => {
        repositories = new InMemoryPet();
        sut = new PetGetOneService(repositories);
    })

    it("Deve ser possivel buscar um pet", async () => {

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



        await sut.getOne('1');

        const petCapturado = repositories.pets[0];

        expect(petCapturado.nome).toBe("Rex");

    });
})
