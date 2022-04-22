import { Request, Response } from "express";

import { createUserMedicationService } from "../../services";

const createUserMedicationController = async (req: Request, res: Response) => {
  try {
    const { validate } = req;
    const { userId } = req.decoded;

    const newUserMedication = await createUserMedicationService(
      validate,
      userId
    );

    return res.status(201).json(newUserMedication);
  } catch (error: any) {
    if (error instanceof Error) {
      return res.status(400).json({
        message: error.message,
      });
    }

    return res.status(400).json({ error: error.errors || error.detail });
  }
};

export { createUserMedicationController };
