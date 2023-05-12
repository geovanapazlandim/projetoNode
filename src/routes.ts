import { Router} from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { AuthUserController } from "./controllers/AuthUserController";
const router = Router();

router.get('/user', new CreateUserController().handle)

router.post('/session', new AuthUserController().handle)

export{router}