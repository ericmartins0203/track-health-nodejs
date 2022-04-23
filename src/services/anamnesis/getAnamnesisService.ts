import { AnamnesisRepository } from "../../repositories";

const getAnamnesisService = async (userId: string) => {
  const anammesis = await new AnamnesisRepository().findUserAnamnesis(userId);

  return anammesis;
};

export { getAnamnesisService };
