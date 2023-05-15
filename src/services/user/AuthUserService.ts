import prismaClient from "../../prisma";
import { compare } from "bcryptjs";
import { CreateUserService } from "./CreateUserService";
import {sign} from 'jsonwebtoken'



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
        const codigoMatch = await compare(codigo, user.codigo);
        if (!codigoMatch) {
            throw new Error("Código de cartão incorreto.")
        }
        const token = sign(
            {
                codigo: user.codigo,
            },
            process.env.JWT_SECRET,
            {
                subject: user.id,
                expiresIn: '5m'
            }
        )
    }

}

export { AuthUserService }