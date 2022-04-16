import { Allergies } from "../../entities/Allergies";

interface IAllergy {
  id: string;
  name: string;
}

interface IAllergyRepo {
  findAllergies: () => Promise<IAllergy[]>;
  findById: (id: string) => Promise<Allergies>;
  findByName: (name: string) => Promise<Allergies>;
}

export { IAllergy, IAllergyRepo };
