import { DeleteResult } from "typeorm";

interface IProfileImage {
  id?: string;
  name: string;
  url: string;
}

interface IProfileImageRepo {
  findProfileImage: (userId: string) => Promise<IProfileImage>;
  saveProfileImage: (profileImage: IProfileImage) => Promise<IProfileImage>;
  deleteProfileImage: (userId: string) => Promise<DeleteResult>;
}

export { IProfileImageRepo, IProfileImage };
