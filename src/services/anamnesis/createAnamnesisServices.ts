import { IAnamnesisShape } from "../../interfaces";
import { AnamnesisRepository } from "../../repositories";

const createAnamnesisService = async (
  anammesis: IAnamnesisShape,
  userId: string
) => {
  const anamnesisExists = await new AnamnesisRepository().findUserAnamnesis(
    userId
  );

  if (anamnesisExists) {
    throw new Error("User already have a anamnesis.");
  }

  const anamnesiWithUserId = { ...anammesis, user: { id: userId } };

  const newAnamnesis = await new AnamnesisRepository().saveAnamnesis(
    anamnesiWithUserId
  );

  return newAnamnesis;
};

export { createAnamnesisService };
