import { Request, Response } from "express";
import { createContactService } from "../services/contacts/createContact.service";
import listContactService from "../services/contacts/listContact.service";
import retrieveContactsService from "../services/contacts/retrieveContacts.service";
import { iContactUpdate } from "../interfaces/contacts.interface";
import updateContactService from "../services/contacts/updateContact.service";
import deleteContactService from "../services/contacts/deleteContact.service";

const createContactController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const data = req.body;

  const contactId = res.locals.id;

  console.log(contactId);

  const contacts = await createContactService(data, contactId);

  return res.status(201).json(contacts);
};

const listContactController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const contacts = await listContactService();

  return res.status(200).json(contacts);
};

const retrieveContactsController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const contactId = res.locals.id;

  const contacts = await retrieveContactsService(contactId);

  return res.status(200).json(contacts);
};

const updateContactController = async (req: Request, res: Response) => {
  const contactData: iContactUpdate = req.body;
  const contactId = res.locals.id;

  const updatedUser = await updateContactService(contactData, contactId);

  return res.json(updatedUser);
};
const deleteContactController = async (req: Request, res: Response) => {
  const contactId: number = res.locals.id;

  await deleteContactService(contactId);

  return res.status(204).send();
};
export {
  createContactController,
  listContactController,
  retrieveContactsController,
  updateContactController,
  deleteContactController,
};
