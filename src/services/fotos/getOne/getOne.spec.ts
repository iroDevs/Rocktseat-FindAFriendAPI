import { it , describe , expect, beforeEach} from "vitest";
import { InMemoryFoto } from '../../../repositories/in-memory-database/in-memory-foto'
import  { FotoGetByIdService }  from "./getOne";
import { randomUUID } from "crypto";
import { fail } from "assert";

let repositories: InMemoryFoto;
let sut: FotoGetByIdService;


describe("Testes de captura por id foto", () => {


    beforeEach(async () => {
        repositories = new InMemoryFoto();
        sut = new FotoGetByIdService(repositories);
    })

    it("Deve ser possivel capturar uma unica foto", async () => {

        const idfoto = randomUUID();
        const url = `https://awsBucket.com:${idfoto}/${randomUUID()}`;

        repositories.fotos.push({
            id:idfoto,
            url,
            petId: randomUUID()
        })

        const foto = await sut.getById(idfoto);
        if (!foto) {
            fail('foto veio null');
        }
        expect(foto.url).toEqual(url);

    });
})
