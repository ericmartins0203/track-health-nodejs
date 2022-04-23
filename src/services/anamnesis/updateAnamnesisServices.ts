import { IAnamnesisShapeUpdate } from "../../interfaces";
import { AnamnesisRepository } from "../../repositories";

const updateAnamnesisServices = async (
  userId: string,
  updatedDatas: IAnamnesisShapeUpdate
) => {
  const updated = await new AnamnesisRepository().updateAnamnesis(
    userId,
    updatedDatas
  );

  const newAnamnesis = await new AnamnesisRepository().findUserAnamnesis(
    userId
  );

  return newAnamnesis;
};

export { updateAnamnesisServices };
