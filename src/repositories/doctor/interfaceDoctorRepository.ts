import { IAddressInterface } from "../address/interfaceAddressRepository";

interface IDoctorInterface {
  id: string;
  name: string;
  type: string;
  email: string;
  phone: string;
  sex: string;
  address: IAddressInterface;
}

interface IDoctorRepo {
  findAll: () => Promise<IDoctorInterface[] | undefined>;

  createDoctor: (doctor: IDoctorInterface) => Promise<IDoctorInterface>;
}

export { IDoctorInterface, IDoctorRepo };
