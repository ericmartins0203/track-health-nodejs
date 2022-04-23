/* eslint-disable no-return-await */
import { Repository, getRepository, DeleteResult, UpdateResult } from "typeorm";

import { Anamnesis } from "../../entities";
import {
  IAnamnesis,
  IAnamnesisRepo,
  IAnamnesisUpdate,
} from "./anamnesisInterface";

class AnamnesisRepository implements IAnamnesisRepo {
  private ormRepsitory: Repository<Anamnesis>;

  constructor() {
    this.ormRepsitory = getRepository(Anamnesis);
  }
  findUserAnamnesis = async (id: string, userId: string) =>
    (await this.ormRepsitory.findOne({
      where: { id, user: { id: userId } },
    })) as IAnamnesis;

  saveAnamnesis = async (anamnesis: IAnamnesis) =>
    await this.ormRepsitory.save(anamnesis);

  updateAnamnesis = async (id: string, updated: IAnamnesisUpdate) =>
    await this.ormRepsitory.update({ id }, updated);

  deleteAnamnesis = async (id: string) =>
    await this.ormRepsitory.delete({ id });
}

export { AnamnesisRepository };
