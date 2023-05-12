import prismaCliente from "@prisma/client"
import { CreateUserService } from "./CreateUserService";
import {sign} from 'jsonwebtoken'

declare module 'jsonwebtoken';
interface AuthRequest{
    bandeira: string;
    numeroCartao: string;
    validadecartao: string;
    codigo: string;
    dataExpedicao: string
}

class AuthUserService{
    async execute({bandeira, numeroCartao, validadecartao, codigo, dataExpedicao}: AuthRequest){
        const user = await prismaCliente.cartao.findFirst({
            where:{
                codigo: codigo
            }
        })
        if(!user){
            throw new Error("Código de cartão inválido");
        }
       
    }
    
}

export {AuthUserService}