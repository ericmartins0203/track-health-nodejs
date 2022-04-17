import {
  UserDiseaseRepository,
  UserRepository,
  DiseaseRepository,
} from "../../repositories";

const createDiseaseServices = async (
  name: string,
  description: string,
  medication: string,
  email: string
) => {
  try {
    let disease = await new DiseaseRepository().findByName(name);
    const user = await new UserRepository().findOne(email);

    if (!user) {
      throw new Error("User not found");
    }

    if (!disease) {
      disease = await new DiseaseRepository().createDisease(name);
    }

    const userDisease = await new UserDiseaseRepository().createUserDisease({
      user: { id: user.id as string },
      disease: { id: disease.id, name: disease.name },
      description,
      medication,
    });

    // eslint-disable-next-line consistent-return
    return {
      id: userDisease.id,
      description: userDisease.description,
      medication: userDisease.medication,
      disease: userDisease.disease.name,
    };
  } catch (err) {
    throw new Error("Already exists");
  }
};

export default createDiseaseServices;
