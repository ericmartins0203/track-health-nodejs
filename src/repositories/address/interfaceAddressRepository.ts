interface IAddressInterface {
  id?: string;
  street: string;
  number: number;
  district: string;
  city: string;
  complement: string;
}

interface IAddressRepo {
  findOne: (id: string) => Promise<IAddressInterface | undefined>;

  findAll: () => Promise<IAddressInterface[]>;

  createAddress: (address: IAddressInterface) => Promise<IAddressInterface>;

  updateAddress: (address: IAddressInterface) => Promise<IAddressInterface>;

  deleteAddress: (id: string) => Promise<void>;
}

export { IAddressInterface, IAddressRepo };
