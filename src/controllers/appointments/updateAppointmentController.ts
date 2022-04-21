import { Request, Response } from "express";

import { IAppointmentInterface } from "../../repositories/appointment/interfaceAppointmentRepository";
import { updateAppointmentService } from "../../services";

const updateAppointmentController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const data = req.validate as IAppointmentInterface;

    const appointment = await updateAppointmentService(id, data);

    return res
      .status(200)
      .json({ message: "Appointment updated successfully", appointment });
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

export { updateAppointmentController };
