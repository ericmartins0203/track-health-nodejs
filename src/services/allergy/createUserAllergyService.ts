import { UserAllergies } from "../../entities/UserAllergies";
import { UserAllergiesRepository } from "../../repositories";

const createUserAllerService = async (body: UserAllergies) => {
  const userAllergie = new UserAllergiesRepository().saveUserAllergy(body);

  return userAllergie;
};

export { createUserAllerService };
