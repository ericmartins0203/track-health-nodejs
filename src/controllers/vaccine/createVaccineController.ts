import { Request, Response } from "express";

import { IVaccineInterfaces } from "../../repositories/vaccine/IVaccineInterfaces";
import { createVaccineService } from "../../services";

const createVaccineController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  try {
    const { userId } = request.decoded;
    const vaccineData = request.validate as IVaccineInterfaces;
    const vaccine = await createVaccineService(vaccineData, userId);
    return response.status(201).json(vaccine);
  } catch (error: unknown) {
    if (error instanceof Error) {
      return response.status(400).json({
        message: error.message || "Unexpected error.",
      });
    }
    return response.status(500).json({ Error: "Unexpected error." });
  }
};

export { createVaccineController };
