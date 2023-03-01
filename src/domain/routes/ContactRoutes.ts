import { CreateContactController } from "@appication/controllers/ContactController/CreateContactController";
import { ShowContactController } from "@appication/controllers/ContactController/ShowContactController";
import { Router } from "express";

const contactRouter = Router();

contactRouter.post('/', new CreateContactController().handle);
contactRouter.get('/:id', new ShowContactController().handle);

export { contactRouter };

