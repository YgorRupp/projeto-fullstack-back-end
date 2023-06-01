import { Repository } from "typeorm";
import { iContact, iContactReturn } from "../../interfaces/contacts.interface";
import { Contact } from "../../entities/contacts.entity";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/users.entity";
import { AppError } from "../../errors/AppError";
import { createContactSchema } from "../../schemas/contacts.schema";

const createContactService = async (
  data: iContact,
  userId: number
): Promise<iContactReturn> => {
  const contactsRepository: Repository<Contact> =
    AppDataSource.getRepository(Contact);
  const usersRepository: Repository<User> = AppDataSource.getRepository(User);

  const user: User | null = await usersRepository.findOneBy({
    id: userId,
  });

  if (!user) {
    throw new AppError("User not found", 404);
  }

  const contact: Contact = contactsRepository.create({
    ...data,
    user,
  });

  await contactsRepository.save(contact);

  return createContactSchema.parse(contact);
};

export { createContactService };
