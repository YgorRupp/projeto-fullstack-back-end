import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { iUsers } from "../../interfaces/users.interface";
import { User } from "../../entities/users.entity";
import { returnMultipleUsers } from "../../schemas/users.schema";

const listUserService = async (): Promise<iUsers> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const findUsers: Array<User> = await userRepository.find();

  const users = returnMultipleUsers.parse(findUsers);

  return users;
};

export default listUserService;
