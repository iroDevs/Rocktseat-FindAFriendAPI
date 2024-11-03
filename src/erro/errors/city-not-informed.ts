import { AppErro } from "../AppErro";

export class CityNotInformed extends AppErro {
  constructor() {
    super('Cidade não informada', 400);
  }
}