/* eslint-disable no-return-await */
import { Repository, getRepository } from "typeorm";

import { Anamnesis } from "../../entities";
import { IAnamnesisShape } from "../../interfaces";
import {
  IAnamnesis,
  IAnamnesisRepo,
  IAnamnesisUpdate,
} from "./anamnesisInterface";

class AnamnesisRepository implements IAnamnesisRepo {
  private ormRepository: Repository<Anamnesis>;

  constructor() {
    this.ormRepository = getRepository(Anamnesis);
  }
  findUserAnamnesis = async (userId: string) =>
    (await this.ormRepository.findOne({
      where: { user: { id: userId } },
    })) as IAnamnesis;

  saveAnamnesis = async (anamnesis: IAnamnesisShape) =>
    await this.ormRepository.save(anamnesis);

  updateAnamnesis = async (id: string, updated: IAnamnesisUpdate) =>
    await this.ormRepository.update({ user: { id } }, updated);

  deleteAnamnesis = async (id: string) =>
    await this.ormRepository.delete({ user: { id } });
}

export { AnamnesisRepository };
