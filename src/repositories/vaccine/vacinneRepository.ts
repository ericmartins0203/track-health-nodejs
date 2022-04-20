import { getRepository, Repository } from "typeorm";

import { UserVaccine } from "../../entities";
import {
  IVaccineDTO,
  IVaccineInterfaces,
  IVaccineRepo,
} from "./IVaccineInterfaces";

class VaccineRepository implements IVaccineRepo {
  private ormRepository: Repository<UserVaccine>;

  constructor() {
    this.ormRepository = getRepository(UserVaccine);
  }

  createVaccine = async (vaccine: IVaccineDTO): Promise<UserVaccine> =>
    this.ormRepository.save(vaccine);
  findVaccines = () => this.ormRepository.find();
  // findOne = (name: string) => this.ormRepository.find(name);
  // findById = (id: string) => this.ormRepository.find(id);
}

export { VaccineRepository };
