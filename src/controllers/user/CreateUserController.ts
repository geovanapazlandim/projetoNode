import { Request, response, Response } from "express";
import { CreateUserService } from "../services/CreateUserService";
class CreateUserController{
    async handle(req: Request, res: Response){
        const {bandeira, numeroCartao, validadecartao, codigo, dataExpedicao} = req.body
        const createUserService = new CreateUserService();
        const user = await createUserService.execute({bandeira,numeroCartao,validadecartao,codigo,dataExpedicao});
        return res.json({ok:true})
    }
}

export{CreateUserController}