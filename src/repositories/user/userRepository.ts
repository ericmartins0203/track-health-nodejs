import { getRepository, Repository } from "typeorm";

import { User } from "../../entities/User";
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
      .addSelect("user.password")
      .where("user.email = :email", { email })
      .leftJoinAndSelect("user.userAllergies", "userAllergies")
      .getOne();
}

export { UserRepository };
