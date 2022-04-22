import { Request, Response } from "express";
import { updateUserMedicationService } from "../../services";

const updateUserMedicationController = async (req: Request, res: Response) => {
  try {
    const { description } = req.body;
    const { id } = req.params;
    const { userId } = req.decoded;

    const updated = await updateUserMedicationService(id, userId, description);

    return res.status(200).json(updated);
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

export { updateUserMedicationController };
