import { getRepository, Repository } from "typeorm";

import { Diseases } from "../../entities/disease/Disease";
import { IDiseaseInterface, IDiseaseRepo } from "./InterfaceDiseaseRepository";

class DiseaseRepository implements IDiseaseRepo {
  private ormRepository: Repository<Diseases>;

  constructor() {
    this.ormRepository = getRepository(Diseases);
  }

  findByName = async (name: string): Promise<IDiseaseInterface | undefined> => {
    const disease = await this.ormRepository.findOne({
      where: { name },
    });
    return disease;
  };

  findById = async (id: string): Promise<IDiseaseInterface | undefined> => {
    const disease = await this.ormRepository.findOne(id);
    return disease;
  };

  findAll = async () => {
    return this.ormRepository.find();
  };

  createDisease = async (disease: string) => {
    return this.ormRepository.save({ name: disease });
  };

  deleteDisease = async (id: string) => {
    return this.ormRepository.delete(id);
  };
}

export { DiseaseRepository };
