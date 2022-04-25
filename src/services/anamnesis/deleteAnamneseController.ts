import { AnamnesisRepository } from "../../repositories";

const deleteAnamnesisService = async (userId: string) => {
  const deleteAnamnesis = await new AnamnesisRepository().deleteAnamnesis(
    userId
  );

  return { message: deleteAnamnesis ? "success" : "Error while delete." };
};

export { deleteAnamnesisService };
