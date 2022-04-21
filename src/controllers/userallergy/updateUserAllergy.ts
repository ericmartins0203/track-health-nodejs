import { Request, Response } from "express";

import { updateUserAllergyService } from "../../services/userallergy/updateUSerAllergyService";

const updateUserAllergy = async (req: Request, res: Response) => {
  try {
    const { allergyId } = req.params;
    const { userId } = req.decoded;
    const { description } = req.body;

    const updated = await updateUserAllergyService(
      userId,
      allergyId,
      description
    );

    return res.status(200).json(updated);
  } catch (error: any) {
    return res
      .status(400)
      .json({ error: error.errors ? error.errors : error.message });
  }
};

export { updateUserAllergy };
