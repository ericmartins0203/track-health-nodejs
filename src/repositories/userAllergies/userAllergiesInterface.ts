import { UserAllergies } from "../../entities/UserAllergies";

interface IUserAllergies {
  id: string;
  userId: string;
  allergiesId: string;
  description?: string;
}

interface IUserAllergiesRepo {
  findUserAllergies: () => Promise<UserAllergies[]>;
  findUserallergyById: (id: string) => Promise<IUserAllergies>;
  saveUserAllergy: (allergy: UserAllergies) => Promise<UserAllergies>;
}

export { IUserAllergies, IUserAllergiesRepo };
