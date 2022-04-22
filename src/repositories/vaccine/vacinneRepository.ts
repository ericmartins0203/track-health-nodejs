import { getRepository, Repository } from "typeorm";

import { UserVaccine } from "../../entities";
import { IVaccineDTO, IVaccineRepo } from "./IVaccineInterfaces";

class VaccineRepository implements IVaccineRepo {
  private ormRepository: Repository<UserVaccine>;

  constructor() {
    this.ormRepository = getRepository(UserVaccine);
  }

  createVaccine = async (vaccine: IVaccineDTO): Promise<UserVaccine> =>
    this.ormRepository.save(vaccine);
  findVaccines = () => this.ormRepository.find();
  // findOne = (name: string) => this.ormRepository.find(name);
  findUserVaccine = async (id: string) =>
    this.ormRepository.find({
      where: { user: { id } },
    });
}

export { VaccineRepository };
