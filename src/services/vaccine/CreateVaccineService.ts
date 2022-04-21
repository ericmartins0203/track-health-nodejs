import {
  IVaccineDTO,
  IVaccineInterfaces,
} from "../../repositories/vaccine/IVaccineInterfaces";
import { VaccineRepository } from "../../repositories/vaccine/vacinneRepository";

const createVaccineService = async (
  vaccineData: IVaccineInterfaces,
  userId: string
) => {
  try {
    const userVaccineToCreate: IVaccineDTO = {
      user: { id: userId },

      date: vaccineData.date,
      dose: vaccineData.dose,
      description: vaccineData.description,

      vaccine: {
        name: vaccineData.name,
      },
    };

    const vaccine = await new VaccineRepository().createVaccine(
      userVaccineToCreate
    );
    return vaccine;
  } catch (error) {
    throw new Error("error creating vaccine");
  }
};

export { createVaccineService };
