import { Response, Request } from "express";

import { deleteUserMedicationService } from "../../services";

const deleteUserMedicationController = async (req: Request, res: Response) => {
  try {
    const { userId } = req.decoded;
    const { id } = req.params;
    const deleted = await deleteUserMedicationService(id, userId);

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

export { deleteUserMedicationController };
