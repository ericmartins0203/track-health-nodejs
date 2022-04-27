import { AddressRepository } from "../../repositories";
import { IAddressInterface } from "../../repositories/address/interfaceAddressRepository";

const createAddressService = async (
  data: IAddressInterface
): Promise<IAddressInterface> => {
  const address = await new AddressRepository().createAddress(data);

  return address;
};

export { createAddressService };
