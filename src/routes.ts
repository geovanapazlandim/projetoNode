import express, {Request, Response, Router} from "express";
const router = Router();
router.get('/teste', (req: Request, res: Response) => {
    //throw new Error('Erro ao fazer requisição');
    return res.json({nome:'Geovana'})
})

export{router}