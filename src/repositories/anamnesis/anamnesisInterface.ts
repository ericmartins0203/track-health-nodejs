import { DeleteResult, UpdateResult } from "typeorm";
import { Anamnesis } from "../../entities";

interface IAnamnesis {
  id?: string;
  diseases: boolean;
  allergy: boolean;
  continuousMedications: boolean;
  surgery: boolean;
  alcoholic: boolean;
  drugUser: boolean;
  smoker: boolean;
  physicalActivity: boolean;
  diabetes: boolean;
  hipertension: boolean;
}

interface IAnamnesisUpdate {
  diseases?: boolean;
  allergy?: boolean;
  continuousMedications?: boolean;
  surgery?: boolean;
  alcoholic?: boolean;
  drugUser?: boolean;
  smoker?: boolean;
  physicalActivity?: boolean;
  diabetes?: boolean;
  hipertension?: boolean;
}

interface IAnamnesisRepo {
  findUserAnamnesis: (id: string, userId: string) => Promise<IAnamnesis>;
  saveAnamnesis: (anamnesis: IAnamnesis) => Promise<IAnamnesis>;
  updateAnamnesis: (
    id: string,
    updated: IAnamnesisUpdate
  ) => Promise<UpdateResult>;
  deleteAnamnesis: (id: string) => Promise<DeleteResult>;
}

export { IAnamnesis, IAnamnesisRepo, IAnamnesisUpdate };
