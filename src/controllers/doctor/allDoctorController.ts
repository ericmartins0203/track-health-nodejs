import { Request, Response } from "express";

import { allDoctorService } from "../../services";

const allDoctorController = async (req: Request, res: Response) => {
  try {
    const doctors = await allDoctorService();
    return res.status(200).json({
      message: "Successfully retrieved all doctors",
      data: doctors,
    });
  } catch (error) {
    if (error instanceof TypeError) {
      return res.status(400).json({
        message: error.message,
      });
    }
    return res.status(500).json({
      message: "Unexpected error",
    });
  }
};

export { allDoctorController };
