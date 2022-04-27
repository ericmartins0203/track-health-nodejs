import { getRepository, Repository } from "typeorm";

import { UserVaccine, Vaccine } from "../../entities";
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

  findUserVaccineById = async (id: string, userId: string) =>
    (await this.ormRepository.findOne({
      where: { id, user: { id: userId } },
    })) as UserVaccine;
  updateUserVaccine = async (id: string, userData: Partial<Vaccine>) => {
    return this.ormRepository.update({ id }, { ...userData });
  };
  deleteUserVaccine = async (id: string) => {
    return this.ormRepository.delete({ id });
  };
}

export { VaccineRepository };
