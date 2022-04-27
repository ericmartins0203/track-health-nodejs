import { UserMedicationsRepository } from "../../repositories";

const updateUserMedicationService = async (
  id: string,
  userId: string,
  description: string
) => {
  const userMedication =
    await new UserMedicationsRepository().findUserMedicationById(id, userId);

  if (!userMedication) {
    throw Error("Medication not found");
  }

  if (typeof description !== "string") {
    throw Error("Type decription must be string.");
  }

  await new UserMedicationsRepository().updateUserMedication(id, description);

  const updated = await new UserMedicationsRepository().findUserMedicationById(
    id,
    userId
  );

  return updated;
};

export { updateUserMedicationService };
