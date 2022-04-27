/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/no-namespace */

import {
  IAnamnesisShape,
  IAnamnesisShapeUpdate,
  IDecoded,
  IUserTablesShape,
} from "../interfaces";
import { IAddressInterface } from "../repositories/address/interfaceAddressRepository";
import { IAppointmentInterface } from "../repositories/appointment/interfaceAppointmentRepository";
import { IDiseaseInterface } from "../repositories/disease/InterfaceDiseaseRepository";
import { IDoctorInterface } from "../repositories/doctor/interfaceDoctorRepository";
import { IUserInterface } from "../repositories/user/InterfaceUserRepository";
import { IUserAllergies } from "../repositories/userAllergies/userAllergiesInterface";
import { IVaccineInterfaces } from "../repositories/vaccine/IVaccineInterfaces";

declare global {
  namespace Express {
    export interface Request {
      validate:
        | IUserInterface
        | IDiseaseInterface
        | IVaccineInterfaces
        | IUserAllergies
        | IDoctorInterface
        | IAddressInterface
        | IAppointmentInterface
        | IUserTablesShape
        | IAnamnesisShape
        | IAnamnesisShapeUpdate
        | IUserTablesShape;
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
