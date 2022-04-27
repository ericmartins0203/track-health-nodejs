import { AppointmentRepository } from "../../repositories";
import { IAppointmentInterface } from "../../repositories/appointment/interfaceAppointmentRepository";

const updateAppointmentService = async (
  id: string,
  data: IAppointmentInterface
) => {
  const appointment = await new AppointmentRepository().findById(id);

  if (!appointment) {
    throw new Error("Appointment not found");
  }

  await new AppointmentRepository().updateAppointment(id, data);

  const appointmentUpdated = await new AppointmentRepository().findById(id);

  return appointmentUpdated;
};

export { updateAppointmentService };
