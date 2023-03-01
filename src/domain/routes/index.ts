import { Router } from "express";
import { clientRouter } from "./ClientRoutes";
import { contactRouter } from "./ContactRoutes";

const routes = Router();

routes.use("/clients", clientRouter);
routes.use("/contacts", contactRouter);

export { routes };
