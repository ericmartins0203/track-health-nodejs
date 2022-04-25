import { Request, Response } from "express";

import { deleteProfileImageService } from "../../services";

const deleteProfileImageController = async (req: Request, res: Response) => {
  try {
    const { userId } = req.decoded;
    const imageDeleted = await deleteProfileImageService(userId);

    return res.json(imageDeleted);
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

export { deleteProfileImageController };
