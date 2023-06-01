import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/users.entity";
import { createUserSchema } from "../../schemas/users.schema";
import { iUser, iUserReturn } from "../../interfaces/users.interface";

const createUserService = async (userData: iUser): Promise<iUserReturn> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const user: User = userRepository.create(userData);

  await userRepository.save(user);

  const newUser = createUserSchema.parse(user);

  return newUser;
};

export default createUserService;
