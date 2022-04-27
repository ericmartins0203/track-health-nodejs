import { VaccineRepository } from "../../repositories/vaccine/vacinneRepository";

const deleteUserVaccineService = async (id: string, userId: string) => {
  const vaccine = await new VaccineRepository().findUserVaccineById(id, userId);

  if (!vaccine) {
    throw Error("Vaccine not found");
  }

  const deleted = await new VaccineRepository().deleteUserVaccine(id);

  return { message: "success" };
};

export { deleteUserVaccineService };
