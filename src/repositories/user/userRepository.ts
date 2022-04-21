/* eslint-disable no-return-await */
import { getRepository, Repository } from "typeorm";

import { User } from "../../entities/user/User";
import { IUserInterface, IUserRepo } from "./InterfaceUserRepository";

class UserRepository implements IUserRepo {
  private ormRepository: Repository<User>;

  constructor() {
    this.ormRepository = getRepository(User);
  }

  createUser = async (user: IUserInterface) => this.ormRepository.save(user);

  findOne = async (email: string): Promise<IUserInterface | undefined> =>
    this.ormRepository
      .createQueryBuilder("user")
      .where("user.email = :email", { email })
      .leftJoinAndSelect("user.userAllergies", "userAllergies")
      .leftJoinAndSelect("userAllergies.allergy", "allergy")
      .leftJoinAndSelect("user.userDiseases", "userDiseases")
      .leftJoinAndSelect("userDiseases.disease", "diseases")
      .select([
        "user",
        "userDiseases",
        "diseases.name",
        "userAllergies",
        "allergy.name",
      ])
      .getOne();

  findById = async (id: string): Promise<IUserInterface | undefined> =>
    this.ormRepository
      .createQueryBuilder("user")
      .where("user.id = :id", { id })

      .getOne();

  updateUser = async (
    user: IUserInterface
  ): Promise<IUserInterface | undefined> => this.ormRepository.save(user);
}

export { UserRepository };
