import { IUserTablesShape } from "../../interfaces";
import { UserAllergiesRepository } from "../../repositories";
import { titleCaseFunction } from "../../utils";

const createUserAllergyService = async (
  { id, name, description }: IUserTablesShape,
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

export { createUserAllergyService };
