import { DoctorRepository } from "../../repositories";

const allDoctorService = async () => {
  const doctorRepo = new DoctorRepository();
  const doctors = await doctorRepo.findAll();
  return doctors;
};

export { allDoctorService };
