/* eslint-disable no-return-await */
import { Repository, getRepository } from "typeorm";

import { Medications } from "../../entities";
import { IMedicationRepo } from "./medicationInterface";

class MedicationRepository implements IMedicationRepo {
  private ormRepository: Repository<Medications>;

  constructor() {
    this.ormRepository = getRepository(Medications);
  }

  findMedications = async () => await this.ormRepository.find();
}

export { MedicationRepository };
