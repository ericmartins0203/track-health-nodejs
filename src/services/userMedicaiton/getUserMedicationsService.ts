import { UserMedicationsRepository } from "../../repositories";

const getUserMedicationsService = async (userId: string) => {
  const userMedicationsDb =
    await new UserMedicationsRepository().findAllUserMedications(userId);

  return userMedicationsDb;
};

export { getUserMedicationsService };
