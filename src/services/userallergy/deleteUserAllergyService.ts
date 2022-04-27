import { UserAllergiesRepository } from "../../repositories";

const deleteUserAllergyService = async (id: string, userId: string) => {
  const allergy = await new UserAllergiesRepository().findUserAllergyById(
    id,
    userId
  );

  if (!allergy) {
    throw Error("Allergy not found");
  }

  const deleted = await new UserAllergiesRepository().deleteUserAllergy(id);

  return { message: "success" };
};

export { deleteUserAllergyService };
