import { DeleteResult, UpdateResult } from "typeorm";

import { Surgery, UserSurgery } from "../../entities";

interface ISurgeryInterfaces {
  name: string;
  date: string;
  description: string;
  id: string;
}
interface ISurgeryDTO {
  user: {
    id: string;
  };
  date: string;
  description: string;
  surgery: {
    name: string;
  };
}

interface IUserSurgeryRepo {
  createSurgery: (surgery: ISurgeryDTO) => Promise<UserSurgery>;
  findSurgerys: () => Promise<UserSurgery[]>;
  findUserSurgery: (id: string) => Promise<UserSurgery[]>;
  findUserSurgeryById: (id: string, userId: string) => Promise<UserSurgery>;
  updateUserSurgery: (
    id: string,
    userData: Partial<Surgery>
  ) => Promise<UpdateResult>;
  deleteUserSurgery: (id: string) => Promise<DeleteResult>;
}

export { ISurgeryInterfaces, IUserSurgeryRepo, ISurgeryDTO };
