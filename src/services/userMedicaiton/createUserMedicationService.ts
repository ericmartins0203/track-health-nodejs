import { IUserTablesShape } from "../../interfaces";
import { UserMedicationsRepository } from "../../repositories";
import { titleCaseFunction } from "../../utils";

const createUserMedicationService = async (
  { id, name, description }: IUserTablesShape,
  userId: string
) => {
  const userMedicationToCreate = {
    user: { id: userId },
    description,
    medication: { id, name: titleCaseFunction(name) },
  };

  const { user, ...userMedication } =
    await new UserMedicationsRepository().saveUserMedication(
      userMedicationToCreate
    );

  return userMedication;
};

export { createUserMedicationService };
