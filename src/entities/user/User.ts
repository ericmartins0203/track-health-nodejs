import {
  Column,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";

import { UserAllergies } from "../allergy/UserAllergies";
import { UserDiseases } from "../disease/UserDisease";
import { UserMedications } from "../medication/UserMedication";
import { UserVaccine } from "../vaccine/userVaccine";
import { Anamnesis } from "./Anamnesis";
import { ProfileImage } from "./ProfileImage";

@Entity("users")
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "varchar", length: 100, nullable: false })
  name: string;

  @Column({ type: "varchar", length: 150, nullable: false, unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ nullable: false })
  birthDate: Date;

  @Column({ nullable: true })
  gender: string;

  @Column({ nullable: true })
  sex: string;

  @OneToMany(() => UserAllergies, (userAllergies) => userAllergies.user)
  userAllergies: UserAllergies[];

  @OneToMany(() => UserVaccine, (userVaccine) => userVaccine.vaccine)
  userVaccines: UserVaccine[];

  @OneToMany(() => UserDiseases, (userDiseases) => userDiseases.user)
  userDiseases: UserDiseases[];

  @OneToMany(() => UserMedications, (userMedications) => userMedications.user)
  userMedications: UserMedications[];

  @OneToOne(() => Anamnesis, (anamnesis) => anamnesis.user)
  anamnesis: Anamnesis;

  @OneToOne(() => ProfileImage, (profileImage) => profileImage.user)
  profileImage: ProfileImage;
}
