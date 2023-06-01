import { Request, Response } from "express";
import { createContactService } from "../services/contacts/createContact.service";

const createContactController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const data = req.body;

  const userId = req.user.userId;

  console.log(userId);

  await createContactService(data, userId);

  return res.status(201).json({
    message: "created",
  });
};

export { createContactController };
