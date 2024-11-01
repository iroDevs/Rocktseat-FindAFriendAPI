import { it , describe , expect, beforeEach} from "vitest";
import app  from "../../../app";
import { InMemoryPet } from '../../../repositories/in-memory-database/in-memory-pet'
import  { PetCreateService }  from "./create";
import { Ambiente, Energia, Idade, Idependencia, Porte } from "@prisma/client";

let repositories: InMemoryPet;
let sut: PetCreateService;


describe("Testes de criação de pet", () => {


    beforeEach(async () => {
        repositories = new InMemoryPet();
        sut = new PetCreateService(repositories);
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
