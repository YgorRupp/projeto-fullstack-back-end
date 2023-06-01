import { z } from "zod";

const userSchema = z.object({
  name: z.string(),
  email: z.string(),
  password: z.string(),
  phone: z.string(),
});

const createUserSchema = userSchema
  .extend({
    id: z.number(),
    created_at: z.string(),
  })
  .omit({
    password: true,
  });

const returnMultipleUsers = createUserSchema.array();

const updateUserSchema = createUserSchema
  .omit({
    id: true,
  })
  .partial();

export { userSchema, createUserSchema, returnMultipleUsers, updateUserSchema };
