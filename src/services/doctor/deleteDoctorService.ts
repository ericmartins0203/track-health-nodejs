import { DoctorRepository } from "../../repositories";

const deleteDoctorService = async (doctorId: string) => {
  const doctorRepo = new DoctorRepository();
  const doctor = await doctorRepo.findById(doctorId);
  if (!doctor) {
    throw new Error("Doctor not found");
  }
  await doctorRepo.deleteDoctor(doctorId);
  return doctor;
};

export { deleteDoctorService };
