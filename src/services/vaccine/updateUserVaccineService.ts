import { Vaccine } from "../../entities";
import { VaccineRepository } from "../../repositories/vaccine/vacinneRepository";

const updateUserVaccineService = async (
  userId: string,
  vaccineId: string,
  vaccineToUpdate: Partial<Vaccine>
) => {
  const vaccine = await new VaccineRepository().findUserVaccineById(
    vaccineId,
    userId
  );

  if (!vaccine) {
    throw Error("Vaccine not found");
  }

  await new VaccineRepository().updateUserVaccine(vaccineId, vaccineToUpdate);

  const updated = await new VaccineRepository().findUserVaccineById(
    vaccineId,
    userId
  );

  return updated;
};

export { updateUserVaccineService };
