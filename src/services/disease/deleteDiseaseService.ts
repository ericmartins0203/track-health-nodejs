import { DiseaseRepository } from "../../repositories";

const deleteDiseaseService = async (id: string) => {
  const disease = await new DiseaseRepository().findById(id);

  if (!disease) {
    throw new Error("Disease not found");
  }

  await new DiseaseRepository().deleteDisease(id);
  return disease;
};

export default deleteDiseaseService;
