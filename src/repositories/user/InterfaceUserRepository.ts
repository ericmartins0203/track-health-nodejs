interface IUserInterface {
  name: string;
  email: string;
  password: string;
  birthDate: Date;
  id?: string;
  gender?: string;
  sex?: string;
}

interface IUserRepo {
  createUser: (user: IUserInterface) => Promise<IUserInterface>;
  findOne: (email: string) => Promise<IUserInterface | undefined>;
  find: (email: string) => Promise<IUserInterface | undefined>;
  findById: (id: string) => Promise<IUserInterface | undefined>;
}

export { IUserInterface, IUserRepo };
