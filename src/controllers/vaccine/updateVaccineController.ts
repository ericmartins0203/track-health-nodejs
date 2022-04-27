import { Request, Response } from "express";

import { updateUserVaccineService } from "../../services";

const updateVaccineController = async (req: Request, res: Response) => {
  try {
    const { vaccineId } = req.params;
    const { userId } = req.decoded;
    const vaccineToUpdate = req.body;

    const updated = await updateUserVaccineService(
      userId,
      vaccineId,
      vaccineToUpdate
    );

    return res.status(200).json(updated);
  } catch (error: any) {
    return res
      .status(400)
      .json({ error: error.errors ? error.errors : error.message });
  }
};

export { updateVaccineController };
