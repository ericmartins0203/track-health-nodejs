/* eslint-disable no-return-await */
import { Repository, getRepository } from "typeorm";

import { UserAllergies } from "../../entities/UserAllergies";
import { IUserAllergies, IUserAllergiesRepo } from "./userAllergiesInterface";

class UserAllergiesRepository implements IUserAllergiesRepo {
  private ormRepository: Repository<UserAllergies>;

  constructor() {
    this.ormRepository = getRepository(UserAllergies);
  }

  findUserAllergies = async () => await this.ormRepository.find();

  findUserallergyById: (id: string) => Promise<IUserAllergies>;
  saveUserAllergy = async (allergy: UserAllergies) =>
    await this.ormRepository.save(allergy);
}

export { UserAllergiesRepository };
