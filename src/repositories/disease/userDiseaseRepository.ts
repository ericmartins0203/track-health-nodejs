import { getRepository, Repository } from "typeorm";

import { UserDiseases } from "../../entities";
import {
  IUserDiseaseInterface,
  IUserDiseaseRepo,
  IUserDiseaseUpdateInterface,
} from "./InterfaceDiseaseRepository";

class UserDiseaseRepository implements IUserDiseaseRepo {
  private ormRepository: Repository<UserDiseases>;

  constructor() {
    this.ormRepository = getRepository(UserDiseases);
  }

  getUserDisease = async (id: string) => {
    return this.ormRepository
      .createQueryBuilder("userDisease")
      .leftJoinAndSelect("userDisease.user", "user")
      .leftJoinAndSelect("userDisease.disease", "disease")
      .where("user.id = :id", { id })
      .select(["userDisease", "disease"])
      .getMany();
  };

  createUserDisease = async (userDisease: IUserDiseaseInterface) => {
    return this.ormRepository.save(userDisease);
  };

  updateUserDisease = async (
    id: string,
    userDisease: IUserDiseaseUpdateInterface
  ) => {
    return this.ormRepository.save({ ...userDisease, id });
  };

  deleteUserDisease = async (id: string) => {
    return this.ormRepository.delete(id);
  };
}

export { UserDiseaseRepository };
