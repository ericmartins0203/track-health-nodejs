import { UserRepository } from "../../repositories/user/userRepository";

const CreateUserService = async (userData) => {
  try {
    const user = await new UserRepository().createUser(userData);
    return user;
  } catch (error) {
    throw new Error(error);
  }
};

export { CreateUserService };
