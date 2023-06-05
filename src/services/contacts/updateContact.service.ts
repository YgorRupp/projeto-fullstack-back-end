import { Repository } from "typeorm";
import { iContactUpdate } from "../../interfaces/contacts.interface";
import { Contact } from "../../entities/contacts.entity";
import { AppDataSource } from "../../data-source";
import {
  createContactSchema,
  updateContactSchema,
} from "../../schemas/contacts.schema";

const updateContactService = async (
  contactData: iContactUpdate,
  idContact: number
): Promise<iContactUpdate> => {
  const contactRepository: Repository<Contact> =
    AppDataSource.getRepository(Contact);

  const oldContactData = await contactRepository.findOneBy({
    id: idContact,
  });

  const contact = contactRepository.create({
    ...oldContactData,
    ...contactData,
  });

  await contactRepository.save(contact);

  const updateContact = createContactSchema.parse(contact);

  return updateContact;
};

export default updateContactService;
