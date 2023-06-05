import { z } from "zod";

const contactSchema = z.object({
  name: z.string(),
  email: z.string(),
  password: z.string(),
  phone: z.string(),
});

const createContactSchema = contactSchema
  .extend({
    id: z.number(),
    created_at: z.string(),
  })
  .omit({
    password: true,
  });

const returnMultipleContacts = createContactSchema.array();

const updateContactSchema = createContactSchema
  .omit({
    id: true,
  })
  .partial();

export {
  contactSchema,
  createContactSchema,
  returnMultipleContacts,
  updateContactSchema,
};
