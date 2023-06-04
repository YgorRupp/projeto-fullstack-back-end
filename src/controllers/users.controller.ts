import { Request, Response } from "express";
import { iUser, iUserUpdate } from "../interfaces/users.interface";
import createUserService from "../services/users/createUser.service";
import listUserService from "../services/users/listUser.service";
import updateUserService from "../services/users/updateUser.service";
import deleteUserService from "../services/users/deleteUser.service";
// import retrieveUserService from "../services/users/retrieveUser.service";

const createUserController = async (req: Request, res: Response) => {
  const userData: iUser = req.body;

  const newUser = await createUserService(userData);

  return res.status(201).json(newUser);
};

const listUserController = async (req: Request, res: Response) => {
  const users = await listUserService();

  return res.status(200).json(users);
};

// const retrieveUserController = async (
//   req: Request,
//   res: Response
// ): Promise<Response> => {
//   const userId = parseInt(req.params.id);

//   const user = await retrieveUserService(userId);

//   return res.status(200).json(user);
// };

const updateUserController = async (req: Request, res: Response) => {
  const userData: iUserUpdate = req.body;
  const idUser = res.locals.id;

  const updatedUser = await updateUserService(userData, idUser);

  return res.json(updatedUser);
};
const deleteUserController = async (req: Request, res: Response) => {
  const idUser: number = res.locals.id;

  await deleteUserService(idUser);

  return res.status(204).send();
};
export {
  createUserController,
  listUserController,
  updateUserController,
  deleteUserController,
  // retrieveUserController,
};
