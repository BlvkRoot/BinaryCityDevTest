import { CreateClientController } from "@appication/controllers/ClientController/CreateClientController";
import { GenerateClientCodeController } from "@appication/controllers/ClientController/GenerateClientCodeController";
import { ListClientController } from "@appication/controllers/ClientController/ListClientController";
import { validateClientFields } from "@domain/middlewares/ClientMiddleware";
import { Router } from "express";

const clientRouter = Router();

clientRouter.post(
  "/",
  [...validateClientFields()],
  new CreateClientController().handle
);
clientRouter.get("/client-code/:clientName", new GenerateClientCodeController().handle);
clientRouter.get("/", new ListClientController().handle);

export { clientRouter };
