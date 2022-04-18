import { DeleteResult, UpdateResult } from "typeorm";

import { IDoctorInterface } from "../doctor/interfaceDoctorRepository";

interface IAppointmentInterface {
  id: string;
  date: Date;
  description: string;
  doctor: IDoctorInterface;
}

interface IAppointmentRepo {
  findById: (id: string) => Promise<IAppointmentInterface | undefined>;

  findAll: () => Promise<IAppointmentInterface[] | undefined>;

  createAppointment: (
    appointment: IAppointmentInterface
  ) => Promise<IAppointmentInterface>;

  updateAppointment: (
    id: string,
    appointment: IAppointmentInterface
  ) => Promise<UpdateResult>;

  deleteAppointment: (id: string) => Promise<DeleteResult>;
}

export { IAppointmentInterface, IAppointmentRepo };
