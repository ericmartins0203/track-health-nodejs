import { AddressRepository } from "../../repositories";
import { IAddressInterface } from "../../repositories/address/interfaceAddressRepository";

const updateAddressService = async (id: string, data: IAddressInterface) => {
  const address = await new AddressRepository().findOne(id);

  if (!address) {
    throw new Error("Address not found");
  }
  // eslint-disable-next-line no-param-reassign
  data.id = id;

  const addressUpdated = await new AddressRepository().updateAddress(data);
  return addressUpdated;
};

export { updateAddressService };
