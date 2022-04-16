import { Request, Response } from "express";

import { createUserAllerService } from "../../services";

const createUserAllergy = async (req: Request, res: Response) => {
  try {
    const created = await createUserAllerService(req.body);

    return res.status(201).json(created);
  } catch (error: any) {
    return res.status(400).json({ error });
  }
};

export { createUserAllergy };
