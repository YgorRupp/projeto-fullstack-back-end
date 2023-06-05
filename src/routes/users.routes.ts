import { Router } from "express";
import {
  createUserController,
  deleteUserController,
  listUserController,
  // retrieveUserController,
  updateUserController,
} from "../controllers/users.controller";
import ensureDataIsValidMiddleware from "../middlewares/ensureDataIsValid.middleware";
import { ensureauthMiddleware } from "../middlewares/ensureAuth.middleware";
import { updateUserSchema, userSchema } from "../schemas/users.schema";
import { ensureEmailExistsMiddleware } from "../middlewares/ensuerEmailExists.middleware";
import ensureUserExistsMiddleware from "../middlewares/ensureUserExists.middleware";

const usersRoutes = Router();

usersRoutes.post(
  "",
  ensureDataIsValidMiddleware(userSchema),
  ensureEmailExistsMiddleware,
  createUserController
);
usersRoutes.get("", listUserController);
// usersRoutes.get("/profile/:id", ensureauthMiddleware, retrieveUserController);
usersRoutes.patch(
  "/:id",
  ensureUserExistsMiddleware,
  ensureauthMiddleware,
  ensureDataIsValidMiddleware(updateUserSchema),
  updateUserController
);
usersRoutes.delete(
  "/:id",
  ensureUserExistsMiddleware,
  ensureauthMiddleware,
  deleteUserController
);

export { usersRoutes };
