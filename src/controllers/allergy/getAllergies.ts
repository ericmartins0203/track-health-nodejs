import { Request, Response } from "express";

import { getAllergiesServices } from "../../services/allergy/getAllergiesService";

const getAllergies = async (_: Request, res: Response) => {
  const allergies = await getAllergiesServices();

  return res.status(200).json(allergies);
};

export { getAllergies };
