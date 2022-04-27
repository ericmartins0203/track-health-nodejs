import { Surgery } from "../../entities";
import { SurgeryRepository } from "../../repositories";

const updateUserSurgeryService = async (
  userId: string,
  surgeryId: string,
  surgeryToUpdate: Partial<Surgery>
) => {
  const surgery = await new SurgeryRepository().findUserSurgeryById(
    surgeryId,
    userId
  );

  if (!surgery) {
    throw Error("Surgery not found");
  }

  await new SurgeryRepository().updateUserSurgery(surgeryId, surgeryToUpdate);

  const updated = await new SurgeryRepository().findUserSurgeryById(
    surgeryId,
    userId
  );

  return updated;
};

export { updateUserSurgeryService };
