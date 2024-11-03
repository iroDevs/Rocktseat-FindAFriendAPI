import { it , describe , expect, beforeEach} from "vitest";
import { InMemoryFoto } from '../../../repositories/in-memory-database/in-memory-foto'
import  { FotoDeleteService }  from "./delete";
import { randomUUID } from "crypto";

let repositories: InMemoryFoto;
let sut: FotoDeleteService;


describe("Testes de criação de uma foto", () => {


    beforeEach(async () => {
        repositories = new InMemoryFoto();
        sut = new FotoDeleteService(repositories);
    })

    it("Deve ser possivel deletar uma foto", async () => {

        const idfoto = randomUUID();

        repositories.fotos.push({
            id:idfoto,
            url: "https://awsBucket.com:id",
            petId: randomUUID()
        })

        await sut.delete(idfoto);

        expect(repositories.fotos.length).toEqual(0);

    });
})
