import { UserDiseaseRepository } from "../../repositories";

const deleteUserDiseaseService = async (id: string, userId: string) => {
  try {
    const userDisease = await new UserDiseaseRepository().getUserDisease(
      userId
    );
    if (!userDisease.filter((disease) => disease.id === id)) {
      throw new Error("UserDisease not found");
    }

    await new UserDiseaseRepository().deleteUserDisease(id);
    return userDisease;
  } catch (err) {
    console.log(err);
    throw new Error("UserDisease not found");
  }
};
export default deleteUserDiseaseService;
