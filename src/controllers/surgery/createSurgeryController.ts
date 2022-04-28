import { Request, Response } from "express";

import { ISurgeryInterfaces } from "../../repositories/surgery/userSurgeriesInterface";
import { createSurgeryService } from "../../services";

const createSurgeryController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  try {
    const { userId } = request.decoded;
    const surgeryData = request.validate as ISurgeryInterfaces;
    const surgery = await createSurgeryService(surgeryData, userId);
    return response.status(201).json(surgery);
  } catch (error: unknown) {
    if (error instanceof Error) {
      return response.status(400).json({
        message: error.message || "Unexpected error.",
      });
    }
    return response.status(500).json({ Error: "Unexpected error." });
  }
};

export { createSurgeryController };
