import { DeleteResult } from "typeorm";

import { Doctors } from "../../entities";
import { IAddressInterface } from "../address/interfaceAddressRepository";

interface IDoctorCreateInterface {
  id?: string;
  name: string;
  type: string;
  email: string;
  phone?: string;
  sex?: string;
  address: IAddressInterface;
}

interface IDoctorInterface {
  id?: string;
  name: string;
  type: string;
  email: string;
  phone: string;
  sex: string;
  addressId: string;
}

interface IDoctorRepo {
  findAll: () => Promise<Doctors[] | undefined>;

  findById: (id: string) => Promise<Doctors | undefined>;

  createDoctor: (doctor: IDoctorCreateInterface) => Promise<Doctors>;

  updateDoctor: (doctor: IDoctorInterface) => Promise<Doctors>;

  deleteDoctor: (id: string) => Promise<DeleteResult>;
}

export { IDoctorInterface, IDoctorRepo, IDoctorCreateInterface };
