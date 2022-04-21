/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/no-namespace */

import { IDecoded, IUserAllergiesShape } from "../interfaces";
import { IAddressInterface } from "../repositories/address/interfaceAddressRepository";
import { ICreateAppointmentInterface } from "../repositories/appointment/interfaceAppointmentRepository";
import { IDiseaseInterface } from "../repositories/disease/InterfaceDiseaseRepository";
import { ICreateDoctorInterface } from "../repositories/doctor/interfaceDoctorRepository";
import { IUserInterface } from "../repositories/user/InterfaceUserRepository";

declare global {
  namespace Express {
    export interface Request {
      validate:
        | IUserInterface
        | IDiseaseInterface
        | IUserAllergiesShape
        | ICreateAppointmentInterface
        | ICreateDoctorInterface
        | IAddressInterface;
      decoded: IDecoded;
    }
  }
}
