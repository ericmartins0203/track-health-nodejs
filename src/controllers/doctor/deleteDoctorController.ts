import { Request, Response } from "express";

import { deleteDoctorService } from "../../services";

const deleteDoctorController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const doctor = await deleteDoctorService(id);

    return res.status(200).json({
      message: "Successfully deleted doctor",
      doctor,
    });
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({
        message: error.message,
      });
    }
    return res.status(500).json({
      message: "Unexpected error",
    });
  }
};

export { deleteDoctorController };
