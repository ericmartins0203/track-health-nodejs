import { Response, Request } from "express";

import { deleteUserAllergyService } from "../../services";

const deleteUserAllergy = async (req: Request, res: Response) => {
  try {
    const { userId } = req.decoded;
    const { allergyId } = req.params;
    const deleted = await deleteUserAllergyService(allergyId, userId);

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

export { deleteUserAllergy };
