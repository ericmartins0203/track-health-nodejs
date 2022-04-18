import { UserDiseaseRepository } from "../../repositories";

const deleteUserDiseaseService = async (id: string, userId: string) => {
  const userDisease = await new UserDiseaseRepository().getUserDisease(userId);

  if (!userDisease.find((disease) => disease.id === id)) {
    throw new Error("Disease not found");
  }

  await new UserDiseaseRepository().deleteUserDisease(id);
  return userDisease;
};
export default deleteUserDiseaseService;
