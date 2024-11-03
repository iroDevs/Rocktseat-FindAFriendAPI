import { AppErro } from "../AppErro";

export class ResourceNotFound extends AppErro {
  constructor() {
    super('Informação não presente na base de dados', 400);
  }
}