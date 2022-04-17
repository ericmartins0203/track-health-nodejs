/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/no-namespace */
import { IDecoded } from "../interfaces";
import { IDiseaseInterface } from "../repositories/disease/InterfaceDiseaseRepository";
import { IUserInterface } from "../repositories/user/InterfaceUserRepository";

declare global {
  namespace Express {
    export interface Request {
      validate: IUserInterface | IDiseaseInterface;
      decoded: IDecoded;
    }
  }
}
