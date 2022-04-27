import { VaccineRepository } from "../../repositories/vaccine/vacinneRepository";

const getUserVaccinesServices = async (id: string) => {
  const userVaccines = await new VaccineRepository().findUserVaccine(id);

  return userVaccines;
};

export { getUserVaccinesServices };
