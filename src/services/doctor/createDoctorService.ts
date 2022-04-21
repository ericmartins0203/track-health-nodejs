import { AddressRepository, DoctorRepository } from "../../repositories";
import { IDoctorInterface } from "../../repositories/doctor/interfaceDoctorRepository";

const createDoctorService = async (
  name: string,
  type: string,
  email: string,
  phone: string,
  sex: string,
  addressId: string
) => {
  const address = await new AddressRepository().findOne(addressId);

  if (!address) {
    throw new Error("Address not found");
  }

  const doctor = await new DoctorRepository().createDoctor({
    name,
    type,
    email,
    phone,
    sex,
    address,
  });

  return doctor;
};

export { createDoctorService };
