import { getRepository, Repository } from "typeorm";

import { UserDiseases } from "../../entities/disease/UserDisease";
import {
  IUserDiseaseInterface,
  IUserDiseaseRepo,
} from "./InterfaceDiseaseRepository";

class UserDiseaseRepository implements IUserDiseaseRepo {
  private ormRepository: Repository<UserDiseases>;

  constructor() {
    this.ormRepository = getRepository(UserDiseases);
  }

  createUserDisease = async (userDisease: IUserDiseaseInterface) =>
    this.ormRepository.save(userDisease);
}

export { UserDiseaseRepository };
