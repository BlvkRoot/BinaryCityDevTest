import { Router } from "express";
import { clientRouter } from "./ClientRoutes";

const routes = Router();

routes.use("/clients", clientRouter);

export { routes };
