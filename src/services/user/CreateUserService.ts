import prismaClient from "../prisma";

interface UserRequest{
    bandeira: string;
    numeroCartao: string;
    validadecartao: string;
    codigo: string;
    dataExpedicao: string;
}

class CreateUserService {
    async execute({ validadecartao, bandeira, numeroCartao, codigo, dataExpedicao }: UserRequest) {
        const data = new Date();
        const ano = data.getFullYear();
        const mes = data.getMonth() + 1;
        const [mesReq, anoReq] = validadecartao.split("/");
        if (ano > Number(anoReq)) {
            throw new Error("Ano de expiração menor que o atual.");
        } else {
            if (mes > Number(mesReq)) {
                throw new Error("Mês de expiração menor que o atual.");
            }
        }
        const user = await prismaClient.cartao.create({
            data:{
                bandeira: bandeira,
                numeroCartao: numeroCartao,
                validadecartao: validadecartao,
                codigo: codigo,
                dataExpedicao: dataExpedicao,
            },
            select:{
                id: true,
                validadecartao: true,
            }
        })
        return user;
    }
    
}
export { CreateUserService }