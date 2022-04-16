import { UserRepository } from "../../repositories";
import { IUserInterface } from "../../repositories/user/InterfaceUserRepository";

const updateUserService = async (
  validate: Partial<IUserInterface>,
  userId: string
) => {
  try {
    const user = await new UserRepository().findById(userId);
    Object.assign(user, validate);

    return await new UserRepository().updateUser(user as IUserInterface);
  } catch (error) {
    throw new Error("error updateUser user");
  }
};
export { updateUserService };
