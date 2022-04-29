import { Request, Response } from "express";

import { createProfileImageService } from "../../services";

const createProfileImageController = async (req: Request, res: Response) => {
  try {
    const { file } = req;
    const { userId } = req.decoded;
    const profileImage = await createProfileImageService(
      file as Express.Multer.File,
      userId
    );

    return res.status(201).json(profileImage);
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

export { createProfileImageController };
