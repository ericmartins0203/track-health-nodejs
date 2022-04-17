import { DiseaseRepository } from "../../repositories/disease/diseaseRepository";

const getDiseaseService = async () => {
  const disease = await new DiseaseRepository().findAll();
  return disease;
};

export default getDiseaseService;
