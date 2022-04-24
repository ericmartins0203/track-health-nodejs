/* eslint-disable no-return-await */
import { Repository, getRepository } from "typeorm";

import { ProfileImage } from "../../entities";
import { IProfileImage, IProfileImageRepo } from "./profileImageInterface";

class ProfileImageRepository implements IProfileImageRepo {
  private ormRepository: Repository<ProfileImage>;

  constructor() {
    this.ormRepository = getRepository(ProfileImage);
  }

  findProfileImage = async (userId: string) =>
    (await this.ormRepository.findOne({
      where: { user: { id: userId } },
    })) as IProfileImage;

  saveProfileImage = async (profileImage: IProfileImage) =>
    await this.ormRepository.save(profileImage);

  deleteProfileImage = async (userId: string) =>
    await this.ormRepository.delete({ user: { id: userId } });
}

export { ProfileImageRepository };
