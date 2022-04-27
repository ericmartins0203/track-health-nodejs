import { DiseaseRepository } from "../../repositories";

const createNewDiseaseServices = async (name: string) => {
  try {
    let disease = await new DiseaseRepository().findByName(name);

    if (disease) {
      throw new Error("Disease already exists");
    }

    disease = await new DiseaseRepository().createDisease(name);

    return disease;
  } catch (err) {
    throw new Error("Unexpected error");
  }
};

export default createNewDiseaseServices;
