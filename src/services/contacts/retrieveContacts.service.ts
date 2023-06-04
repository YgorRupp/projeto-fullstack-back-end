import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { iUsers } from "../../interfaces/users.interface";
import { User } from "../../entities/users.entity";
import { returnMultipleUsers } from "../../schemas/users.schema";
import { Contact } from "../../entities/contacts.entity";
import { returnMultipleContacts } from "../../schemas/contacts.schema";
import { iContactReturn } from "../../interfaces/contacts.interface";

const retrieveContactsService = async (
  userId: number
): Promise<iContactReturn[]> => {
  const contactRepository: Repository<Contact> =
    AppDataSource.getRepository(Contact);

  const findListContacts = await contactRepository.find({
    where: {
      user: {
        id: userId,
      },
    },
  });

  return returnMultipleContacts.parse(findListContacts);
};

export default retrieveContactsService;
