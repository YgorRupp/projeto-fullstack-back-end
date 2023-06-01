import { DeepPartial } from "typeorm";
import { z } from "zod";
import {
  contactSchema,
  createContactSchema,
  returnMultipleContacts,
} from "../schemas/contacts.schema";

type iContact = z.infer<typeof contactSchema>;
type iContactReturn = z.infer<typeof createContactSchema>;
type iContacts = z.infer<typeof returnMultipleContacts>;
type iContactUpdate = DeepPartial<iContactReturn>;

export { iContact, iContactReturn, iContacts, iContactUpdate };
