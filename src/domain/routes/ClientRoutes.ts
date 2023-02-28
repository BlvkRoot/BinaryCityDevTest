import { CreateClientController } from "@appication/controllers/ClientController/CreateClientController";
import { GenerateClientCodeController } from "@appication/controllers/ClientController/GenerateClientCodeController";
import { Router } from "express";

const clientRouter = Router();

clientRouter.post('/', new CreateClientController().handle);
clientRouter.get('/:clientName', new GenerateClientCodeController().handle);

export { clientRouter };

