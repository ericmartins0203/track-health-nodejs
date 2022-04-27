import { Request, Response } from "express";

import { getAnamnesisService } from "../../services";

const getAnamnesisController = async (req: Request, res: Response) => {
  try {
    const { userId } = req.decoded;

    const anammesis = await getAnamnesisService(userId);

    return res.status(200).json(anammesis);
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

export { getAnamnesisController };
