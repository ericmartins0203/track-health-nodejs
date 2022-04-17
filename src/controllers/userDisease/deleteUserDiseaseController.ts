import { Request, Response } from "express";

import { deleteUserDiseaseService } from "../../services";

const deleteUserDiseaseController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { userId } = req.decoded;

  const userDisease = await deleteUserDiseaseService(id, userId);
  const disease = userDisease.filter((userDisease) => userDisease.id === id);

  res.status(200).json({
    message: `${disease[0].disease.name} deleted`,
  });
};

export default deleteUserDiseaseController;
