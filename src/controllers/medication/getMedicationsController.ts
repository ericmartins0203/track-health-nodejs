import { Request, Response } from "express";

import { getMedicationsService } from "../../services";

const getMedicationsController = async (req: Request, res: Response) => {
  try {
    const medications = await getMedicationsService();

    return res.status(200).json(medications);
  } catch (error: any) {
    if (error instanceof Error) {
      return res.status(400).json({
        message: error.message,
      });
    }

    return res.status(400).json({ error: error.errors || error.detail });
  }
};

export { getMedicationsController };
