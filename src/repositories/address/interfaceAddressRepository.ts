interface IAddressInterface {
  id: string;
  street: string;
  number: number;
  district: string;
  city: string;
}

interface IAddressRepo {
  createAddress: (address: IAddressInterface) => Promise<IAddressInterface>;
}

export { IAddressInterface, IAddressRepo };
