import { Request, Response } from "express";

import { IUserTablesShape } from "../../interfaces/shapes/interfacesShapes";
import { createUserAllergyService } from "../../services";

const createUserAllergy = async (req: Request, res: Response) => {
  try {
    const { id, name, description } = req.validate as IUserTablesShape;
    const { userId } = req.decoded;

    const created = await createUserAllergyService(
      { id, name, description },
      userId
    );

    return res.status(201).json(created);
  } catch (error: any) {
    return res
      .status(400)
      .json({ error: error.errors ? error.errors : error.detail });
  }
};

export { createUserAllergy };
