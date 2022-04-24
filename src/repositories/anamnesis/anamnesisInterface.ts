import { DeleteResult, UpdateResult } from "typeorm";

import { IAnamnesisShape } from "../../interfaces";

interface IAnamnesis {
  id?: string;
  diseases: boolean;
  allergy: boolean;
  continuousMedication: boolean;
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
  continuousMedication?: boolean;
  surgery?: boolean;
  alcoholic?: boolean;
  drugUser?: boolean;
  smoker?: boolean;
  physicalActivity?: boolean;
  diabetes?: boolean;
  hipertension?: boolean;
}

interface IAnamnesisRepo {
  findUserAnamnesis: (userId: string) => Promise<IAnamnesis>;
  saveAnamnesis: (anamnesis: IAnamnesisShape) => Promise<IAnamnesis>;
  updateAnamnesis: (
    id: string,
    updated: IAnamnesisUpdate
  ) => Promise<UpdateResult>;
  deleteAnamnesis: (id: string) => Promise<DeleteResult>;
}

export { IAnamnesis, IAnamnesisRepo, IAnamnesisUpdate };
