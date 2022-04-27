import { UserDiseaseRepository } from "../../repositories";

const getUserDiseaseService = async (id: string): Promise<any> => {
  const diseases = await new UserDiseaseRepository().getUserDisease(id);
  return diseases;
};

export default getUserDiseaseService;
