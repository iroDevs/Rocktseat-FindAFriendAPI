import { it , describe , expect, beforeEach} from "vitest";
import { InMemoryFoto } from '../../../repositories/in-memory-database/in-memory-foto'
import  { FotoGetAllService }  from "./getAll";
import { randomUUID } from "crypto";

let repositories: InMemoryFoto;
let sut: FotoGetAllService;


describe("Testes de capturar de todas as fotos", () => {


    beforeEach(async () => {
        repositories = new InMemoryFoto();
        sut = new FotoGetAllService(repositories);
    })

    it("Deve ser possivel captruar todas as fotos", async () => {

        repositories.fotos.push({
            id:randomUUID(),
            url: "https://awsBucket.com:id",
            petId: randomUUID()
        })

        repositories.fotos.push({
            id:randomUUID(),
            url: "https://awsBucket.com:id",
            petId: randomUUID()
        })


        const fotos = await sut.getAll();


        expect(fotos.length).toEqual(2);

    });
})
