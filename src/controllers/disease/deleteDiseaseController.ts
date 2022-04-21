import { Request, Response } from "express";

import { deleteDiseaseService } from "../../services";

const deleteDiseaseController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const disease = await deleteDiseaseService(id);
    return res.status(200).json({ message: `${disease?.name} deleted` });
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({
        message: error.message,
      });
    }
    return res.status(500).json({ Error: "Unexpected error." });
  }
};

export default deleteDiseaseController;
