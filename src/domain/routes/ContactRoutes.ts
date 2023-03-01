import { CreateContactController } from "@appication/controllers/ContactController/CreateContactController";
import { ListContactController } from "@appication/controllers/ContactController/ListContactController";
import { ShowContactController } from "@appication/controllers/ContactController/ShowContactController";
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

export { contactRouter };
