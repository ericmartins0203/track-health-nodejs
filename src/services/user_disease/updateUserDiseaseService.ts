import { UserDiseaseRepository } from "../../repositories";

const updateUserDiseaseService = async (
  id: string,
  userId: string,
  description: string,
  medication: string
) => {
  try {
    const userDisease = await new UserDiseaseRepository().getUserDisease(
      userId
    );
    if (!userDisease.filter((disease) => disease.id === id)) {
      throw new Error("UserDisease not found");
    }

    await new UserDiseaseRepository().updateUserDisease(id, {
      description,
      medication,
    });

    return userDisease.filter((disease) => disease.id === id);
  } catch (err) {
    console.log(err);
    throw new Error("UserDisease not found");
  }
};

export default updateUserDiseaseService;
