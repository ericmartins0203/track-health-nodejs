import { SurgeryRepository } from "../../repositories";
import {
  ISurgeryDTO,
  ISurgeryInterfaces,
} from "../../repositories/surgery/userSurgeriesInterface";

const createSurgeryService = async (
  surgeryData: ISurgeryInterfaces,
  userId: string
) => {
  try {
    const userSurgeryToCreate: ISurgeryDTO = {
      user: { id: userId },

      date: surgeryData.date,
      description: surgeryData.description,
      surgery: {
        name: surgeryData.name,
      },
    };

    const surgery = await new SurgeryRepository().createSurgery(
      userSurgeryToCreate
    );
    return surgery;
  } catch (error) {
    throw new Error("error creating Surgery");
  }
};

export { createSurgeryService };
