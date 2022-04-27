import { Request, Response } from "express";

import { getProfileImageService } from "../../services";

const getProfileImageController = async (req: Request, res: Response) => {
  try {
    const { userId } = req.decoded;
    const profileImage = await getProfileImageService(userId);

    return res.json(profileImage);
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

export { getProfileImageController };
