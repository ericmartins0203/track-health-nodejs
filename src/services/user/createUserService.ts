import { IUserInterface } from "../../repositories/user/InterfaceUserRepository";
import { UserRepository } from "../../repositories/user/userRepository";

const CreateUserService = async (userData: IUserInterface) => {
  try {
    await new UserRepository().createUser(userData);
    const user = new UserRepository().find(userData.email);
    return user;
  } catch (error) {
    throw new Error("error creating user");
  }
};

export { CreateUserService };
