import { Diseases, UserDiseases } from "../../entities";
import { IUserInterface } from "../user/InterfaceUserRepository";

interface IDiseaseNameInterface {
  id: string;
  name: string;
}

interface IDiseaseInterface {
  id: string;
  name: string;
  description?: string;
  medication?: string;
}

interface IUserDiseaseInterface {
  description?: string;
  medication?: string;
  user: IUserInterface;
  disease: Diseases;
}

interface IDiseaseRepo {
  findByName: (name: string) => Promise<IDiseaseInterface | undefined>;

  findAll: () => Promise<Diseases[] | undefined>;

  createDisease: (disease: string) => Promise<any>;
}

interface IUserDiseaseRepo {
  createUserDisease: (
    userDisease: IUserDiseaseInterface
  ) => Promise<UserDiseases>;
}

export {
  IDiseaseNameInterface,
  IDiseaseInterface,
  IUserDiseaseInterface,
  IDiseaseRepo,
  IUserDiseaseRepo,
};
