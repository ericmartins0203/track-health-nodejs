/* eslint-disable no-return-await */
import { getRepository, Repository } from "typeorm";

import { User } from "../../entities/user/User";
import { IUserInterface, IUserRepo } from "./InterfaceUserRepository";

class UserRepository implements IUserRepo {
  private ormRepository: Repository<User>;

  constructor() {
    this.ormRepository = getRepository(User);
  }

  createUser = async (user: IUserInterface) => this.ormRepository.save(user);

  findOne = async (email: string): Promise<IUserInterface | undefined> =>
    this.ormRepository
      .createQueryBuilder("user")
      .where("user.email = :email", { email })
      .leftJoinAndSelect("user.userAllergies", "userAllergies")
      .leftJoinAndSelect("userAllergies.allergy", "allergy")
      .leftJoinAndSelect("user.userDiseases", "userDiseases")
      .leftJoinAndSelect("userDiseases.disease", "diseases")
      .leftJoinAndSelect("user.appointment", "appointment")
      .leftJoinAndSelect("appointment.doctor", "doctor")
      .leftJoinAndSelect("doctor.address", "address")
      .leftJoinAndSelect("user.userMedications", "userMedications")
      .leftJoinAndSelect("userMedications.medication", "medication")
      .leftJoinAndSelect("user.anamnesis", "anamnesis")
      .select([
        "user",
        "userDiseases",
        "diseases.name",
        "userAllergies",
        "allergy.name",
        "appointment",
        "doctor",
        "address",
        "userMedications",
        "medication.name",
        "anamnesis",
      ])
      .getOne();
  findById = async (id: string): Promise<IUserInterface | undefined> =>
    this.ormRepository
      .createQueryBuilder("user")
      .addSelect("user.password")
      .where("user.id = :id", { id })
      .getOne();
  updateUser = async (
    user: IUserInterface
  ): Promise<IUserInterface | undefined> => this.ormRepository.save(user);
}

export { UserRepository };
