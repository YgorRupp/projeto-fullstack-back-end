import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/users.entity";
import { Contact } from "../../entities/contacts.entity";

const deleteContactService = async (idUser: number): Promise<void> => {
  const contactRepository: Repository<Contact> =
    AppDataSource.getRepository(Contact);

  const contact = await contactRepository.findOneBy({
    id: idUser,
  });

  await contactRepository.softRemove(contact!);
};

export default deleteContactService;
