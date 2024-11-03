import { it , describe , expect, beforeEach} from "vitest";
import { InMemoryFoto } from '../../../repositories/in-memory-database/in-memory-foto'
import  { FotoCreateService }  from "./create";
import { randomUUID } from "crypto";

let repositories: InMemoryFoto;
let sut: FotoCreateService;


describe("Testes de criação de uma foto", () => {


    beforeEach(async () => {
        repositories = new InMemoryFoto();
        sut = new FotoCreateService(repositories);
    })

    it("Deve ser possivel criar uma foto", async () => {

        const foto = {
            url: "https://awsBucket.com:id",
            petId: randomUUID()
        }


        await sut.create(foto);
        expect(repositories.fotos.length).toEqual(1);

    });
})
