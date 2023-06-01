import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { iUserUpdate } from "../../interfaces/users.interface";
import { User } from "../../entities/users.entity";
import { createUserSchema } from "../../schemas/users.schema";

const updateUserService = async (
  userData: iUserUpdate,
  idUser: number
): Promise<iUserUpdate> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const oldUserData = await userRepository.findOneBy({
    id: idUser,
  });

  const user = userRepository.create({
    ...oldUserData,
    ...userData,
  });

  await userRepository.save(user);

  const updatedUser = createUserSchema.parse(user);

  return updatedUser;
};

export default updateUserService;
