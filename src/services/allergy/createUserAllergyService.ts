import { IUserAllergiesShape } from "../../interfaces";
import { UserAllergiesRepository } from "../../repositories";
import { titleCaseFunction } from "../../utils";

const createUserAllerService = async (
  { id, name, description }: IUserAllergiesShape,
  userId: string
) => {
  const userAllergieToCreate = {
    user: { id: userId },
    description,
    allergy: { id, name: titleCaseFunction(name) },
  };

  const { user, ...userAllergie } =
    await new UserAllergiesRepository().saveUserAllergy(userAllergieToCreate);

  return userAllergie;
};

export { createUserAllerService };
