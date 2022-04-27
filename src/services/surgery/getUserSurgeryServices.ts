import { SurgeryRepository } from "../../repositories";

const getUserSurgeryServices = async (id: string) => {
  const userSurgery = await new SurgeryRepository().findUserSurgery(id);

  return userSurgery;
};

export { getUserSurgeryServices };
