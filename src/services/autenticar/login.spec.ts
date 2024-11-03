import { it , describe , expect, beforeEach} from "vitest";
import { InMemoryLogin } from '../../repositories/in-memory-database/in-memory-login'
import  { LoginService }  from "./login";
import { randomUUID } from "crypto";


let repositories: InMemoryLogin;
let sut: LoginService;

describe("Testes de login", () => {
    beforeEach(async () => {
        repositories = new InMemoryLogin();
        sut = new LoginService(repositories);
    });


        beforeEach(async () => {
            repositories = new InMemoryLogin();
            sut = new LoginService(repositories);
        });

        it("Deve ser possivel fazer login", async () => {
            const password = randomUUID();
            const organizacao = {
                id: randomUUID(),
                nome: "nova org",
                cidade: 'Belo Horizonte',
                uf: "MG",
                telefone: "9932359393",
                email: 'email@email.com',
                password: password
            };

            repositories.org.push(organizacao);

            const login = await sut.login({ email: organizacao.email, senha: password });
            expect(login).toHaveProperty('token');
        });

        it("Deve falhar ao tentar login com senha incorreta", async () => {
            const password = randomUUID();
            const organizacao = {
                id: randomUUID(),
                nome: "nova org",
                cidade: 'Belo Horizonte',
                uf: "MG",
                telefone: "9932359393",
                email: 'email@email.com',
                password: password
            };

            repositories.org.push(organizacao);

            await expect(sut.login({ email: organizacao.email, senha: 'wrongpassword' })).rejects.toThrow();
        });

        it("Deve falhar ao tentar login com email inexistente", async () => {
            await expect(sut.login({ email: 'nonexistent@email.com', senha: 'anyPassword' })).rejects.toThrow();
        });
});
