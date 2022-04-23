/* eslint-disable no-return-await */
import { Repository, getRepository } from "typeorm";

import { Allergies } from "../../entities";
import { IAllergyRepo } from "./interfaceAllergiesRepositories";

class AllergyRepository implements IAllergyRepo {
  private ormRepository: Repository<Allergies>;

  constructor() {
    this.ormRepository = getRepository(Allergies);
  }

  findAllergies = async () => await this.ormRepository.find();

  findById = async (id: string) =>
    (await this.ormRepository.findOne({ id })) as Allergies;

  findByName = async (name: string) =>
    (await this.ormRepository.findOne({ name })) as Allergies;
}

export { AllergyRepository };
