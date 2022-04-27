import { AllergyRepository } from "../../repositories";

const getAllergiesServices = async () => {
  const allergies = await new AllergyRepository().findAllergies();

  return allergies;
};

export { getAllergiesServices };
