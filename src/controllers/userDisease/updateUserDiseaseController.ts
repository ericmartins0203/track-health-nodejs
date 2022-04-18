import { Request, Response } from "express";

import { updateUserDiseaseService } from "../../services";

const updateUserDiseaseController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { userId } = req.decoded;
    const { description, medication } = req.body;

    const disease = await updateUserDiseaseService(
      id,
      userId,
      description,
      medication
    );

    return res.status(200).json({
      message: `${disease[0].disease.name} updated`,
    });
  } catch (err) {
    return res.status(400).json({
      message: "Disease not found",
    });
  }
};

export default updateUserDiseaseController;
