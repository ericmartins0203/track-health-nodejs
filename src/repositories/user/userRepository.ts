import { getRepository, Repository } from "typeorm";

import { User } from "../../entities/User";
import { IUserInterface, IUserRepo } from "./userRepositoryInterface";

class UserRepository implements IUserRepo {
  private ormRepository: Repository<User>;

  constructor() {
    this.ormRepository = getRepository(User);
  }

  createUser = async (user: IUserInterface) => this.ormRepository.save(user);
}

export { UserRepository };
