import { Request, Response } from "express";

import { deleteAppointmentService } from "../../services";

const deleteAppointmentController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const appointment = await deleteAppointmentService(id);

    return res.status(200).json({
      message: "Appointment deleted successfully",
      appointment,
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

export { deleteAppointmentController };
