import { AddressRepository } from "../../repositories";

const allAddressService = async () => {
  const address = await new AddressRepository().findAll();
  return address;
};

export { allAddressService };
