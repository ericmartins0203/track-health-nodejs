import { Request, Response } from "express";

import { getUserVaccinesServices } from "../../services/vaccine/getUserVaccineServices";

const getUserVaccineController = async (req: Request, res: Response) => {
  try {
    const { userId } = req.decoded;
    const vaccines = await getUserVaccinesServices(userId);

    return res.status(200).json(vaccines);
  } catch (error: any) {
    return res
      .status(400)
      .json({ error: error.errors ? error.errors : error.detail });
  }
};

export { getUserVaccineController };
