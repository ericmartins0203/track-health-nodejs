import { Request, Response } from "express";

import { IDiseaseInterface } from "../../repositories/disease/InterfaceDiseaseRepository";
import { createNewDiseaseServices } from "../../services";

const createNewDiseaseController = async (
  req: Request,
  res: Response
): Promise<Response<Record<string, any>>> => {
  try {
    const { name } = req.validate as IDiseaseInterface;
    const disease = await createNewDiseaseServices(name);
    return res.status(201).json({ disease });
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({
        message: error.message,
      });
    }
    return res.status(500).json({ Error: "Unexpected error." });
  }
};

export default createNewDiseaseController;
