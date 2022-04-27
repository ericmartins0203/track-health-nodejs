import {
  AppointmentRepository,
  DoctorRepository,
  UserRepository,
} from "../../repositories";

const createAppointmentService = async (
  userId: string,
  date: Date,
  description: string,
  doctorId: string
) => {
  const user = await new UserRepository().findById(userId);
  const doctor = await new DoctorRepository().findById(doctorId);

  if (!user) {
    throw new Error("User not found");
  }

  if (!doctor) {
    throw new Error("Doctor not found");
  }

  const appointment = new AppointmentRepository().createAppointment({
    date,
    description,
    doctor,
    user,
  });

  return appointment;
};

export { createAppointmentService };
