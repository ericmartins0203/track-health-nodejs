import { Request, Response } from "express";

import { IDoctorInterface } from "../../repositories/doctor/interfaceDoctorRepository";
import { updateDoctorService } from "../../services";

const updateDoctorController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const data = req.validate as IDoctorInterface;
    const doctor = await updateDoctorService(id, data);
    return res.status(200).json({
      message: "Successfully updated doctor",
      data: doctor,
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

export { updateDoctorController };
