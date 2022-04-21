import { AppointmentRepository } from "../../repositories";

const AllAppointmentsService = async () => {
  const appointments = await new AppointmentRepository().findAll();
  return appointments;
};

export { AllAppointmentsService };
