import { Repository, getRepository } from "typeorm";

import { Allergies } from "../../entities/Allergies";
import { IAllergyRepo } from "./interfaceAllergiesRepositories";

class AllergyRepository implements IAllergyRepo {
  private ormRepository: Repository<Allergies>;

  constructor() {
    this.ormRepository = getRepository(Allergies);
  }

  // eslint-disable-next-line no-return-await
  findAllergies = async () => await this.ormRepository.find();
  findById = async (id: string) =>
    (await this.ormRepository.findOne({ id })) as Allergies;
  findByName = async (name: string) =>
    (await this.ormRepository.findOne({ name })) as Allergies;
}

export { AllergyRepository };
