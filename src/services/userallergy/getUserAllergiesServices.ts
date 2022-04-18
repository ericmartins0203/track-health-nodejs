import { UserAllergiesRepository } from "../../repositories";

const getUserAllergiesServices = async (id: string) => {
  const userAllergies = await new UserAllergiesRepository().findUserAllergies(
    id
  );

  return userAllergies;
};

export { getUserAllergiesServices };
