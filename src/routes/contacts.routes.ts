import { Router } from "express";
import { ensureauthMiddleware } from "../middlewares/ensureAuth.middleware";
import { createContactController } from "../controllers/contacts.controller";

const contactsRoutes = Router();

contactsRoutes.post("", ensureauthMiddleware, createContactController);

export { contactsRoutes };
