import { Request, Response } from "express";

import { IAppointmentInterface } from "../../repositories/appointment/interfaceAppointmentRepository";
import { createAppointmentService } from "../../services/appointments/createAppointmentService";

const createAppointmentController = async (req: Request, res: Response) => {
  try {
    const { userId } = req.decoded;
    const { date, description, doctorId } =
      req.validate as IAppointmentInterface;

    const appointment = await createAppointmentService(
      userId,
      date,
      description,
      doctorId
    );

    delete appointment.user;

    return res.status(201).json({
      message: "Appointment created successfully",
      appointment,
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

export { createAppointmentController };
