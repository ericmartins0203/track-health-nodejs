/* eslint-disable no-return-await */
import { Repository, getRepository } from "typeorm";

import { UserAllergies } from "../../entities/allergy/UserAllergies";
import { IUserAllergiesRepo, IUserAllergy } from "./userAllergiesInterface";

class UserAllergiesRepository implements IUserAllergiesRepo {
  private ormRepository: Repository<UserAllergies>;

  constructor() {
    this.ormRepository = getRepository(UserAllergies);
  }

  findUserAllergies = async (id: string) =>
    await this.ormRepository.find({
      where: { user: { id } },
    });

  findUserallergyById = async (id: string) =>
    await this.ormRepository.find({
      where: { user: { id } },
    });
  saveUserAllergy = async (allergy: IUserAllergy) =>
    await this.ormRepository.save(allergy);
}

export { UserAllergiesRepository };
