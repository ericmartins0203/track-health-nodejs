import { getRepository, Repository } from "typeorm";

import { Doctors } from "../../entities";
import { IDoctorInterface, IDoctorRepo } from "./interfaceDoctorRepository";

class DoctorRepository implements IDoctorRepo {
  private ormRepository: Repository<Doctors>;

  constructor() {
    this.ormRepository = getRepository(Doctors);
  }

  findAll = async () => {
    return this.ormRepository.find();
  };

  createDoctor = async (doctor: IDoctorInterface) => {
    return this.ormRepository.save(doctor);
  };
}

export { DoctorRepository };
