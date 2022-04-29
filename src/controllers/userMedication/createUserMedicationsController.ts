import { Request, Response } from "express";

import { IUserTablesShape } from "../../interfaces";
import { createUserMedicationService } from "../../services";

const createUserMedicationController = async (req: Request, res: Response) => {
  try {
    const { validate } = req;
    const { userId } = req.decoded;

    const newUserMedication = await createUserMedicationService(
      validate as IUserTablesShape,
      userId
    );

    return res.status(201).json(newUserMedication);
  } catch (error: any) {
    if (error instanceof Error) {
      return res.status(400).json({
        message: error.message,
      });
    }

    if (error.detail) {
      return res.status(400).json({ error: error.detail });
    }

    return res.status(500).json({ error: "Unexpected error" });
  }
};

export { createUserMedicationController };
