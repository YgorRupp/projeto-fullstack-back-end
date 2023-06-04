// import { Repository } from "typeorm";
// import { AppDataSource } from "../../data-source";
// import { iUserReturn, iUsers } from "../../interfaces/users.interface";
// import { User } from "../../entities/users.entity";

// import { returnMultipleContacts } from "../../schemas/contacts.schema";
// import { returnMultipleUsers } from "../../schemas/users.schema";

// const retrieveUserService = async (userId: number): Promise<iUsers> => {
//   const userRepository: Repository<User> = AppDataSource.getRepository(User);

//   const user = await userRepository.findOneBy({
//     id: userId,
//   });

//   return returnMultipleUsers.parse(user);
// };

// export default retrieveUserService;
