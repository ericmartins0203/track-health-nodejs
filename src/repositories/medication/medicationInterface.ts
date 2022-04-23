import { Medications } from "../../entities";

interface IMedication {
  id: string;
  name: string;
}

interface IMedicationRepo {
  findMedications: () => Promise<Medications[]>;
}

export { IMedicationRepo, IMedication };
