import { UserRepository } from "../../repositories";

const getUserService = async (email: string) => {
  const user = await new UserRepository().findOne(email);
  return user;
};

export { getUserService };
