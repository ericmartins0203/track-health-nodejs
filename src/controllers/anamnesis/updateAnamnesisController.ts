import { Request, Response } from "express";

import { IAnamnesisShapeUpdate } from "../../interfaces";
import { updateAnamnesisServices } from "../../services";

const updateAnamnesisController = async (req: Request, res: Response) => {
  try {
    const { validate } = req;
    const { userId } = req.decoded;
    const updated = await updateAnamnesisServices(
      userId,
      validate as IAnamnesisShapeUpdate
    );

    return res.status(200).json(updated);
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

export { updateAnamnesisController };
