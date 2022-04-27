/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/no-namespace */

import {
  IAnamnesisShape,
  IAnamnesisShapeUpdate,
  IDecoded,
  IUserTablesShape,
} from "../interfaces";
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
        | IVaccineInterfaces
        | IUserTablesShape
        | IAnamnesisShape
        | IAnamnesisShapeUpdate;
      decoded: IDecoded;
    }

    namespace Multer {
      export interface File {
        key: string;
        location: string;
      }
    }
  }
}
