import { UserAllergiesRepository } from "../../repositories";

const updateUserAllergyService = async (
  userId: string,
  allergyId: string,
  description: string
) => {
  const allergy = await new UserAllergiesRepository().findUserAllergyById(
    allergyId,
    userId
  );

  if (!allergy) {
    throw Error("Allergy not found");
  }

  if (typeof description !== "string") {
    throw Error("Type decription must be string.");
  }

  await new UserAllergiesRepository().updateUserAllergy(allergyId, description);

  const updated = await new UserAllergiesRepository().findUserAllergyById(
    allergyId,
    userId
  );

  return updated;
};

export { updateUserAllergyService };
