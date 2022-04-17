import {
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  Unique,
} from "typeorm";

import { UserDiseases } from "./UserDisease";

@Entity("diseases")
@Unique(["user", "disease"])
export class Diseases {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "varchar", length: 100, nullable: false, unique: true })
  name: string;

  // @OneToMany(() => UserDiseases, (userDisease) => userDisease.disease)
  // userDiseases: UserDiseases;
}
