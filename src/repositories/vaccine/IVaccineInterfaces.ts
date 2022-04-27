import { DeleteResult, UpdateResult } from "typeorm";

import { UserVaccine, Vaccine } from "../../entities";

interface IVaccineInterfaces {
  name: string;
  date: string;
  description: string;
  dose: number;
  id: string;
}
interface IVaccineDTO {
  user: {
    id: string;
  };
  date: string;
  dose: number;
  description: string;
  vaccine: {
    name: string;
  };
}

interface IVaccineRepo {
  createVaccine: (vaccine: IVaccineDTO) => Promise<UserVaccine>;
  findVaccines: () => Promise<UserVaccine[]>;
  findUserVaccine: (id: string) => Promise<UserVaccine[]>;
  findUserVaccineById: (id: string, userId: string) => Promise<UserVaccine>;
  updateUserVaccine: (
    id: string,
    userData: Partial<Vaccine>
  ) => Promise<UpdateResult>;
  deleteUserVaccine: (id: string) => Promise<DeleteResult>;
}

export { IVaccineInterfaces, IVaccineRepo, IVaccineDTO };
