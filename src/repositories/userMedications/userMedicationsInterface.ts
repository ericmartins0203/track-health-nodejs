import { DeleteResult, UpdateResult } from "typeorm";

import { UserMedications } from "../../entities";

interface IUserMedications {
  id: string;
  userId: string;
  medicationId: string;
  description?: string;
}

interface IUserId {
  id: string;
}

interface IMedicationFields {
  id?: string;
  name: string;
}

interface IUserMedicationSave {
  user: IUserId;
  description?: string;
  medication: IMedicationFields;
}

interface IUserMedicationsRepo {
  findAllUserMedications: (id: string) => Promise<UserMedications[]>;
  findUserMedicationById: (
    id: string,
    userId: string
  ) => Promise<UserMedications>;
  saveUserMedication: (
    medication: IUserMedicationSave
  ) => Promise<UserMedications>;
  updateUserMedication: (
    id: string,
    description: string
  ) => Promise<UpdateResult>;
  deleteUserAllergy: (id: string) => Promise<DeleteResult>;
}

export { IUserMedicationsRepo, IUserMedications, IUserMedicationSave };
