import { getRepository, Repository } from "typeorm";

import { Address } from "../../entities";
import { IAddressInterface, IAddressRepo } from "./interfaceAddressRepository";

class AddressRepository implements IAddressRepo {
  private ormRepository: Repository<Address>;

  constructor() {
    this.ormRepository = getRepository(Address);
  }

  findOne = async (id: string): Promise<IAddressInterface | undefined> => {
    const address = await this.ormRepository.findOne(id);
    return address;
  };

  findAll = async (): Promise<IAddressInterface[]> => {
    const addresses = await this.ormRepository.find();
    return addresses;
  };

  createAddress = async (address: IAddressInterface) => {
    return this.ormRepository.save(address);
  };

  updateAddress = async (
    address: IAddressInterface
  ): Promise<IAddressInterface> => {
    return this.ormRepository.save(address);
  };

  deleteAddress = async (id: string): Promise<void> => {
    await this.ormRepository.delete(id);
  };
}

export { AddressRepository };
