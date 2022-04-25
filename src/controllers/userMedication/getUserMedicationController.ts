import { Request, Response } from "express";

import { getUserMedicationsService } from "../../services";

const getUserMedicationsController = async (req: Request, res: Response) => {
  try {
    const { userId } = req.decoded;
    const userMedications = await getUserMedicationsService(userId);

    return res.status(200).json(userMedications);
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

export { getUserMedicationsController };
