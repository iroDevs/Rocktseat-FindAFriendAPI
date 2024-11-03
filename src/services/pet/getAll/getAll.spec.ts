import { it , describe , expect, beforeEach} from "vitest";
import { InMemoryPet } from '../../../repositories/in-memory-database/in-memory-pet'
import  { PetGetAllService }  from "./getAll";
import { Ambiente, Energia, Idade, Idependencia, Porte } from "@prisma/client";
import { Filtro } from "../../../interfaces/Filtro";
import { CityNotInformed } from "../../../erro/errors/city-not-informed";

let repositories: InMemoryPet;
let sut: PetGetAllService;


describe("Deve se buscar todos os pet", () => {


    beforeEach(async () => {
        repositories = new InMemoryPet();
        sut = new PetGetAllService(repositories);
    })

    it("Deve ser possivel buscar todos os pet", async () => {

        repositories.organizacoes.push(
            {
            id: '1',
            nome: "ONG dos bichos",
            cidade: "São Paulo",
            uf: "MG",
            telefone: "99",
            email: "email.com",
            password: "31312"
        },
        {
            id: '2',
            nome: "ONG dos bichos",
            cidade: "Belo Horizonte",
            uf: "MG",
            telefone: "99",
            email: "email.com",
            password: "31312"
        }

    )

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
            organizacaoId: "2"
        }

        const pet3 = {
            ...pet,
            id: '3',
            nome: "Rex3",
            organizacaoId: "1"
        }

        repositories.pets.push(pet);
        repositories.pets.push(pet2);
        repositories.pets.push(pet3);

        const filtro: Filtro = {
            cidade: "São Paulo",
        }

        const pets = await sut.getAll(filtro);

        expect(pets.length).toBe(2);

    });

    it("Deve retornar um erro caso a cidade não seja informada", async () => {

            const filtro: Filtro = {
                cidade: "",
            }

            try {
                await sut.getAll(filtro);
            } catch (error) {
                expect(error).toBeInstanceOf(CityNotInformed);
            }
    })

})
