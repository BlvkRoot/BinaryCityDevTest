import { CreateClientController } from "@appication/controllers/ClientController/CreateClientController";
import { Router } from "express";

const clientRouter = Router();

clientRouter.post('/', new CreateClientController().handle);

export { clientRouter };

