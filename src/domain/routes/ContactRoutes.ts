import { CreateContactController } from "@appication/controllers/ContactController/CreateContactController";
import { ShowContactController } from "@appication/controllers/ContactController/ShowContactController";
import { validateContactFields } from "@domain/middlewares/ContactMiddleware";
import { Router } from "express";

const contactRouter = Router();

contactRouter.post(
  "/",
  [...validateContactFields()],
  new CreateContactController().handle
);
contactRouter.get("/:id", new ShowContactController().handle);

export { contactRouter };
