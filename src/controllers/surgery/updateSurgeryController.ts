import { Request, Response } from "express";

import { updateUserSurgeryService } from "../../services";

const updateSurgeryController = async (req: Request, res: Response) => {
  try {
    const { surgeryId } = req.params;
    const { userId } = req.decoded;
    const surgeryToUpdate = req.body;

    const updated = await updateUserSurgeryService(
      userId,
      surgeryId,
      surgeryToUpdate
    );

    return res.status(200).json(updated);
  } catch (error: any) {
    return res
      .status(400)
      .json({ error: error.errors ? error.errors : error.message });
  }
};

export { updateSurgeryController };
