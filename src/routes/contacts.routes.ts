import { Router } from "express";
import { ensureauthMiddleware } from "../middlewares/ensureAuth.middleware";
import {
  createContactController,
  listContactController,
  retrieveContactsController,
} from "../controllers/contacts.controller";
import ensureDataIsValidMiddleware from "../middlewares/ensureDataIsValid.middleware";
import { contactSchema, createContactSchema } from "../schemas/contacts.schema";

const contactsRoutes = Router();

contactsRoutes.post(
  "",
  ensureauthMiddleware,
  ensureDataIsValidMiddleware(contactSchema),
  createContactController
);
contactsRoutes.get("", listContactController);

contactsRoutes.get("/:id", ensureauthMiddleware, retrieveContactsController);
contactsRoutes.patch("", ensureauthMiddleware, retrieveContactsController);

export { contactsRoutes };
