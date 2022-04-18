import { Request, Response } from "express";

import { getUserAllergiesServices } from "../../services";

const getUserAllergies = async (req: Request, res: Response) => {
  try {
    const { userId } = req.decoded;
    const allergies = await getUserAllergiesServices(userId);

    return res.status(200).json(allergies);
  } catch (error: any) {
    return res
      .status(400)
      .json({ error: error.errors ? error.errors : error.detail });
  }
};

export { getUserAllergies };
