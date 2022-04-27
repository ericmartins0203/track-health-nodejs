import { DiseaseRepository } from "../../repositories/disease/diseaseRepository";

const allDiseaseService = async () => {
  const disease = await new DiseaseRepository().findAll();
  return disease;
};

export default allDiseaseService;
