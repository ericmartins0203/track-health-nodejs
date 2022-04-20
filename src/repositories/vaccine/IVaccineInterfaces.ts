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
  // findOne: (name: string) => Promise<IVaccineInterfaces | undefined>;
  // findById: (id: string) => Promise<IVaccineInterfaces | undefined>;
}

export { IVaccineInterfaces, IVaccineRepo, IVaccineDTO };
