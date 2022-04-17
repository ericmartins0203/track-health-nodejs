import { Request, Response } from "express";

import { IDiseaseInterface } from "../../repositories/disease/InterfaceDiseaseRepository";
import { createDiseaseServices } from "../../services";

const createDiseaseController = async (
  req: Request,
  res: Response
): Promise<Response<Record<string, any>>> => {
  try {
    const { email } = req.decoded;
    const { name, description, medication } = req.validate as IDiseaseInterface;
    const disease = await createDiseaseServices(
      name,
      description as string,
      medication as string,
      email
    );
    return res.status(201).json(disease);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({
        message: error.message,
      });
    }
    return res.status(500).json({ Error: "Unexpected error." });
  }
};

export default createDiseaseController;
