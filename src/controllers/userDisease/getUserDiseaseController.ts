import { Request, Response } from "express";

import { Diseases } from "../../entities";
import { getUserDiseaseService } from "../../services";

const getUserDiseaseController = async (
  req: Request,
  res: Response
): Promise<Response<Diseases[]>> => {
  const { userId } = req.decoded;
  const diseases = await getUserDiseaseService(userId);
  return res.status(200).json(diseases);
};

export default getUserDiseaseController;
