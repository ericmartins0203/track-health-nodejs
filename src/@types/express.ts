/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/no-namespace */

import { IDecoded } from "../interfaces";
import { IUserInterface } from "../repositories/user/InterfaceUserRepository";
import { IVaccineInterfaces } from "../repositories/vaccine/IVaccineInterfaces";

declare global {
  namespace Express {
    export interface Request {
      validate: IUserInterface | IVaccineInterfaces;
      decoded: IDecoded;
    }
  }
}
