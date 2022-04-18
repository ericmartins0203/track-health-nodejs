import { Diseases } from "../../entities/disease/Disease";

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

interface IUserData {
  id: string;
}

interface IDiseaseData {
  id: string;
  name: string;
}

interface IUserDiseaseInterface {
  description?: string;
  medication?: string;
  user: IUserData;
  disease: IDiseaseData;
}

interface IUserDiseaseUpdateInterface {
  description?: string;
  medication?: string;
}

interface IDiseaseRepo {
  findByName: (name: string) => Promise<IDiseaseInterface | undefined>;

  findById: (id: string) => Promise<IDiseaseInterface | undefined>;

  findAll: () => Promise<Diseases[] | undefined>;

  createDisease: (disease: string) => Promise<any>;

  deleteDisease: (id: string) => Promise<any>;
}

interface IUserDiseaseRepo {
  getUserDisease: (id: string) => Promise<any | undefined>;

  createUserDisease: (
    userDisease: IUserDiseaseInterface
  ) => Promise<IUserDiseaseInterface>;

  updateUserDisease: (
    id: string,
    userDisease: IUserDiseaseUpdateInterface
  ) => Promise<IUserDiseaseInterface>;

  deleteUserDisease: (id: string) => Promise<any>;
}

export {
  IDiseaseNameInterface,
  IDiseaseInterface,
  IUserDiseaseInterface,
  IUserDiseaseUpdateInterface,
  IDiseaseRepo,
  IUserDiseaseRepo,
};
