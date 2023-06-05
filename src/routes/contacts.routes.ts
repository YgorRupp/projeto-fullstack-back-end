import { Router } from "express";
import { ensureauthMiddleware } from "../middlewares/ensureAuth.middleware";
import {
  createContactController,
  listContactController,
  retrieveContactsController,
} from "../controllers/contacts.controller";
import ensureDataIsValidMiddleware from "../middlewares/ensureDataIsValid.middleware";
import {
  contactSchema,
  createContactSchema,
  updateContactSchema,
} from "../schemas/contacts.schema";
import { ensureEmailExistsMiddleware } from "../middlewares/ensuerEmailExists.middleware";

const contactsRoutes = Router();

contactsRoutes.post(
  "",
  ensureauthMiddleware,
  ensureDataIsValidMiddleware(contactSchema),
  ensureEmailExistsMiddleware,
  createContactController
);
contactsRoutes.get("", listContactController);

contactsRoutes.get("/:id", ensureauthMiddleware, retrieveContactsController);
contactsRoutes.patch(
  "",
  ensureauthMiddleware,
  ensureDataIsValidMiddleware(updateContactSchema),
  retrieveContactsController
);
contactsRoutes.delete("", ensureauthMiddleware, retrieveContactsController);
export { contactsRoutes };
