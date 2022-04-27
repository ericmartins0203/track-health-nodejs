import { Request, Response } from "express";

import { getUserSurgeryServices } from "../../services";

const getUserSurgeryController = async (req: Request, res: Response) => {
  try {
    const { userId } = req.decoded;
    const surgeries = await getUserSurgeryServices(userId);

    return res.status(200).json(surgeries);
  } catch (error: any) {
    return res
      .status(400)
      .json({ error: error.errors ? error.errors : error.detail });
  }
};

export { getUserSurgeryController };
