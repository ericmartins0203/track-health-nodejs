import { Request, Response } from "express";

import { Diseases } from "../../entities";
import getDiseaseService from "../../services/disease/allDiseaseController";

const getDiseaseController = async (
  req: Request,
  res: Response
): Promise<Response<Diseases[]>> => {
  const diseases = await getDiseaseService();
  return res.status(200).json(diseases);
};

export default getDiseaseController;
