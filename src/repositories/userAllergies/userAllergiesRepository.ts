/* eslint-disable no-return-await */
import { Repository, getRepository } from "typeorm";

import { UserAllergies } from "../../entities/allergy/UserAllergies";
import {
  IUserAllergies,
  IUserAllergiesRepo,
  IUserAllergy,
} from "./userAllergiesInterface";

class UserAllergiesRepository implements IUserAllergiesRepo {
  private ormRepository: Repository<UserAllergies>;

  constructor() {
    this.ormRepository = getRepository(UserAllergies);
  }

  findUserAllergies = async () => await this.ormRepository.find();

  findUserallergyById: (id: string) => Promise<IUserAllergies>;
  saveUserAllergy = async (allergy: IUserAllergy) =>
    await this.ormRepository.save(allergy);
}

export { UserAllergiesRepository };
