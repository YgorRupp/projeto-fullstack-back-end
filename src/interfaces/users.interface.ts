import { DeepPartial } from "typeorm";
import { z } from "zod";
import {
  createUserSchema,
  returnMultipleUsers,
  userSchema,
} from "../schemas/users.schema";

type iUser = z.infer<typeof userSchema>;
type iUserReturn = z.infer<typeof createUserSchema>;
type iUsers = z.infer<typeof returnMultipleUsers>;
type iUserUpdate = DeepPartial<iUserReturn>;

export { iUser, iUserReturn, iUsers, iUserUpdate };
