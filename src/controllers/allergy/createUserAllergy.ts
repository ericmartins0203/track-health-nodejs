import { Request, Response } from "express";

import { IUserAllergiesShape } from "../../interfaces";
import { createUserAllerService } from "../../services";

const createUserAllergy = async (req: Request, res: Response) => {
  try {
    const { id, name, description } = req.validate as IUserAllergiesShape;
    const { userId } = req.decoded;

    const created = await createUserAllerService(
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
