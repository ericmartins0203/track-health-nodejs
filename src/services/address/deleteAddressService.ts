import { AddressRepository } from "../../repositories";

const deleteAddressService = async (id: string) => {
  const address = await new AddressRepository().findOne(id);

  if (!address) {
    throw new Error("Address not found");
  }

  await new AddressRepository().deleteAddress(id);
  return address;
};

export { deleteAddressService };
