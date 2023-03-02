import { CreateClientController } from "@application/controllers/ClientController/CreateClientController";
import { GenerateClientCodeController } from "@application/controllers/ClientController/GenerateClientCodeController";
import { ListClientController } from "@application/controllers/ClientController/ListClientController";
import { UnlinkClientContactController } from "@application/controllers/ClientController/UnlinkClientContactController";
import { validateClientFields } from "@domain/middlewares/ClientMiddleware";
import { validationErrorHandler } from "@shared/utils/ValidationErrorHandler";
import { Router } from "express";
import { param } from "express-validator";

const clientRouter = Router();

clientRouter.post(
  "/",
  [...validateClientFields(), validationErrorHandler],
  new CreateClientController().handle
);
clientRouter.get(
  "/client-code/:clientName",
  [
    param("clientName").not().isEmpty().trim().escape().isAlphanumeric().replace(/\//, ""),
    validationErrorHandler,
  ],
  new GenerateClientCodeController().handle
);
clientRouter.get("/", new ListClientController().handle);
clientRouter.put(
  "/unlink/:id/:contactId",
  new UnlinkClientContactController().handle
);

export { clientRouter };
