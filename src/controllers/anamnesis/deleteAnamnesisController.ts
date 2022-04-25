import { Request, Response } from "express";

import { deleteAnamnesisService } from "../../services";

const deleteAnamnesisController = async (req: Request, res: Response) => {
  try {
    const { userId } = req.decoded;

    const deleted = await deleteAnamnesisService(userId);

    return res.status(200).json(deleted);
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

export { deleteAnamnesisController };
