import { UserMedicationsRepository } from "../../repositories";

const deleteUserMedicationService = async (id: string, userId: string) => {
  const userMedication =
    await new UserMedicationsRepository().findUserMedicationById(id, userId);

  if (!userMedication) {
    throw Error("Medication not found");
  }

  const deleted = await new UserMedicationsRepository().deleteUserMedication(
    id
  );

  return { message: "success" };
};

export { deleteUserMedicationService };
