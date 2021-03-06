/* eslint-disable no-return-await */
import { Repository, getRepository } from "typeorm";

import { UserAllergies } from "../../entities";
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

  findUserAllergyById = async (id: string, userId: string) =>
    (await this.ormRepository.findOne({
      where: { id, user: { id: userId } },
    })) as UserAllergies;

  saveUserAllergy = async (allergy: IUserAllergy) =>
    await this.ormRepository.save(allergy);

  updateUserAllergy = async (id: string, description: string) => {
    return await this.ormRepository.update({ id }, { description });
  };

  deleteUserAllergy = async (id: string) => {
    return await this.ormRepository.delete({ id });
  };
}

export { UserAllergiesRepository };
