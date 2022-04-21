/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/no-namespace */

import { IDecoded, IUserAllergiesShape } from "../interfaces";
import { IDiseaseInterface } from "../repositories/disease/InterfaceDiseaseRepository";
import { IUserInterface } from "../repositories/user/InterfaceUserRepository";
import { IVaccineInterfaces } from "../repositories/vaccine/IVaccineInterfaces";

declare global {
  namespace Express {
    export interface Request {
      validate:
        | IUserInterface
        | IDiseaseInterface
        | IUserAllergiesShape
        | IVaccineInterfaces;
      decoded: IDecoded;
    }
  }
}
