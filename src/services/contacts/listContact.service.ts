import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { iUsers } from "../../interfaces/users.interface";
import { User } from "../../entities/users.entity";
import { returnMultipleUsers } from "../../schemas/users.schema";
import { Contact } from "../../entities/contacts.entity";
import { returnMultipleContacts } from "../../schemas/contacts.schema";
import { iContact, iContactReturn } from "../../interfaces/contacts.interface";

const listContactService = async (): Promise<iContactReturn[]> => {
  const contactRepository: Repository<Contact> =
    AppDataSource.getRepository(Contact);

  const findContact: Array<Contact> = await contactRepository.find();

  const contacts = returnMultipleContacts.parse(findContact);

  return contacts;
};

export default listContactService;
