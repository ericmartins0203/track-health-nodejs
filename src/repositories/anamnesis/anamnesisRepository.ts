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
  private ormRepsitory: Repository<Anamnesis>;

  constructor() {
    this.ormRepsitory = getRepository(Anamnesis);
  }
  findUserAnamnesis = async (userId: string) =>
    (await this.ormRepsitory.findOne({
      where: { user: { id: userId } },
    })) as IAnamnesis;

  saveAnamnesis = async (anamnesis: IAnamnesisShape) =>
    await this.ormRepsitory.save(anamnesis);

  updateAnamnesis = async (id: string, updated: IAnamnesisUpdate) =>
    await this.ormRepsitory.update({ user: { id } }, updated);

  deleteAnamnesis = async (id: string) =>
    await this.ormRepsitory.delete({ id });
}

export { AnamnesisRepository };
