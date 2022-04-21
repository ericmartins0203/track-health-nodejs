import { Request, Response } from "express";

import { Diseases } from "../../entities";
import { allDiseaseService } from "../../services";

const allDiseaseController = async (
  req: Request,
  res: Response
): Promise<Response<Diseases[]>> => {
  const diseases = await allDiseaseService();
  return res.status(200).json(diseases);
};

export default allDiseaseController;
