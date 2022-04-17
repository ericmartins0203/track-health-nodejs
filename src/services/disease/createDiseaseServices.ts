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
      user,
      disease,
      description,
      medication,
    });
    // eslint-disable-next-line consistent-return
    return userDisease;
  } catch (err) {
    throw new Error("Unexpected error");
  }
};

export default createDiseaseServices;
