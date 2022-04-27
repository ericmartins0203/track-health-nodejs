import { DiseaseRepository } from "../../repositories";

const deleteDiseaseService = async (id: string) => {
  try {
    const disease = await new DiseaseRepository().findById(id);

    if (!disease) {
      throw new Error("Disease not found");
    }

    await new DiseaseRepository().deleteDisease(id);
    return disease;
  } catch (err) {
    throw new Error("Disease already in use");
  }
};

export default deleteDiseaseService;
