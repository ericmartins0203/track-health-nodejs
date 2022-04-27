import { SurgeryRepository } from "../../repositories";

const deleteUserSurgeryService = async (id: string, userId: string) => {
  const surgery = await new SurgeryRepository().findUserSurgeryById(id, userId);

  if (!surgery) {
    throw Error("Surgery not found");
  }

  await new SurgeryRepository().deleteUserSurgery(id);

  return { message: "success" };
};

export { deleteUserSurgeryService };
