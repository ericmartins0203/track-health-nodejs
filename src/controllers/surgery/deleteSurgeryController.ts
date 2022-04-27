import { Response, Request } from "express";

import { deleteUserSurgeryService } from "../../services";

const deleteSurgeryController = async (req: Request, res: Response) => {
  try {
    const { userId } = req.decoded;
    const { surgeryId } = req.params;
    const deleted = await deleteUserSurgeryService(surgeryId, userId);

    return res.status(200).json(deleted);
  } catch (error: any) {
    if (error instanceof Error) {
      return res.status(400).json({
        message: error.message,
      });
    }
    return res.status(500).json({ Error: error.detail || "Unexpected error." });
  }
};

export { deleteSurgeryController };
