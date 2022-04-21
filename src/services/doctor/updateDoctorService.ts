import { DoctorRepository } from "../../repositories";
import { IDoctorInterface } from "../../repositories/doctor/interfaceDoctorRepository";

const updateDoctorService = async (id: string, data: IDoctorInterface) => {
  const doctorRepo = new DoctorRepository();
  const doctor = await doctorRepo.findById(id);
  if (!doctor) {
    throw new Error("Doctor not found");
  }
  // eslint-disable-next-line no-param-reassign
  data.id = id;
  const doctorUpdated = await doctorRepo.updateDoctor(data);
  return doctorUpdated;
};

export { updateDoctorService };
