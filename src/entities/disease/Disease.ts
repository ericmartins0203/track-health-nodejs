import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

import { UserDiseases } from "./UserDisease";

@Entity("diseases")
export class Diseases {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "varchar", length: 100, nullable: false, unique: true })
  name: string;

  @OneToMany(() => UserDiseases, (userDisease) => userDisease.disease)
  userDiseases: UserDiseases;
}
