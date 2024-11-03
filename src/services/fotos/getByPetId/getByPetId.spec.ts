import { it , describe , expect, beforeEach} from "vitest";
import { InMemoryFoto } from '../../../repositories/in-memory-database/in-memory-foto'
import  { FotoGetByPetIdService }  from "./getByPetId";
import { randomUUID } from "crypto";

let repositories: InMemoryFoto;
let sut: FotoGetByPetIdService;


describe("Testes de captura de foto por petId", () => {


    beforeEach(async () => {
        repositories = new InMemoryFoto();
        sut = new FotoGetByPetIdService(repositories);
    })

    it("Deve ser possivel capturar as fotos de um pet Especifico", async () => {


        const idPet1 = randomUUID();
        const idPet2 = randomUUID();

        repositories.fotos.push({
            id:randomUUID(),
            url: "https://awsBucket.com:id",
            petId: idPet1
        })
        repositories.fotos.push({
            id:randomUUID(),
            url: "https://awsBucket.com:id",
            petId: idPet1
        })
        repositories.fotos.push({
            id:randomUUID(),
            url: "https://awsBucket.com:id",
            petId: idPet2
        })

        const pets = await sut.getByPetId(idPet1);

        expect(pets.length).toEqual(2);

    });
})
