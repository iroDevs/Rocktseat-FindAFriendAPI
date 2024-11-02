import { $Enums } from "@prisma/client";

export interface Filtro {
    cidade: string;
    nome?: string;
    idade?: $Enums.Idade;
    porte?: $Enums.Porte;
    ambiente?: $Enums.Ambiente;
    idependencia?: $Enums.Idependencia;
}