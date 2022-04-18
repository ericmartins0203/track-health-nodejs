import { DeleteResult, getRepository, Repository, UpdateResult } from "typeorm";

import { Appointments } from "../../entities";
import {
  IAppointmentInterface,
  IAppointmentRepo,
} from "./interfaceAppointmentRepository";

class AppointmentRepository implements IAppointmentRepo {
  private ormRepository: Repository<Appointments>;

  constructor() {
    this.ormRepository = getRepository(Appointments);
  }

  findById = async (id: string): Promise<Appointments | undefined> => {
    const appointment = await this.ormRepository.findOne(id);
    return appointment;
  };

  findAll = async (): Promise<Appointments[] | undefined> => {
    return this.ormRepository.find();
  };

  createAppointment = async (
    appointment: IAppointmentInterface
  ): Promise<IAppointmentInterface> => {
    return this.ormRepository.save(appointment);
  };

  updateAppointment = (
    id: string,
    appointment: IAppointmentInterface
  ): Promise<UpdateResult> => {
    return this.ormRepository.update({ id }, appointment);
  };

  deleteAppointment = async (id: string): Promise<DeleteResult> => {
    return this.ormRepository.delete(id);
  };
}

export { AppointmentRepository };
