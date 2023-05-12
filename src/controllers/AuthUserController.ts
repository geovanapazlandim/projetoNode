import { Request, Response } from 'express';
import { AuthUserService } from '../services/AuthUserService';

class AuthUserController{
    async handle(req: Request, res: Response){
        const {bandeira, numeroCartao, validadecartao, codigo, dataExpedicao} = req.body;
        const authUserService = new AuthUserService();
        const auth = await authUserService.execute({
            bandeira,
            numeroCartao,
            validadecartao,
            codigo,
            dataExpedicao

        })
        return res.json(auth);
    }
}

export {AuthUserController}