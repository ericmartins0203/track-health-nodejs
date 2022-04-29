import { DeleteResult, UpdateResult } from "typeorm";

import { Appointments } from "../../entities";
import { IDoctorCreateInterface } from "../doctor/interfaceDoctorRepository";
import { IUserInterface } from "../user/InterfaceUserRepository";

interface IAppointmentInterface {
  id?: string;
  date: Date;
  description: string;
  doctorId: string;
}

interface ICreateAppointmentInterface {
  date: Date;
  description: string;
  doctor: IDoctorCreateInterface;
  user?: IUserInterface;
}

interface IAppointmentRepo {
  findById: (id: string) => Promise<Appointments | undefined>;

  findAll: () => Promise<Appointments[] | undefined>;

  createAppointment: (
    appointment: ICreateAppointmentInterface
  ) => Promise<Appointments>;

  updateAppointment: (
    id: string,
    appointment: IAppointmentInterface
  ) => Promise<UpdateResult>;

  deleteAppointment: (id: string) => Promise<DeleteResult>;
}

export { IAppointmentInterface, ICreateAppointmentInterface, IAppointmentRepo };
