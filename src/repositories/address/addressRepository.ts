import { getRepository, Repository } from "typeorm";

import { Address } from "../../entities";
import { IAddressInterface, IAddressRepo } from "./interfaceAddressRepository";

class AddressRepository implements IAddressRepo {
  private ormRepository: Repository<Address>;

  constructor() {
    this.ormRepository = getRepository(Address);
  }

  createAddress = async (address: IAddressInterface) => {
    return this.ormRepository.save(address);
  };
}

export { AddressRepository };
