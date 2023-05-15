
import { CreateUserService } from "./CreateUserService";
import prismaClient from "../prisma";

interface AuthRequest {
    bandeira: string;
    numeroCartao: string;
    validadecartao: string;
    codigo: string;
    dataExpedicao: string
}

class AuthUserService {
    async execute({ bandeira, numeroCartao, validadecartao, codigo, dataExpedicao }: AuthRequest) {
        const user = await prismaClient.cartao.findFirst({
            where: {
                codigo: codigo
            }
        })
        if (!user) {
            throw new Error("Código de cartão inválido");
        }
    }
}

export { AuthUserService }