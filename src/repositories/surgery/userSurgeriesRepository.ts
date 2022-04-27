import { getRepository, Repository } from "typeorm";

import { Surgery, UserSurgery } from "../../entities";
import { ISurgeryDTO, IUserSurgeryRepo } from "./userSurgeriesInterface";

class SurgeryRepository implements IUserSurgeryRepo {
  private ormRepository: Repository<UserSurgery>;

  constructor() {
    this.ormRepository = getRepository(UserSurgery);
  }

  createSurgery = async (Surgery: ISurgeryDTO): Promise<UserSurgery> =>
    this.ormRepository.save(Surgery);
  findSurgerys = () => this.ormRepository.find();
  findUserSurgery = async (id: string) =>
    this.ormRepository.find({
      where: { user: { id } },
    });

  findUserSurgeryById = async (id: string, userId: string) =>
    (await this.ormRepository.findOne({
      where: { id, user: { id: userId } },
    })) as UserSurgery;
  updateUserSurgery = async (id: string, userData: Partial<Surgery>) => {
    return this.ormRepository.update({ id }, { ...userData });
  };
  deleteUserSurgery = async (id: string) => {
    return this.ormRepository.delete({ id });
  };
}

export { SurgeryRepository };
