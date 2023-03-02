import { CreateContactController } from "@application/controllers/ContactController/CreateContactController";
import { ListContactController } from "@application/controllers/ContactController/ListContactController";
import { ShowContactController } from "@application/controllers/ContactController/ShowContactController";
import { UnlinkContactClientController } from "@application/controllers/ContactController/UnlinkContactClientController";
import { validateContactFields } from "@domain/middlewares/ContactMiddleware";
import { validationErrorHandler } from "@shared/utils/ValidationErrorHandler";
import { Router } from "express";

const contactRouter = Router();

contactRouter.post(
  "/",
  [...validateContactFields(), validationErrorHandler],
  new CreateContactController().handle
);
contactRouter.get("/:id", new ShowContactController().handle);
contactRouter.get("/", new ListContactController().handle);
contactRouter.put("/unlink/:id/:clientId", new UnlinkContactClientController().handle);

export { contactRouter };
