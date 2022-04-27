import { Request, Response } from "express";

import { IAnamnesisShape } from "../../interfaces";
import { createAnamnesisService } from "../../services";

const createAnamnesisController = async (req: Request, res: Response) => {
  try {
    const { validate } = req;
    const { userId } = req.decoded;
    const anamnesis = await createAnamnesisService(
      validate as IAnamnesisShape,
      userId
    );

    return res.status(201).json(anamnesis);
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

export { createAnamnesisController };
