import { DeleteResult, getRepository, Repository } from "typeorm";

import { Doctors } from "../../entities";
import {
  IDoctorCreateInterface,
  IDoctorInterface,
  IDoctorRepo,
} from "./interfaceDoctorRepository";

class DoctorRepository implements IDoctorRepo {
  private ormRepository: Repository<Doctors>;

  constructor() {
    this.ormRepository = getRepository(Doctors);
  }
  findById = async (id: string): Promise<Doctors | undefined> => {
    const doctor = await this.ormRepository.findOne(id);
    return doctor;
  };

  findAll = async () => {
    return this.ormRepository.find();
  };

  createDoctor = async (doctor: IDoctorCreateInterface) => {
    return this.ormRepository.save(doctor);
  };

  updateDoctor = async (doctor: IDoctorInterface): Promise<Doctors> => {
    return this.ormRepository.save(doctor);
  };

  deleteDoctor = async (id: string): Promise<DeleteResult> => {
    return this.ormRepository.delete(id);
  };
}

export { DoctorRepository };
