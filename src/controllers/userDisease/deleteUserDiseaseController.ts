import { Request, Response } from "express";

import { deleteUserDiseaseService } from "../../services";

const deleteUserDiseaseController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { userId } = req.decoded;

    const userDisease = await deleteUserDiseaseService(id, userId);
    const disease = userDisease.filter((userDisease) => userDisease.id === id);

    return res.status(200).json({
      message: `${disease[0].disease.name} deleted`,
    });
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({
        message: error.message,
      });
    }
    return res.status(500).json({ Error: "Unexpected error." });
  }
};

export default deleteUserDiseaseController;
