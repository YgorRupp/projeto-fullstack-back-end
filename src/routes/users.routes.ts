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

const usersRoutes = Router();

usersRoutes.post("", createUserController);
usersRoutes.get("", listUserController);
// usersRoutes.get("/profile/:id", ensureauthMiddleware, retrieveUserController);
usersRoutes.patch("", ensureauthMiddleware, updateUserController);
usersRoutes.delete("", ensureauthMiddleware, deleteUserController);

export { usersRoutes };
