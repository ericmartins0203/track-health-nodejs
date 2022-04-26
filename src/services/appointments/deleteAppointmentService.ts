import { AppointmentRepository } from "../../repositories";

const deleteAppointmentService = async (id: string) => {
  const appointment = await new AppointmentRepository().findById(id);

  if (!appointment) {
    throw new Error("Appointment not found");
  }

  await new AppointmentRepository().deleteAppointment(id);

  return appointment;
};

export { deleteAppointmentService };
