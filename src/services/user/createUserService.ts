import { IUserInterface } from "../../repositories/user/InterfaceUserRepository";
import { UserRepository } from "../../repositories/user/userRepository";

const CreateUserService = async (userData: IUserInterface) => {
  try {
    const user = await new UserRepository().createUser(userData);
    return user;
  } catch (error) {
    throw new Error("error creating user");
  }
};

export { CreateUserService };
