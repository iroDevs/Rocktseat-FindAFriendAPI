import { z } from 'zod';

export default z.object({
    nome: z.string(),
    idade: z.enum(['FILHOTE', 'ADULTO', 'IDOSO']),
    energia: z.enum(['BAIXA', 'MEDIA', 'ALTA']),
    idependencia: z.enum(['BAIXO', 'MEDIO', 'ALTO']),
    porte: z.enum(['PEQUENO', 'MEDIO', 'GRANDE']),
    ambiente: z.enum(["APARTAMENTO" , "CASA" , "SITIO" , "FAZENDA"]),
    descricao: z.string(),
    organizacaoId: z.string(),
});
