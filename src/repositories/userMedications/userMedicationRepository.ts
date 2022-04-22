/* eslint-disable no-return-await */
import { Repository, getRepository } from "typeorm";

import { UserMedications } from "../../entities";
import {
  IUserMedicationsRepo,
  IUserMedicationSave,
} from "./userMedicationsInterface";

class UserMedicationsRepository implements IUserMedicationsRepo {
  private ormRepository: Repository<UserMedications>;

  constructor() {
    this.ormRepository = getRepository(UserMedications);
  }

  findAllUserMedications = async (id: string) =>
    await this.ormRepository.find({
      where: { user: { id } },
    });

  findUserMedicationById = async (id: string, userId: string) =>
    (await this.ormRepository.findOne({
      where: { id, user: { id: userId } },
    })) as UserMedications;

  saveUserMedication = async (medication: IUserMedicationSave) =>
    await this.ormRepository.save(medication);

  updateUserMedication = async (id: string, description: string) =>
    await this.ormRepository.update({ id }, { description });

  deleteUserAllergy = async (id: string) =>
    await this.ormRepository.delete({ id });
}

export { UserMedicationsRepository };
