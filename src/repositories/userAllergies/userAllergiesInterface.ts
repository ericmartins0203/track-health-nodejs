import { UserAllergies } from "../../entities/allergy/UserAllergies";

interface IUserAllergies {
  id: string;
  userId: string;
  allergiesId: string;
  description?: string;
}

interface IUserDatas {
  id: string;
}

interface IAllergyDatas {
  id?: string;
  name: string;
}

interface IUserAllergy {
  user: IUserDatas;
  description?: string;
  allergy: IAllergyDatas;
}

interface IUserAllergiesRepo {
  findUserAllergies: (id: string) => Promise<UserAllergies[]>;
  findUserallergyById: (id: string) => Promise<UserAllergies[]>;
  saveUserAllergy: (allergy: IUserAllergy) => Promise<UserAllergies>;
}

export { IUserAllergies, IUserAllergiesRepo, IUserAllergy };
