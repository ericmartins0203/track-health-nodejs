import { MedicationRepository } from "../../repositories";

const getMedicationsService = async () => {
  const medications = await new MedicationRepository().findMedications();

  return medications;
};

export { getMedicationsService };
