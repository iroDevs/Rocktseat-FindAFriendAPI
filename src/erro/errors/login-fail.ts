import { AppErro } from "../AppErro";

export class LoginFail extends AppErro {
  constructor() {
    super('Dados Incorretos', 400);
  }
}