import { Request, Response } from "express";

import { AllAppointmentsService } from "../../services";

const allAppointmentsController = async (req: Request, res: Response) => {
  try {
    const appointments = await AllAppointmentsService();

    return res.status(200).json({
      message: "All appointments",
      appointments,
    });
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({
        message: error.message,
      });
    }
    return res.status(500).json({
      error: "Unexpected error.",
    });
  }
};

export { allAppointmentsController };
